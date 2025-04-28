"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "@/lib/actions"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import AnimatedCard from "@/components/animated-card"
import AnimatedButton from "@/components/animated-button"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      await submitContactForm(formData)
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      })

      // Reset form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Serenity Villa Resort"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatedText text="Contact Us" tag="h1" className="text-4xl md:text-5xl font-bold mb-4" delay={0.8} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl max-w-2xl"
            >
              We're here to answer your questions and help you plan your perfect stay
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedCard delay={0.1} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div
                className="bg-amber-100 p-4 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Phone className="h-6 w-6 text-amber-600" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-700 mb-2">Reservations: +94 (045) 123-4567</p>
              <p className="text-gray-700">General Inquiries: +94 (045) 765-4321</p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div
                className="bg-amber-100 p-4 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Mail className="h-6 w-6 text-amber-600" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-700 mb-2">Reservations: bookings@serenityvilla.com</p>
              <p className="text-gray-700">General Inquiries: info@serenityvilla.com</p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div
                className="bg-amber-100 p-4 rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Clock className="h-6 w-6 text-amber-600" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-700 mb-2">Reservations: 24/7</p>
              <p className="text-gray-700">Front Desk: 24/7</p>
              <p className="text-gray-700">Concierge: 7:00 AM - 10:00 PM</p>
            </CardContent>
          </AnimatedCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Send Us a Message</h2>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input id="firstName" name="firstName" required />
                  </motion.div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Input id="lastName" name="lastName" required />
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input id="email" name="email" type="email" required />
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input id="phone" name="phone" type="tel" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label>Inquiry Type</Label>
                <RadioGroup defaultValue="reservation" name="inquiryType">
                  <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reservation" id="reservation" />
                        <Label htmlFor="reservation">Reservation</Label>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="information" id="information" />
                        <Label htmlFor="information">Information</Label>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="feedback" id="feedback" />
                        <Label htmlFor="feedback">Feedback</Label>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </motion.div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Select name="preferredContact" defaultValue="email">
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Textarea id="message" name="message" rows={5} required />
                </motion.div>
              </div>

              <AnimatedButton type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⟳</span> Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </AnimatedButton>
            </motion.form>
          </AnimatedSection>

          {/* Map and Location */}
          <AnimatedSection direction="right" delay={0.3}>
            <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Location</h2>
            <div className="space-y-6">
              <motion.div
                className="aspect-video relative rounded-lg overflow-hidden border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d103.85983601475435!3d1.2800134990669582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDguMSJOIDEwM8KwNTEnNDEuNyJF!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0"
                ></iframe>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-700">
                    Serenity Villa Resort
                    <br />
                    123 Paradise Bay Road
                    <br />
                    Tropical Island, TI 98765
                    <br />
                    Pacific Ocean
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="font-semibold mb-2">Getting Here</h3>
                <div className="space-y-4">
                  <motion.div
                    className="bg-amber-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium mb-1">By Air</h4>
                    <p className="text-gray-700 text-sm">
                      The nearest international airport is Tropical Island International Airport (TIA), located 25 km
                      from the resort. We offer complimentary airport transfers for all guests.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-amber-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium mb-1">By Sea</h4>
                    <p className="text-gray-700 text-sm">
                      Ferry services operate daily from the mainland to Tropical Island Ferry Terminal, located 10 km
                      from the resort. We can arrange transportation from the terminal.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-amber-50 p-4 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium mb-1">Resort Transportation</h4>
                    <p className="text-gray-700 text-sm">
                      We offer complimentary shuttle service to nearby attractions and the town center. Car rentals and
                      private drivers are also available upon request.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Frequently Asked Questions"
              className="text-3xl md:text-4xl font-bold mb-4 text-amber-800"
            />
            <AnimatedSection>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about Serenity Villa Resort.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedCard delay={0.1} className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">
                  What are your check-in and check-out times?
                </h3>
                <p className="text-gray-700">
                  Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be
                  arranged based on availability.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Do you offer airport transfers?</h3>
                <p className="text-gray-700">
                  Yes, we provide complimentary airport transfers for all guests. Please provide your flight details at
                  least 48 hours prior to arrival.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.3} className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">What is your cancellation policy?</h3>
                <p className="text-gray-700">
                  Cancellations made 14 days or more before arrival receive a full refund. Cancellations within 14 days
                  of arrival are subject to a one-night charge.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Is Wi-Fi available at the resort?</h3>
                <p className="text-gray-700">
                  Yes, complimentary high-speed Wi-Fi is available throughout the resort, including all villas, public
                  areas, and the beach.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.5} className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Are children welcome at the resort?</h3>
                <p className="text-gray-700">
                  Yes, we welcome guests of all ages. We offer family-friendly villas, children's activities, and
                  babysitting services upon request.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.6} className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-amber-800">
                  Do you accommodate special dietary requirements?
                </h3>
                <p className="text-gray-700">
                  Yes, our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and
                  allergies. Please inform us in advance.
                </p>
              </CardContent>
            </AnimatedCard>
          </div>

          <AnimatedSection delay={0.7}>
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-4">
                Don't see your question here? Contact us directly and we'll be happy to assist you.
              </p>
              <AnimatedButton asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="mailto:info@serenityvilla.com">
                  <Mail className="mr-2 h-4 w-4" /> Email Us
                </Link>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 text-white">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image src="/images/contact-cta.png" alt="Resort view" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedText text="Ready to Book Your Stay?" className="text-3xl md:text-4xl font-bold mb-6" />
          <AnimatedSection>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Contact our reservations team today to secure your perfect villa and start planning your dream vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" /> Call Reservations
                </Link>
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="mailto:bookings@serenityvilla.com">
                  <Mail className="mr-2 h-5 w-5" /> Email Reservations
                </Link>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
