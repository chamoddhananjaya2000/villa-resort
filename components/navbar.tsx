"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import AnimatedButton from "@/components/animated-button"
import SearchModal from "@/components/search-modal"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
          scrolled ? "bg-background/95 shadow-md" : "bg-background/80",
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center space-x-2">
              <motion.span
                className="text-xl font-bold text-amber-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Serenity Villa Resort
              </motion.span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={route.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-amber-800 relative",
                    pathname === route.href ? "text-amber-800" : "text-muted-foreground",
                  )}
                >
                  {route.label}
                  {pathname === route.href && (
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber-500"
                      layoutId="navbar-underline"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-2"
            >
              <AnimatedButton
                variant="outline"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="rounded-full"
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </AnimatedButton>
              <AnimatedButton asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/contact">Book Now</Link>
              </AnimatedButton>
            </motion.div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="outline" size="icon" onClick={() => setIsSearchOpen(true)} className="rounded-full">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <AnimatePresence>
                  <div className="flex flex-col gap-6 pt-10">
                    {routes.map((route, index) => (
                      <motion.div
                        key={route.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={route.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-amber-800",
                            pathname === route.href ? "text-amber-800" : "text-muted-foreground",
                          )}
                        >
                          {route.label}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <AnimatedButton asChild className="mt-4 bg-amber-600 hover:bg-amber-700 w-full">
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                          Book Now
                        </Link>
                      </AnimatedButton>
                    </motion.div>
                  </div>
                </AnimatePresence>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
