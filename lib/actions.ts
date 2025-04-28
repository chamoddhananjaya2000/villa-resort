"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
  // This is a server action that would normally send the form data to a database or email service
  // For demo purposes, we'll just simulate a delay and return success

  // Extract form data
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const inquiryType = formData.get("inquiryType")
  const preferredContact = formData.get("preferredContact")
  const message = formData.get("message")

  // Validate form data
  if (!firstName || !lastName || !email || !message) {
    throw new Error("Please fill out all required fields")
  }

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would send this data to your backend
  console.log({
    firstName,
    lastName,
    email,
    phone,
    inquiryType,
    preferredContact,
    message,
  })

  // Return success
  return { success: true }
}

export async function bookRoom(formData: FormData) {
  // This would handle room booking logic
  // For demo purposes, we'll just redirect to a success page

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Redirect to success page
  redirect("/booking-confirmation")
}
