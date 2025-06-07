import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "You can count on us to be there when you need us most, 24/7.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick response times to get you back on the road as soon as possible.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Certified technicians with years of experience and training.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We take pride in delivering exceptional service every time.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About 1st Mile LLC Towing</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner for professional towing and roadside assistance services
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                Founded in 2008, 1st Mile LLC Towing began as a small family-owned business with a simple mission: to
                provide reliable, professional towing services when people need them most. What started with a single
                tow truck has grown into a full-service towing company serving the entire metro area.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, we've built our reputation on trust, reliability, and exceptional customer service. We
                understand that needing a tow truck is often stressful, which is why we focus on making the experience
                as smooth and worry-free as possible.
              </p>
              <p className="text-lg text-gray-600">
                Today, we operate a modern fleet of tow trucks and employ certified technicians who are passionate about
                helping our customers. We're proud to be the towing company that the community trusts.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/assets_task_01jx5mxs8rf6ssry26hx6300sw_1749315204_img_1.webp"
                alt="1st Mile Towing team and fleet"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/470574891_18340045807147242_2926820355323970766_n.jpg"
                alt="Professional towing equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose 1st Mile LLC Towing?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Modern Fleet</h3>
                    <p className="text-gray-600">Well-maintained, modern tow trucks and equipment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">Certified technicians with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fair Pricing</h3>
                    <p className="text-gray-600">Transparent, competitive pricing with no hidden fees</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                    <p className="text-gray-600">Emergency service available around the clock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the 1st Mile Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us today for reliable, professional towing services</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
