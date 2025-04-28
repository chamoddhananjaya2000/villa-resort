"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.5 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const elementTop = ref.current.getBoundingClientRect().top + scrollY
      const elementHeight = ref.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Check if element is in viewport
      if (scrollY + viewportHeight > elementTop && scrollY < elementTop + elementHeight) {
        const offset = (scrollY - elementTop) * speed
        ref.current.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
    </div>
  )
}
