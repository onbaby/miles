import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Truck, Shield, CheckCircle } from "lucide-react"

const capabilities = [
  "Commercial trucks and trailers",
  "RVs and motorhomes",
  "Buses and large passenger vehicles",
  "Construction equipment",
  "Agricultural machinery",
  "Box trucks and delivery vehicles",
  "Tractor-trailers",
  "Heavy-duty pickup trucks",
]

export default function HeavyDutyTowingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Heavy Duty Towing</h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized towing for large vehicles, commercial trucks, and heavy equipment.
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">When Size Matters</h2>
              <p className="text-lg text-gray-600">
                Not all towing jobs are created equal. When you need to move large vehicles, commercial trucks, or heavy
                equipment, you need specialized equipment and experienced operators. Our heavy-duty towing service is
                equipped to handle the biggest jobs safely and efficiently.
              </p>
              <p className="text-lg text-gray-600">
                Our heavy-duty tow trucks are capable of handling vehicles up to 80,000 pounds, and our experienced
                operators are trained in the specialized techniques required for safe heavy-duty towing.
              </p>
              <div className="flex items-center space-x-6 text-blue-600">
                <div className="flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Up to 80,000 lbs</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Certified Operators</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Heavy duty tow truck with commercial vehicle"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Can Tow</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our heavy-duty equipment can handle a wide range of large vehicles and equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Heavy duty towing equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Equipment</h2>
              <p className="text-lg text-gray-600">
                Our heavy-duty fleet includes state-of-the-art tow trucks equipped with the latest technology and safety
                features. We maintain our equipment to the highest standards to ensure reliable service when you need it
                most.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Rotator Recovery Units</h3>
                    <p className="text-gray-600">For complex recovery operations and overturned vehicles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Heavy-Duty Wreckers</h3>
                    <p className="text-gray-600">Capable of towing the largest commercial vehicles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Specialized Trailers</h3>
                    <p className="text-gray-600">For transporting heavy equipment and machinery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Heavy-duty towing requires careful planning and execution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">
                  We assess the situation and determine the best approach for safe recovery
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipment Setup</h3>
                <p className="text-gray-600">
                  Our team sets up the appropriate heavy-duty equipment for your specific needs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Transport</h3>
                <p className="text-gray-600">Your vehicle or equipment is safely transported to the desired location</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Heavy Duty Towing?</h2>
          <p className="text-xl mb-8 text-blue-100">Trust the experts with your heavy-duty towing needs</p>
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
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
