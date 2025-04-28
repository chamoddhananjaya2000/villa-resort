"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Utensils, Wifi, Car, Dumbbell } from "lucide-react"
import { motion } from "framer-motion"
import { CardContent } from "@/components/ui/card"
import TestimonialCard from "@/components/testimonial-card"
import RoomCard from "@/components/room-card"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import AnimatedButton from "@/components/animated-button"
import AnimatedCard from "@/components/animated-card"
import ParallaxImage from "@/components/parallax-image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src="/images/hero.jpg" alt="Luxury Villa Resort" fill priority className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatedText
              text="Serenity Villa Resort"
              tag="h1"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              delay={0.8}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl md:text-2xl max-w-2xl mb-8"
            >
              Experience luxury and tranquility in our exclusive beachfront villas
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AnimatedButton size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/contact">Book Now</Link>
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/services">Explore Services</Link>
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div>
              <AnimatedText text="Welcome to Paradise" className="text-3xl md:text-4xl font-bold mb-6 text-amber-800" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-gray-700 mb-6">
                  Nestled on the pristine shores of the Pacific Ocean, Serenity Villa Resort offers an unparalleled
                  luxury experience. Our exclusive collection of private villas combines traditional architecture with
                  modern amenities to create the perfect retreat for discerning travelers.
                </p>
                <p className="text-gray-700 mb-8">
                  Whether you're seeking a romantic getaway, a family vacation, or a peaceful solo retreat, our
                  attentive staff and world-class facilities ensure an unforgettable stay.
                </p>
                <AnimatedButton asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </AnimatedButton>
              </motion.div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.3}>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="h-full w-full">
                <Image src="/images/welcome.jpg" alt="Villa Interior" fill className="object-cover rounded-lg" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText
              text="Our Luxury Accommodations"
              className="text-3xl md:text-4xl font-bold mb-4 text-amber-800"
            />
            <AnimatedSection>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Choose from our selection of meticulously designed villas, each offering privacy, comfort, and stunning
                views of the surrounding landscape.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <RoomCard
                title="Ocean View Villa"
                description="Spacious villa with panoramic ocean views, private pool, and direct beach access."
                price={350}
                image="/images/room1.jpg"
              />
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <RoomCard
                title="Garden Retreat Villa"
                description="Serene villa surrounded by lush tropical gardens with a private terrace and plunge pool."
                price={280}
                image="/images/room2.jpg"
              />
            </AnimatedCard>
            <AnimatedCard delay={0.5}>
              <RoomCard
                title="Family Pool Villa"
                description="Two-bedroom villa perfect for families, featuring a large pool and outdoor dining area."
                price={450}
                image="/images/room3.jpg"
              />
            </AnimatedCard>
          </div>

          <AnimatedSection delay={0.7}>
            <div className="text-center mt-12">
              <AnimatedButton asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/services">
                  View All Accommodations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedText text="Resort Amenities" className="text-3xl md:text-4xl font-bold mb-4 text-amber-800" />
          <AnimatedSection>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Enjoy our comprehensive range of amenities designed to enhance your stay and provide the ultimate comfort.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCard delay={0.1} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Wifi className="h-12 w-12 text-amber-600 mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">High-Speed WiFi</h3>
              <p className="text-gray-600 text-sm">
                Stay connected with complimentary high-speed internet throughout the resort.
              </p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Utensils className="h-12 w-12 text-amber-600 mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Gourmet Dining</h3>
              <p className="text-gray-600 text-sm">
                Experience exquisite cuisine at our beachfront restaurant or in-villa dining service.
              </p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.3} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Dumbbell className="h-12 w-12 text-amber-600 mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Fitness Center</h3>
              <p className="text-gray-600 text-sm">
                Maintain your fitness routine in our fully-equipped gym with ocean views.
              </p>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard delay={0.4} className="border-amber-200">
            <CardContent className="flex flex-col items-center text-center p-6">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                <Car className="h-12 w-12 text-amber-600 mb-4" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">Airport Transfer</h3>
              <p className="text-gray-600 text-sm">
                Complimentary luxury transportation between the airport and our resort.
              </p>
            </CardContent>
          </AnimatedCard>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText text="Guest Experiences" className="text-3xl md:text-4xl font-bold mb-4 text-amber-800" />
            <AnimatedSection>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Discover what our guests have to say about their stay at Serenity Villa Resort.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <TestimonialCard
                quote="Our stay at Serenity Villa Resort exceeded all expectations. The private villa was immaculate, and the staff went above and beyond to make our anniversary special."
                author="James & Sarah Wilson"
                location="London, UK"
                rating={5}
              />
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <TestimonialCard
                quote="The perfect family getaway! Our children loved the pool and beach activities, while we appreciated the spacious villa and excellent dining options."
                author="The Rodriguez Family"
                location="Miami, USA"
                rating={5}
              />
            </AnimatedCard>
            <AnimatedCard delay={0.5}>
              <TestimonialCard
                quote="As a solo traveler seeking peace and relaxation, I found exactly what I needed at Serenity. The spa treatments were exceptional, and the private villa offered complete tranquility."
                author="Akiko Tanaka"
                location="Tokyo, Japan"
                rating={4}
              />
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 text-white">
        <ParallaxImage src="/images/cta.jpg" alt="Beach sunset" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 z-0">
        <Image src="/images/cta.jpg" alt="Beach sunset" fill className="object-cover" />
        </div>


        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <AnimatedText text="Ready for an Unforgettable Experience?" className="text-3xl md:text-4xl font-bold mb-6" />
          <AnimatedSection>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Book your stay today and discover why Serenity Villa Resort is the destination of choice for discerning
              travelers.
            </p>
            <AnimatedButton size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/contact">Book Your Stay Now</Link>
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
