import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Shield, Car, CheckCircle } from "lucide-react"

const benefits = [
  "No wheel contact with the ground",
  "Prevents additional damage to your vehicle",
  "Ideal for luxury and exotic vehicles",
  "Perfect for all-wheel drive vehicles",
  "Safe for vehicles with transmission issues",
  "Protects low-clearance vehicles",
  "Secure tie-down system",
  "Weather protection during transport",
]

export default function FlatbedTowingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Flatbed Towing Service</h1>
            <p className="text-xl text-blue-100 mb-8">
              The safest way to transport your vehicle. Professional flatbed towing for all vehicle types.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-TOWING
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Gold Standard in Vehicle Transport</h2>
              <p className="text-lg text-gray-600">
                When your vehicle needs the utmost care during transport, flatbed towing is the answer. Unlike
                traditional towing methods, flatbed towing keeps all four wheels off the ground, eliminating the risk of
                additional damage during transport.
              </p>
              <p className="text-lg text-gray-600">
                Our modern flatbed trucks are equipped with state-of-the-art loading systems and secure tie-down
                equipment to ensure your vehicle arrives at its destination in the same condition it left.
              </p>
              <div className="flex items-center space-x-6 text-blue-600">
                <div className="flex items-center">
                  <Car className="mr-2 h-5 w-5" />
                  <span className="font-semibold">All Vehicle Types</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Maximum Protection</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Flatbed tow truck loading a luxury vehicle"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Flatbed Towing?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flatbed towing offers superior protection and is the preferred method for many vehicle types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">When to Choose Flatbed Towing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury Vehicles</h3>
                <p className="text-gray-600">Protect your investment with the safest transport method available.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">All-Wheel Drive</h3>
                <p className="text-gray-600">AWD vehicles require flatbed towing to prevent drivetrain damage.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Accident Damage</h3>
                <p className="text-gray-600">Vehicles with wheel or suspension damage need flatbed transport.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Low Clearance</h3>
                <p className="text-gray-600">Sports cars and lowered vehicles benefit from flatbed towing.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Long Distance</h3>
                <p className="text-gray-600">For long-distance towing, flatbed provides maximum protection.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Classic Cars</h3>
                <p className="text-gray-600">Preserve the value and condition of your classic automobile.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Safe, Professional Flatbed Towing?</h2>
          <p className="text-xl mb-8 text-blue-100">Trust your vehicle to our experienced flatbed operators</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-TOWING
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
