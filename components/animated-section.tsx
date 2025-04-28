"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
  threshold?: number
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [once, threshold])

  const variants = {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
