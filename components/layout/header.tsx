import Link from "next/link"
import { getSession } from "@/app/actions/auth"
import { Button } from "@/components/ui/button"

export default async function Header() {
  const user = await getSession()

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            My App
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
