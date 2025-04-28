"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode
  className?: string
  delay?: number
  hoverEffect?: boolean
}

export default function AnimatedCard({
  children,
  className,
  delay = 0,
  hoverEffect = true,
  ...props
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hoverEffect
          ? {
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      <Card className={cn(className)} {...props}>
        {children}
      </Card>
    </motion.div>
  )
}
