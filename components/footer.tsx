"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import AnimatedButton from "@/components/animated-button"

export default function Footer() {
  const staggerChildren = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={item}>
            <h3 className="text-xl font-bold mb-4">Serenity Villa Resort</h3>
            <p className="mb-4 text-amber-100">Experience luxury and tranquility in our exclusive beachfront villas.</p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                <Link href="#" className="hover:text-amber-300">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                <Link href="#" className="hover:text-amber-300">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                <Link href="#" className="hover:text-amber-300">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms & Conditions" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="hover:text-amber-300">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <motion.li className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  123 Paradise Bay Road
                  <br />
                  Tropical Island, TI 98765
                </span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li className="flex items-center" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@serenityvilla.com</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-amber-100">Subscribe to our newsletter for special offers and updates.</p>
            <form className="space-y-2">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-amber-800 border-amber-700 text-white placeholder:text-amber-300"
                />
              </motion.div>
              <AnimatedButton className="w-full bg-amber-600 hover:bg-amber-500 text-white">Subscribe</AnimatedButton>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-200"
        >
          <p>&copy; {new Date().getFullYear()} Serenity Villa Resort. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
