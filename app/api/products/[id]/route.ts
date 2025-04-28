import { type NextRequest, NextResponse } from "next/server"
import connectToDatabase from "@/lib/mongodb"
import Product from "@/models/product"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const product = await Product.findById(params.id)

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: product })
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const body = await req.json()

    const product = await Product.findByIdAndUpdate(
      params.id,
      { ...body, updatedAt: Date.now() },
      { new: true, runValidators: true },
    )

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: product })
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ success: false, message: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase()

    const product = await Product.findByIdAndDelete(params.id)

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: {} })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ success: false, message: "Failed to delete product" }, { status: 500 })
  }
}
