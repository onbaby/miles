import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="1st Mile LLC Towing"
              width={200}
              height={80}
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-gray-300">
              Professional towing and roadside assistance services available 24/7. Your trusted partner when you need
              help on the road.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Our Services
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Services</h3>
            <div className="space-y-2">
              <Link
                href="/services/emergency-towing"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Emergency Towing
              </Link>
              <Link
                href="/services/roadside-assistance"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Roadside Assistance
              </Link>
              <Link
                href="/services/heavy-duty-towing"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Heavy Duty Towing
              </Link>
              <Link
                href="/services/flatbed-towing"
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Flatbed Towing
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">(555) 123-TOWING</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@1stmiletowing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Serving the Greater Metro Area</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} 1st Mile LLC Towing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
