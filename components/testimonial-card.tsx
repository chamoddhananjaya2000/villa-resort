"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export default function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <Card className="border-amber-200 h-full">
      <CardContent className="p-6">
        <motion.div
          className="flex mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
            >
              <Star className={`h-5 w-5 ${i < rating ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="text-gray-700 mb-6 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "{quote}"
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </motion.div>
      </CardContent>
    </Card>
  )
}
