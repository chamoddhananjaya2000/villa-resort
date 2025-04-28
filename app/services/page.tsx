import Image from "next/image"
import Link from "next/link"
import { Bed, Utensils, SpadeIcon as Spa, Waves, Users, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import RoomCard from "@/components/room-card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/services-hero.jpg"
          alt="Serenity Villa Resort Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Discover the exceptional experiences and amenities that await you at Serenity Villa Resort
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Tabs defaultValue="accommodation" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto mb-12">
            <TabsTrigger
              value="accommodation"
              className="py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Bed className="mr-2 h-5 w-5" />
              Accommodation
            </TabsTrigger>
            <TabsTrigger
              value="dining"
              className="py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Utensils className="mr-2 h-5 w-5" />
              Dining
            </TabsTrigger>
            <TabsTrigger
              value="wellness"
              className="py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Spa className="mr-2 h-5 w-5" />
              Wellness
            </TabsTrigger>
            <TabsTrigger
              value="activities"
              className="py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Waves className="mr-2 h-5 w-5" />
              Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="accommodation" className="mt-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Luxury Accommodations</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our collection of private villas offers the perfect blend of traditional architecture, modern amenities,
                and breathtaking views.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <RoomCard
                title="Ocean View Villa"
                description="Spacious villa with panoramic ocean views, private pool, and direct beach access. Features king-size bed, luxury bathroom with outdoor shower, and private terrace."
                price={350}
                image="/images/room1.jpg"
                details={["1 Bedroom", "Ocean View", "Private Pool", "Max 2 Guests"]}
              />
              <RoomCard
                title="Garden Retreat Villa"
                description="Serene villa surrounded by lush tropical gardens with a private terrace and plunge pool. Features king-size bed, luxury bathroom, and outdoor dining area."
                price={280}
                image="/images/room2.jpg"
                details={["1 Bedroom", "Garden View", "Plunge Pool", "Max 2 Guests"]}
              />
              <RoomCard
                title="Family Pool Villa"
                description="Two-bedroom villa perfect for families, featuring a large pool and outdoor dining area. Master bedroom with king-size bed and second bedroom with twin beds."
                price={450}
                image="/images/room3.jpg"
                details={["2 Bedrooms", "Garden View", "Large Pool", "Max 4 Guests"]}
              />
              <RoomCard
                title="Honeymoon Suite"
                description="Romantic villa designed for couples, featuring a private infinity pool overlooking the ocean, outdoor bathtub, and champagne on arrival."
                price={400}
                image="/images/room4.jpg"
                details={["1 Bedroom", "Ocean View", "Infinity Pool", "Max 2 Guests"]}
              />
              <RoomCard
                title="Presidential Villa"
                description="Our most luxurious accommodation featuring three bedrooms, expansive living areas, private chef service, and a large infinity pool with panoramic views."
                price={850}
                image="/images/room5.jpg"
                details={["3 Bedrooms", "Panoramic View", "Infinity Pool", "Max 6 Guests"]}
              />
              <RoomCard
                title="Beachfront Bungalow"
                description="Charming one-bedroom bungalow located directly on the beach with a private terrace, outdoor shower, and stunning sunset views."
                price={320}
                image="/images/room6.jpg"
                details={["1 Bedroom", "Beachfront", "Private Terrace", "Max 2 Guests"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="dining" className="mt-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Culinary Experiences</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Indulge in exceptional dining experiences featuring fresh local ingredients and international flavors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/restaurant.jpg"
                  alt="Oceanfront Restaurant"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-800">Oceanfront Restaurant</h3>
                <p className="text-gray-700 mb-6">
                  Our signature restaurant offers panoramic ocean views and a menu that celebrates the bounty of the sea
                  and local produce. Executive Chef Michael Chen creates dishes that blend traditional techniques with
                  contemporary presentation.
                </p>
                <p className="text-gray-700 mb-6">
                  Open for breakfast, lunch, and dinner, the restaurant features daily specials based on the freshest
                  seasonal ingredients.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <CalendarDays className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">Open daily: 7:00 AM - 10:30 PM</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-gray-700">Reservations recommended for dinner</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-amber-800">Private Dining Experiences</h3>
                <p className="text-gray-700 mb-6">
                  For special occasions or intimate gatherings, we offer a range of private dining options:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-amber-600 h-2 w-2 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Beach Dinner: A romantic table for two set up on the beach with a personalized menu and dedicated
                      server.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-amber-600 h-2 w-2 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      In-Villa Dining: Enjoy a gourmet meal prepared and served in the privacy of your villa.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-amber-600 h-2 w-2 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Chef's Table: An interactive dining experience where Chef Michael prepares a custom tasting menu
                      before your eyes.
                    </span>
                  </li>
                </ul>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">Inquire About Private Dining</Link>
                </Button>
              </div>
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/images/private-dining.jpg" alt="Private Dining" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wellness" className="mt-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Wellness & Spa</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Rejuvenate your body and mind with our comprehensive wellness offerings and luxurious spa treatments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <Image src="/images/spa.jpg" alt="Serenity Spa" fill className="object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-amber-800">Serenity Spa</h3>
                <p className="text-gray-700 mb-6">
                  Our award-winning spa offers a sanctuary of peace and tranquility where skilled therapists provide
                  treatments inspired by ancient healing traditions and modern techniques.
                </p>
                <p className="text-gray-700 mb-6">
                  Each treatment begins with a consultation to customize the experience to your specific needs and
                  preferences.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Signature Massage</h4>
                      <p className="text-sm text-gray-600">A blend of techniques tailored to your needs</p>
                      <p className="text-amber-800 mt-2">90 min - $150</p>
                    </CardContent>
                  </Card>
                  <Card className="border-amber-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Ocean Radiance Facial</h4>
                      <p className="text-sm text-gray-600">Revitalizing treatment with marine extracts</p>
                      <p className="text-amber-800 mt-2">60 min - $120</p>
                    </CardContent>
                  </Card>
                  <Card className="border-amber-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Detox Body Wrap</h4>
                      <p className="text-sm text-gray-600">Purifying treatment with local clay</p>
                      <p className="text-amber-800 mt-2">75 min - $140</p>
                    </CardContent>
                  </Card>
                  <Card className="border-amber-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Couples Retreat</h4>
                      <p className="text-sm text-gray-600">Massage, facial, and private relaxation</p>
                      <p className="text-amber-800 mt-2">120 min - $350</p>
                    </CardContent>
                  </Card>
                </div>
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact">Book a Spa Treatment</Link>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-amber-800">Yoga & Meditation</h3>
                  <p className="text-gray-700 mb-4">
                    Daily classes for all levels held in our beachfront pavilion or garden setting. Private sessions
                    available.
                  </p>
                  <p className="text-sm text-gray-600">
                    Morning Sessions: 7:00 AM - 8:00 AM
                    <br />
                    Evening Sessions: 5:00 PM - 6:00 PM
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-amber-800">Fitness Center</h3>
                  <p className="text-gray-700 mb-4">
                    State-of-the-art equipment with ocean views. Personal training and fitness assessments available.
                  </p>
                  <p className="text-sm text-gray-600">
                    Open 24 hours for resort guests
                    <br />
                    Personal training by appointment
                  </p>
                </CardContent>
              </Card>
              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-amber-800">Wellness Packages</h3>
                  <p className="text-gray-700 mb-4">
                    Customized multi-day programs combining spa treatments, fitness, nutrition, and mindfulness.
                  </p>
                  <p className="text-sm text-gray-600">
                    3-Day Renewal: $500
                    <br />
                    5-Day Transformation: $800
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activities" className="mt-0">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">Resort Activities</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Discover a world of adventure, relaxation, and cultural experiences during your stay.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/water-sports.jpg" alt="Water Sports" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">Water Sports</h3>
                  <p className="text-gray-700 mb-4">
                    Explore the crystal-clear waters through snorkeling, kayaking, paddleboarding, and sailing.
                    Equipment and instruction provided.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Available daily: 9:00 AM - 5:00 PM
                    <br />
                    Complimentary basic equipment
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Reserve Activity</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/excursions.jpg" alt="Island Excursions" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">Island Excursions</h3>
                  <p className="text-gray-700 mb-4">
                    Guided tours to nearby islands, hidden beaches, and local villages. Experience the natural beauty
                    and culture of the region.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Half-day and full-day options
                    <br />
                    Private and group tours available
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Book Excursion</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/cooking-class.jpg" alt="Cooking Classes" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">Cooking Classes</h3>
                  <p className="text-gray-700 mb-4">
                    Learn to prepare local specialties with our executive chef. Includes market visit, cooking session,
                    and enjoying your creations.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Offered twice weekly: Tuesdays & Fridays
                    <br />
                    Duration: 3-4 hours
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Join a Class</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/diving.jpg" alt="Scuba Diving" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">Scuba Diving</h3>
                  <p className="text-gray-700 mb-4">
                    Explore vibrant coral reefs and marine life with our PADI-certified instructors. Courses and guided
                    dives for all levels.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Beginner to advanced courses
                    <br />
                    Daily dive trips to nearby sites
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Arrange Diving</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/cultural.jpg" alt="Cultural Experiences" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">Cultural Experiences</h3>
                  <p className="text-gray-700 mb-4">
                    Immerse yourself in local traditions through dance performances, craft workshops, and cultural
                    demonstrations.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Cultural show: Wednesday evenings
                    <br />
                    Workshops: Various schedules
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">View Schedule</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-amber-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/images/sunset-cruise.jpg" alt="Sunset Cruise" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-800">Sunset Cruise</h3>
                  <p className="text-gray-700 mb-4">
                    Sail into the sunset aboard our luxury catamaran. Enjoy champagne, canapés, and breathtaking views.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Daily departure: 1 hour before sunset
                    <br />
                    Duration: 2 hours
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contact">Reserve Cruise</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 text-white mt-12">
        <div className="absolute inset-0 z-0">
          <Image src="/images/services-cta.jpg" alt="Resort services" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Customize Your Perfect Stay</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our concierge team is available to help you plan a personalized itinerary that combines the best of our
            services and activities.
          </p>
          <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/contact">Contact Our Concierge</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
