import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSession } from "./app/actions/auth"

export async function middleware(request: NextRequest) {
  // Check if the route is protected
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/profile")

  if (isProtectedRoute) {
    const session = await getSession()

    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
}
