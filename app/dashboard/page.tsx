import { getSession } from "@/app/actions/auth"
import { getProducts } from "@/app/actions/products"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const user = await getSession()
  const productsResult = await getProducts()

  const productCount = productsResult.success ? productsResult.data.length : 0

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">Welcome back, {user?.name}!</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Products</CardTitle>
            <CardDescription>Total products in your catalog</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{productCount}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
