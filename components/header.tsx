"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const services = [
  { name: "Emergency Towing", href: "/services/emergency-towing" },
  { name: "Roadside Assistance", href: "/services/roadside-assistance" },
  { name: "Heavy Duty Towing", href: "/services/heavy-duty-towing" },
  { name: "Motorcycle Towing", href: "/services/motorcycle-towing" },
  { name: "Flatbed Towing", href: "/services/flatbed-towing" },
  { name: "Jump Start Service", href: "/services/jump-start" },
  { name: "Lockout Service", href: "/services/lockout-service" },
  { name: "Tire Change Service", href: "/services/tire-change" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Logo - Left Column */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="1st Mile LLC Towing" width={200} height={80} className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation - Center Column */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
                Services <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Contact Us
            </Link>
          </nav>

          {/* Emergency Call Button & Mobile Menu Button - Right Column */}
          <div className="flex justify-end items-center">
            {/* Emergency Call Button - Desktop */}
            <div className="hidden md:flex items-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-all duration-300">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: (470) 599-9174
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 transition-all duration-300 hover:bg-gray-100 rounded-lg" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen 
            ? 'max-h-96 opacity-100 border-t border-gray-200' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4">
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="space-y-2">
              <span className="text-gray-700 font-medium block py-2">Services</span>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link 
                    key={service.href} 
                    href={service.href} 
                    className="block text-gray-600 hover:text-blue-600 py-1 transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4 transform hover:scale-105 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now: (470) 599-9174
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
