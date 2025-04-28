"use server"

import connectToDatabase from "@/lib/mongodb"
import Product from "@/models/product"
import { getSession } from "./auth"

export async function createProduct(formData: FormData) {
  try {
    const session = await getSession()

    if (!session) {
      return { success: false, message: "Not authenticated" }
    }

    await connectToDatabase()

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = Number.parseFloat(formData.get("price") as string)
    const category = formData.get("category") as string
    const image = formData.get("image") as string

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
    })

    return { success: true, data: product }
  } catch (error) {
    console.error("Error creating product:", error)
    return { success: false, message: "Failed to create product" }
  }
}

export async function getProducts(category?: string) {
  try {
    await connectToDatabase()

    const query = category ? { category } : {}

    const products = await Product.find(query)

    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching products:", error)
    return { success: false, message: "Failed to fetch products" }
  }
}

export async function getProduct(id: string) {
  try {
    await connectToDatabase()

    const product = await Product.findById(id)

    if (!product) {
      return { success: false, message: "Product not found" }
    }

    return { success: true, data: product }
  } catch (error) {
    console.error("Error fetching product:", error)
    return { success: false, message: "Failed to fetch product" }
  }
}

export async function updateProduct(id: string, formData: FormData) {
  try {
    const session = await getSession()

    if (!session) {
      return { success: false, message: "Not authenticated" }
    }

    await connectToDatabase()

    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const price = Number.parseFloat(formData.get("price") as string)
    const category = formData.get("category") as string
    const image = formData.get("image") as string

    const product = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        category,
        image,
        updatedAt: Date.now(),
      },
      { new: true, runValidators: true },
    )

    if (!product) {
      return { success: false, message: "Product not found" }
    }

    return { success: true, data: product }
  } catch (error) {
    console.error("Error updating product:", error)
    return { success: false, message: "Failed to update product" }
  }
}

export async function deleteProduct(id: string) {
  try {
    const session = await getSession()

    if (!session) {
      return { success: false, message: "Not authenticated" }
    }

    await connectToDatabase()

    const product = await Product.findByIdAndDelete(id)

    if (!product) {
      return { success: false, message: "Product not found" }
    }

    return { success: true, data: {} }
  } catch (error) {
    console.error("Error deleting product:", error)
    return { success: false, message: "Failed to delete product" }
  }
}
