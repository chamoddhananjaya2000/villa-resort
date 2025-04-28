"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import connectToDatabase from "@/lib/mongodb"
import User from "@/models/user"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function signUp(formData: FormData) {
  try {
    await connectToDatabase()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return { success: false, message: "User already exists" }
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "7d" })

    // Set cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true, user: { id: user._id, name: user.name, email: user.email } }
  } catch (error) {
    console.error("Error signing up:", error)
    return { success: false, message: "Failed to sign up" }
  }
}

export async function signIn(formData: FormData) {
  try {
    await connectToDatabase()

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      return { success: false, message: "Invalid credentials" }
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return { success: false, message: "Invalid credentials" }
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "7d" })

    // Set cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true, user: { id: user._id, name: user.name, email: user.email } }
  } catch (error) {
    console.error("Error signing in:", error)
    return { success: false, message: "Failed to sign in" }
  }
}

export async function signOut() {
  cookies().delete("token")
  redirect("/")
}

export async function getSession() {
  try {
    const token = cookies().get("token")?.value

    if (!token) {
      return null
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string }

    await connectToDatabase()

    const user = await User.findById(decoded.userId).select("-password")

    if (!user) {
      return null
    }

    return { id: user._id, name: user.name, email: user.email }
  } catch (error) {
    console.error("Error getting session:", error)
    return null
  }
}
