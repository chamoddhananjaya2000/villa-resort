"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, SearchIcon, Calendar, Users, Bed, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/date-picker"
import { useRouter } from "next/navigation"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined)
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined)
  const [guests, setGuests] = useState(2)
  const [priceRange, setPriceRange] = useState([200, 600])
  const [filters, setFilters] = useState({
    oceanView: false,
    privatePool: false,
    familyFriendly: false,
    beachAccess: false,
    spa: false,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would construct a query and pass it to the search results page
    router.push(`/search?query=${searchQuery}&guests=${guests}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`)
    onClose()
  }

  const handleFilterChange = (filter: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  const modalVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[10%] left-[50%] translate-x-[-50%] w-[95%] max-w-3xl max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-xl z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-amber-800">Find Your Perfect Stay</h2>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <form onSubmit={handleSearch}>
                <div className="space-y-4 sm:space-y-6">
                  {/* Search Input */}
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search for villas, amenities, or experiences..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Date and Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> Check-in
                      </Label>
                      <DatePicker date={checkIn} setDate={setCheckIn} />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> Check-out
                      </Label>
                      <DatePicker date={checkOut} setDate={setCheckOut} />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Users className="h-4 w-4" /> Guests
                      </Label>
                      <div className="flex items-center">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                        >
                          -
                        </Button>
                        <span className="mx-4 min-w-[20px] text-center">{guests}</span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={() => setGuests(guests + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Filter className="h-4 w-4" /> Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </Label>
                    <Slider
                      defaultValue={[200, 600]}
                      min={100}
                      max={1000}
                      step={50}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                  </div>

                  {/* Amenities */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Bed className="h-4 w-4" /> Amenities
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="oceanView"
                          checked={filters.oceanView}
                          onCheckedChange={() => handleFilterChange("oceanView")}
                        />
                        <label htmlFor="oceanView" className="text-sm">
                          Ocean View
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="privatePool"
                          checked={filters.privatePool}
                          onCheckedChange={() => handleFilterChange("privatePool")}
                        />
                        <label htmlFor="privatePool" className="text-sm">
                          Private Pool
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="familyFriendly"
                          checked={filters.familyFriendly}
                          onCheckedChange={() => handleFilterChange("familyFriendly")}
                        />
                        <label htmlFor="familyFriendly" className="text-sm">
                          Family Friendly
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="beachAccess"
                          checked={filters.beachAccess}
                          onCheckedChange={() => handleFilterChange("beachAccess")}
                        />
                        <label htmlFor="beachAccess" className="text-sm">
                          Beach Access
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="spa" checked={filters.spa} onCheckedChange={() => handleFilterChange("spa")} />
                        <label htmlFor="spa" className="text-sm">
                          Spa Services
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-end gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="w-full sm:w-auto border-amber-600 text-amber-600"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                      <SearchIcon className="h-4 w-4 mr-2" /> Search
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
