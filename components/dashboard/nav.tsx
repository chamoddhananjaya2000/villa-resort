"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "@/app/actions/auth"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Products", href: "/dashboard/products" },
  { name: "Profile", href: "/dashboard/profile" },
]

export default function DashboardNav({ user }: { user: { name: string; email: string } }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-6 w-full">
      <div className="flex flex-col space-y-2 px-4 py-2">
        <div className="text-lg font-medium">{user.name}</div>
        <div className="text-sm text-muted-foreground">{user.email}</div>
      </div>
      <div className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="px-4 mt-auto">
        <form action={signOut}>
          <Button type="submit" variant="outline" className="w-full">
            Sign Out
          </Button>
        </form>
      </div>
    </nav>
  )
}
