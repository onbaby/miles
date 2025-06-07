import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Battery, Key, Wrench, Fuel, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Battery,
    title: "Jump Start Service",
    description: "Dead battery? We'll get you started and back on the road quickly.",
  },
  {
    icon: Key,
    title: "Lockout Service",
    description: "Locked out of your car? Our technicians can safely unlock your vehicle.",
  },
  {
    icon: Wrench,
    title: "Tire Change",
    description: "Flat tire? We'll change it with your spare or provide tire repair.",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description: "Ran out of gas? We'll bring fuel directly to your location.",
  },
]

export default function RoadsideAssistancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Roadside Assistance</h1>
            <p className="text-xl text-blue-100 mb-8">
              Quick solutions for common roadside problems. We're here to help get you moving again.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">More Than Just Towing</h2>
              <p className="text-lg text-gray-600">
                Sometimes you don't need a tow - you just need a helping hand to get back on the road. Our comprehensive
                roadside assistance services are designed to solve common vehicle problems quickly and efficiently,
                often without the need for towing.
              </p>
              <p className="text-lg text-gray-600">
                Our experienced technicians carry the tools and equipment needed to handle most roadside emergencies.
                From dead batteries to flat tires, we're equipped to get you moving again.
              </p>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-gray-700 font-semibold">Available 24/7 for emergencies</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Roadside assistance technician helping customer"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Roadside Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive roadside assistance to handle the most common vehicle problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <service.icon className="h-12 w-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Winch-Out Service</h3>
                <p className="text-gray-600">Stuck in mud, snow, or a ditch? We'll safely winch your vehicle out.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minor Repairs</h3>
                <p className="text-gray-600">Simple on-site repairs to get you back on the road quickly.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Transport</h3>
                <p className="text-gray-600">If repairs aren't possible on-site, we'll tow you to safety.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stranded on the Road?</h2>
          <p className="text-xl mb-8 text-blue-100">Call us now for fast, professional roadside assistance</p>
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
