import { type NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/mongodb"
import Product from "@/models/product"

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase()

    // Get query parameters
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")

    // Build query
    const query = category ? { category } : {}

    const products = await Product.find(query)

    return NextResponse.json({ success: true, data: products })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase()

    const body = await req.json()

    const product = await Product.create(body)

    return NextResponse.json({ success: true, data: product }, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ success: false, message: "Failed to create product" }, { status: 500 })
  }
}
