"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createProduct, updateProduct } from "@/app/actions/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductFormProps {
  product?: {
    _id: string
    name: string
    description: string
    price: number
    category: string
    image: string
  }
}

const categories = ["Electronics", "Clothing", "Books", "Home & Kitchen", "Beauty", "Toys", "Sports", "Other"]

export default function ProductForm({ product }: ProductFormProps) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState(product?.category || "")

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)

    // Add the category to the form data
    formData.set("category", category)

    try {
      const result = product ? await updateProduct(product._id, formData) : await createProduct(formData)

      if (result.success) {
        router.push("/dashboard/products")
        router.refresh()
      } else {
        setError(result.message || "Failed to save product")
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{product ? "Edit Product" : "Add New Product"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" name="name" defaultValue={product?.name} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" defaultValue={product?.description} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" type="number" step="0.01" defaultValue={product?.price} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" name="image" defaultValue={product?.image} />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : product ? "Update Product" : "Add Product"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
