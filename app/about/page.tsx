import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Award, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TeamMember from "@/components/team-member"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <Image src="/images/about-hero.jpg" alt="About Serenity Villa Resort" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Discover the story behind Serenity Villa Resort and our commitment to exceptional hospitality
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-800">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2005 by the Nakamura family, Serenity Villa Resort began as a small collection of beachfront
              bungalows designed to offer travelers an authentic yet luxurious experience of coastal living.
            </p>
            <p className="text-gray-700 mb-6">
              Over the years, we have grown and evolved, expanding our property and enhancing our offerings while
              staying true to our original vision: creating a sanctuary where guests can reconnect with nature,
              themselves, and each other.
            </p>
            <p className="text-gray-700">
              Today, Serenity Villa Resort stands as a premier destination for luxury travelers, combining traditional
              architecture with modern amenities, exceptional service, and a deep respect for our natural surroundings.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image src="/images/our-story.jpeg" alt="Resort History" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Serenity Villa Resort, our approach to hospitality is guided by these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-amber-200">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Users className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                <p className="text-gray-600">
                  We believe in treating each guest as an individual, tailoring our services to meet your unique needs
                  and preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Award className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every detail, from the design of our villas to the quality of our
                  amenities and services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Calendar className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to sustainable practices that preserve the natural beauty of our surroundings for
                  future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200">
              <CardContent className="flex flex-col items-center text-center p-6">
                <Clock className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Timeless Luxury</h3>
                <p className="text-gray-600">
                  We believe that true luxury is timeless, combining traditional elegance with contemporary comfort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Meet Our Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            The dedicated professionals who work tirelessly to ensure your stay exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Hiroshi Nakamura"
            role="Founder & CEO"
            image="/images/team1.jpg"
            bio="With over 30 years in luxury hospitality, Hiroshi's vision and leadership continue to guide Serenity Villa Resort."
          />
          <TeamMember
            name="Elena Rodriguez"
            role="General Manager"
            image="/images/team2.jpg"
            bio="Elena brings 15 years of international hotel management experience to ensure the highest standards across all operations."
          />
          <TeamMember
            name="Chef Michael Chen"
            role="Executive Chef"
            image="/images/team3.jpg"
            bio="Award-winning Chef Michael creates culinary masterpieces that blend local ingredients with international techniques."
          />
          <TeamMember
            name="Sophia Williams"
            role="Guest Relations Director"
            image="/images/team4.jpg"
            bio="Sophia and her team are dedicated to personalizing each guest's experience and attending to every detail of your stay."
          />
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Awards & Recognition</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We're honored to be recognized by these prestigious organizations for our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="p-4">
              <Image src="/images/award1.jpeg" alt="Luxury Travel Award" width={150} height={150} className="mx-auto" />
              <p className="text-center mt-4 font-medium">Best Luxury Resort 2023</p>
            </div>
            <div className="p-4">
              <Image
                src="/images/award2.png"
                alt="Sustainable Tourism Award"
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="text-center mt-4 font-medium">Green Hospitality Excellence</p>
            </div>
            <div className="p-4">
              <Image
                src="/images/award3.webp"
                alt="Five Star Service Award"
                width={150}
                height={150}
                className="mx-auto"
              />
              <p className="text-center mt-4 font-medium">Five Star Service Award</p>
            </div>
            <div className="p-4">
              <Image src="/images/award4.jpeg" alt="Culinary Excellence" width={150} height={150} className="mx-auto" />
              <p className="text-center mt-4 font-medium">Culinary Excellence 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-cta.jpg" alt="Resort view" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Serenity For Yourself</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We invite you to discover the unique blend of luxury, nature, and personalized service that defines Serenity
            Villa Resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
