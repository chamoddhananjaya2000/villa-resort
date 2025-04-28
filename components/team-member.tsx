"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card className="border-amber-200 overflow-hidden h-full">
      <motion.div className="relative h-64" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </motion.div>
      <CardContent className="p-6">
        <motion.h3
          className="text-xl font-bold mb-1 text-amber-800"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-amber-600 font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {role}
        </motion.p>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {bio}
        </motion.p>
      </CardContent>
    </Card>
  )
}
