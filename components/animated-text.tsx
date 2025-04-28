"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  staggerChildren?: number
  once?: boolean
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  staggerChildren = 0.05,
  once = true,
  tag = "h2",
}: AnimatedTextProps) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerChildren, delayChildren: delay },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const Tag = tag

  return (
    <motion.div
      style={{ overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn("flex flex-wrap", className)}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-1.5 mt-1" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
