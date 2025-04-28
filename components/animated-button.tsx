"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  tapScale?: number
}

export default function AnimatedButton({
  children,
  className,
  hoverScale = 1.05,
  tapScale = 0.95,
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-amber-400/20 rounded-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <Button className={cn(className)} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
