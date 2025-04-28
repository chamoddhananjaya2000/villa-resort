import Link from "next/link"
import Image from "next/image"
import { deleteProduct } from "@/app/actions/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pencil, Trash2 } from "lucide-react"

interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
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
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <form
              action={async () => {
                "use server"
                await deleteProduct(product._id)
              }}
            >
              <Button variant="outline" size="icon" type="submit">
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </form>
            <Link href={`/dashboard/products/${product._id}/edit`}>
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
