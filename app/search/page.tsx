"use client"

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, SlidersHorizontal, Check } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import AnimatedSection from "@/components/animated-section"
import AnimatedText from "@/components/animated-text"
import AnimatedCard from "@/components/animated-card"
import AnimatedButton from "@/components/animated-button"

// Sample room data
const allRooms = [
  {
    id: 1,
    title: "Ocean View Villa",
    description: "Spacious villa with panoramic ocean views, private pool, and direct beach access.",
    price: 350,
    image: "/images/room1.jpg",
    features: ["Ocean View", "Private Pool", "Beach Access", "King Bed"],
  },
  {
    id: 2,
    title: "Garden Retreat Villa",
    description: "Serene villa surrounded by lush tropical gardens with a private terrace and plunge pool.",
    price: 280,
    image: "/images/room2.jpg",
    features: ["Garden View", "Plunge Pool", "Private Terrace", "Queen Bed"],
  },
  {
    id: 3,
    title: "Family Pool Villa",
    description: "Two-bedroom villa perfect for families, featuring a large pool and outdoor dining area.",
    price: 450,
    image: "/images/room3.jpg",
    features: ["Family Friendly", "Large Pool", "Outdoor Dining", "2 Bedrooms"],
  },
  {
    id: 4,
    title: "Honeymoon Suite",
    description: "Romantic villa designed for couples, featuring a private infinity pool overlooking the ocean.",
    price: 400,
    image: "/images/room4.jpg",
    features: ["Ocean View", "Infinity Pool", "Romantic Setting", "King Bed"],
  },
  {
    id: 5,
    title: "Presidential Villa",
    description:
      "Our most luxurious accommodation with three bedrooms, expansive living areas, and a large infinity pool.",
    price: 850,
    image: "/images/room5.jpg",
    features: ["Ocean View", "Infinity Pool", "3 Bedrooms", "Private Chef"],
  },
  {
    id: 6,
    title: "Beachfront Bungalow",
    description: "Charming one-bedroom bungalow located directly on the beach with a private terrace.",
    price: 320,
    image: "/images/room6.jpg",
    features: ["Beach Access", "Private Terrace", "Sunset Views", "Queen Bed"],
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""
  const minPrice = Number(searchParams.get("minPrice")) || 100
  const maxPrice = Number(searchParams.get("maxPrice")) || 1000
  const guests = Number(searchParams.get("guests")) || 2

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(query)
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice])
  const [filters, setFilters] = useState({
    oceanView: false,
    privatePool: false,
    familyFriendly: false,
    beachAccess: false,
  })
  const [filteredRooms, setFilteredRooms] = useState(allRooms)

  useEffect(() => {
    // Filter rooms based on search criteria
    let results = allRooms

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      results = results.filter(
        (room) =>
          room.title.toLowerCase().includes(lowerQuery) ||
          room.description.toLowerCase().includes(lowerQuery) ||
          room.features.some((feature) => feature.toLowerCase().includes(lowerQuery)),
      )
    }

    // Filter by price range
    results = results.filter((room) => room.price >= priceRange[0] && room.price <= priceRange[1])

    // Filter by amenities
    if (filters.oceanView) {
      results = results.filter((room) => room.features.includes("Ocean View"))
    }
    if (filters.privatePool) {
      results = results.filter(
        (room) =>
          room.features.includes("Plunge Pool") ||
          room.features.includes("Private Pool") ||
          room.features.includes("Infinity Pool") ||
          room.features.includes("Large Pool"),
      )
    }
    if (filters.familyFriendly) {
      results = results.filter(
        (room) =>
          room.features.includes("Family Friendly") ||
          room.features.includes("2 Bedrooms") ||
          room.features.includes("3 Bedrooms"),
      )
    }
    if (filters.beachAccess) {
      results = results.filter((room) => room.features.includes("Beach Access"))
    }

    setFilteredRooms(results)
  }, [searchQuery, priceRange, filters])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src="/images/services-hero.jpg" alt="Search Results" fill priority className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AnimatedText text="Search Results" tag="h1" className="text-4xl md:text-5xl font-bold mb-4" delay={0.8} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xl max-w-2xl"
            >
              Find your perfect villa for an unforgettable stay
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-amber-800 mb-6">Filters</h2>

              <div className="space-y-6">
                {/* Search Input */}
                <div className="space-y-2">
                  <Label htmlFor="search">Search</Label>
                  <Input
                    id="search"
                    placeholder="Search villas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <Label>
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </Label>
                  <Slider
                    defaultValue={[minPrice, maxPrice]}
                    min={100}
                    max={1000}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="py-4"
                  />
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  <Label>Amenities</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="oceanView"
                        checked={filters.oceanView}
                        onCheckedChange={() => setFilters({ ...filters, oceanView: !filters.oceanView })}
                      />
                      <label htmlFor="oceanView" className="text-sm">
                        Ocean View
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privatePool"
                        checked={filters.privatePool}
                        onCheckedChange={() => setFilters({ ...filters, privatePool: !filters.privatePool })}
                      />
                      <label htmlFor="privatePool" className="text-sm">
                        Private Pool
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="familyFriendly"
                        checked={filters.familyFriendly}
                        onCheckedChange={() => setFilters({ ...filters, familyFriendly: !filters.familyFriendly })}
                      />
                      <label htmlFor="familyFriendly" className="text-sm">
                        Family Friendly
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="beachAccess"
                        checked={filters.beachAccess}
                        onCheckedChange={() => setFilters({ ...filters, beachAccess: !filters.beachAccess })}
                      />
                      <label htmlFor="beachAccess" className="text-sm">
                        Beach Access
                      </label>
                    </div>
                  </div>
                </div>

                <AnimatedButton
                  onClick={() => {
                    setSearchQuery("")
                    setPriceRange([100, 1000])
                    setFilters({
                      oceanView: false,
                      privatePool: false,
                      familyFriendly: false,
                      beachAccess: false,
                    })
                  }}
                  variant="outline"
                  className="w-full mt-4"
                >
                  Reset Filters
                </AnimatedButton>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4 w-full">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              variant="outline"
              className="w-full flex items-center justify-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </Button>

            {/* Mobile Filters */}
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-4"
              >
                <div className="space-y-6">
                  {/* Search Input */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile-search">Search</Label>
                    <Input
                      id="mobile-search"
                      placeholder="Search villas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label>
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </Label>
                    <Slider
                      defaultValue={[minPrice, maxPrice]}
                      min={100}
                      max={1000}
                      step={50}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                  </div>

                  {/* Amenities */}
                  <div className="space-y-3">
                    <Label>Amenities</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="mobile-oceanView"
                          checked={filters.oceanView}
                          onCheckedChange={() => setFilters({ ...filters, oceanView: !filters.oceanView })}
                        />
                        <label htmlFor="mobile-oceanView" className="text-sm">
                          Ocean View
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="mobile-privatePool"
                          checked={filters.privatePool}
                          onCheckedChange={() => setFilters({ ...filters, privatePool: !filters.privatePool })}
                        />
                        <label htmlFor="mobile-privatePool" className="text-sm">
                          Private Pool
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="mobile-familyFriendly"
                          checked={filters.familyFriendly}
                          onCheckedChange={() => setFilters({ ...filters, familyFriendly: !filters.familyFriendly })}
                        />
                        <label htmlFor="mobile-familyFriendly" className="text-sm">
                          Family Friendly
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="mobile-beachAccess"
                          checked={filters.beachAccess}
                          onCheckedChange={() => setFilters({ ...filters, beachAccess: !filters.beachAccess })}
                        />
                        <label htmlFor="mobile-beachAccess" className="text-sm">
                          Beach Access
                        </label>
                      </div>
                    </div>
                  </div>

                  <AnimatedButton
                    onClick={() => {
                      setSearchQuery("")
                      setPriceRange([100, 1000])
                      setFilters({
                        oceanView: false,
                        privatePool: false,
                        familyFriendly: false,
                        beachAccess: false,
                      })
                    }}
                    variant="outline"
                    className="w-full mt-4"
                  >
                    Reset Filters
                  </AnimatedButton>
                </div>
              </motion.div>
            )}
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h2 className="text-2xl font-bold text-amber-800">
                {filteredRooms.length} {filteredRooms.length === 1 ? "Villa" : "Villas"} Found
              </h2>
              <div className="text-sm text-gray-500">
                Showing {filteredRooms.length} of {allRooms.length} villas
              </div>
            </div>

            {filteredRooms.length === 0 ? (
              <AnimatedSection>
                <div className="text-center py-12">
                  <SlidersHorizontal className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No villas match your filters</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search criteria or resetting filters</p>
                  <AnimatedButton
                    onClick={() => {
                      setSearchQuery("")
                      setPriceRange([100, 1000])
                      setFilters({
                        oceanView: false,
                        privatePool: false,
                        familyFriendly: false,
                        beachAccess: false,
                      })
                    }}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Reset All Filters
                  </AnimatedButton>
                </div>
              </AnimatedSection>
            ) : (
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRooms.map((room, index) => (
                  <AnimatedCard key={room.id} delay={index * 0.1} className="border-amber-200 h-full">
                    <div className="relative h-48 md:h-64 overflow-hidden">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                        <Image src={room.image || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
                      </motion.div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-1">
                        <h3 className="text-xl font-bold text-amber-800">{room.title}</h3>
                        <div className="text-amber-800 font-bold">
                          ${room.price}
                          <span className="text-sm font-normal text-gray-600">/night</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{room.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                          >
                            <Check className="mr-1 h-3 w-3" />
                            {feature}
                          </span>
                        ))}
                      </div>
                      <AnimatedButton asChild className="w-full bg-amber-600 hover:bg-amber-700">
                        <Link href="/contact">Book Now</Link>
                      </AnimatedButton>
                    </CardContent>
                  </AnimatedCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
