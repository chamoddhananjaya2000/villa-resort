"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedButton from "@/components/animated-button"

interface RoomCardProps {
  title: string
  description: string
  price: number
  image: string
  details?: string[]
}

export default function RoomCard({ title, description, price, image, details }: RoomCardProps) {
  return (
    <Card className="overflow-hidden border-amber-200 h-full">
      <motion.div
        className="relative h-48 md:h-64 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform" />
      </motion.div>
      <CardContent className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2 text-amber-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-700 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>

        {details && (
          <motion.ul
            className="space-y-1 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {details.map((detail, index) => (
              <motion.li
                key={index}
                className="flex items-center text-sm text-gray-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <Check className="h-4 w-4 text-amber-600 mr-2" />
                {detail}
              </motion.li>
            ))}
          </motion.ul>
        )}

        <div className="flex items-center justify-between mt-4">
          <motion.div
            className="text-amber-800 font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ${price}
            <span className="text-sm font-normal text-gray-600">/night</span>
          </motion.div>
          <AnimatedButton asChild className="bg-amber-600 hover:bg-amber-700">
            <Link href="/contact">Book Now</Link>
          </AnimatedButton>
        </div>
      </CardContent>
    </Card>
  )
}
