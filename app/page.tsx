"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, Shield, Truck, Star, Quote } from "lucide-react"
import { useEffect, useState } from "react"
import FlexingArmIcon from './components/FlexingArmIcon'

const services = [
  {
    title: "Emergency Towing",
    description: "24/7 emergency towing service for all vehicle types",
    icon: Truck,
    href: "/services/emergency-towing",
  },
  {
    title: "Roadside Assistance",
    description: "Jump starts, tire changes, lockout service, and more",
    icon: Shield,
    href: "/services/roadside-assistance",
  },
  {
    title: "Heavy Duty Towing",
    description: "Specialized towing for trucks, RVs, and commercial vehicles",
    icon: FlexingArmIcon,
    href: "/services/heavy-duty-towing",
  },
  {
    title: "Flatbed Towing",
    description: "Safe flatbed towing for luxury and damaged vehicles",
    icon: Truck,
    href: "/services/flatbed-towing",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Amazing service! They arrived within 20 minutes and got my car towed safely. Professional and courteous staff.",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    text: "Called them for a jump start at 2 AM. They were there quickly and got me back on the road. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    text: "Fair pricing and excellent service. They handled my luxury car with great care during the flatbed tow.",
    rating: 5,
  },
]

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add a small delay to ensure all resources are loaded and prevent flash
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.ready-section') as HTMLElement;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          const offset = window.pageYOffset - section.offsetTop;
          section.style.backgroundPositionY = `${offset * 0.5}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/banner.jpg" alt="Professional towing service" fill className="object-cover" priority />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 animate-hero-fade-in">
              Professional Towing Services
              <span className="block text-blue-300 animate-hero-fade-in animation-delay-200">When You Need Us Most</span>
            </h1>
            <p
              className={`text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"
              }`}
            >
              24/7 emergency towing and roadside assistance. Fast, reliable, and professional service throughout Duluth, 
              Georgia and the surrounding metro area.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="mr-2 h-5 w-5 animate-ring" />
                Call Now: (470) 599-9174
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-blue-900 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                View Services
              </Button>
            </div>
            <div
              className={`flex items-center justify-center space-x-8 text-blue-200 transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0 delay-700" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center animate-twinkle">
                <Clock className="mr-2 h-5 w-5" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center animate-twinkle animation-delay-400">
                <Shield className="mr-2 h-5 w-5" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-twinkle"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About 1st Mile LLC Towing</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our founding in 2013, 1st Mile LLC Towing has proudly served Duluth, Georgia and the surrounding 
                metro area as a trusted towing service provider. With over a decade of experience in the industry, we 
                pride ourselves on fast response times, professional service, and competitive pricing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified technicians utilizes advanced technology and state-of-the-art equipment to ensure 
                efficient and safe vehicle handling. Available 24/7, we're here to help you when you need it most - whether 
                it's an emergency tow, roadside assistance, or specialized heavy-duty service throughout Duluth and the 
                greater Georgia area.
              </p>
              <div className="grid grid-cols-2 gap-8 py-6">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 animate-count-up">10+</div>
                  <div className="text-gray-600 font-medium mt-2">Years Experience</div>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 animate-count-up animation-delay-400">
                    24/7
                  </div>
                  <div className="text-gray-600 font-medium mt-2">Emergency Service</div>
                </div>
              </div>
              <div className="pt-4 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 px-8 py-3"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right animation-delay-200" style={{ height: '590px', overflow: 'hidden' }}>
              <Image
                src="/2024-12-18.webp"
                alt="Professional tow truck operator"
                width={600}
                height={300}
                className="shadow-lg transform hover:scale-105 transition-transform duration-500"
                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Towing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive towing and roadside assistance services to keep you safe and get you back on the
              road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <service.icon
                    className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Emergency Towing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're available 24/7 for all your emergency towing and roadside assistance needs throughout Duluth, Georgia 
              and surrounding areas. Don't wait - call us now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-10 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5 animate-ring" />
                Call Now: (470) 599-9174
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600 text-xl px-10 py-4 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get Quote Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our satisfied customers have to say about our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-600 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900 text-white relative ready-section" style={{ backgroundImage: 'url(/494991656_1274490918010912_4183205759574085622_n.jpg)', backgroundSize: 'cover', backgroundPosition: 'center -50px', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
                         <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
               Contact 1st Mile LLC Towing today for fast, reliable, and professional towing services in Duluth, Georgia 
               and the surrounding metro area.
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5 animate-ring" />
                Call: (470) 599-9174
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
