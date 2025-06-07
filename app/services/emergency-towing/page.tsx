import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Shield, CheckCircle } from "lucide-react"

const features = [
  "Available 24/7, 365 days a year",
  "Fast response times - typically 15-30 minutes",
  "All vehicle types: cars, trucks, SUVs, motorcycles",
  "Safe and secure towing methods",
  "Licensed and insured operators",
  "Competitive pricing with no hidden fees",
  "GPS tracking for accurate arrival times",
  "Professional and courteous service",
]

export default function EmergencyTowingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Emergency Towing Service</h1>
            <p className="text-xl text-blue-100 mb-8">
              When you're stranded, we're here to help. Fast, reliable emergency towing 24/7.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-TOWING
            </Button>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">When Every Minute Counts</h2>
              <p className="text-lg text-gray-600">
                Car breakdowns and accidents happen when you least expect them. That's why 1st Mile LLC Towing provides
                24/7 emergency towing services throughout the metro area. Our experienced team is ready to respond
                quickly and safely transport your vehicle to your desired location.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're dealing with a mechanical failure, accident damage, or any other roadside emergency, our
                professional tow truck operators will handle your vehicle with care and get you back on track as quickly
                as possible.
              </p>
              <div className="flex items-center space-x-6 text-blue-600">
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span className="font-semibold">15-30 Min Response</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="relative" style={{ height: '400px', overflow: 'hidden' }}>
              <Image
                src="/495022442_1274489304677740_2327620469443780356_n.jpg"
                alt="Emergency towing service in action"
                width={600}
                height={900}
                className="rounded-lg shadow-lg"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Emergency Towing?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We understand that emergencies are stressful. That's why we focus on providing fast, professional service
              when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Getting emergency towing help is simple and straightforward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">Call (555) 123-TOWING and provide your location and situation details</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">We Dispatch</h3>
                <p className="text-gray-600">
                  Our nearest available tow truck is dispatched to your location immediately
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Transport</h3>
                <p className="text-gray-600">Your vehicle is safely towed to your preferred destination</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Emergency Towing Right Now?</h2>
          <p className="text-xl mb-8 text-red-100">Don't wait - every minute counts in an emergency</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-TOWING
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3"
              asChild
            >
              <Link href="/services">View Other Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
