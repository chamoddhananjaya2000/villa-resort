import Link from "next/link"
import { getProducts } from "@/app/actions/products"
import ProductList from "@/components/products/product-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function ProductsPage() {
  const result = await getProducts()
  const products = result.success ? result.data : []

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link href="/dashboard/products/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found. Add your first product!</p>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  )
}
