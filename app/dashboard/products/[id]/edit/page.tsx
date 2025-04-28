import { notFound } from "next/navigation"
import { getProduct } from "@/app/actions/products"
import ProductForm from "@/components/products/product-form"

interface EditProductPageProps {
  params: {
    id: string
  }
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const result = await getProduct(params.id)

  if (!result.success) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Edit Product</h1>
      <ProductForm product={result.data} />
    </div>
  )
}
