import type React from "react"
import { redirect } from "next/navigation"
import { getSession } from "@/app/actions/auth"
import DashboardNav from "@/components/dashboard/nav"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getSession()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="container py-8 flex gap-8">
      <div className="w-64 shrink-0 border rounded-lg bg-background">
        <DashboardNav user={user} />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}
