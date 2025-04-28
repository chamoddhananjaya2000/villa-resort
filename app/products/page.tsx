import { getProducts } from "@/app/actions/products"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default async function ProductsPage() {
  const result = await getProducts()
  const products = result.success ? result.data : []

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products available at the moment.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product._id} className="overflow-hidden">
              <div className="aspect-video relative bg-muted">
                {product.image ? (
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
                )}
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                  <Badge>{product.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">{product.description}</p>
              </CardContent>
              <CardFooter>
                <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
