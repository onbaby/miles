import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">Need immediate assistance? Call us now or send us a message</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help 24/7. For emergency towing, call us immediately. For general inquiries, use the
                  form or contact information below.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Emergency Towing</h3>
                        <p className="text-2xl font-bold text-blue-600">(470) 599-9174</p>
                        <p className="text-gray-600">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">
                        Malcolmmiles1stmiletowing@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Service Area</h3>
                        <p className="text-gray-600">Greater Metro Area and Surrounding Counties</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Hours</h3>
                        <p className="text-gray-600">24/7 Emergency Service</p>
                        <p className="text-gray-600">Office: Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="(470) 599-9174" />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select id="service" className="w-full p-3 border border-gray-300 rounded-md">
                      <option value="">Select a service</option>
                      <option value="emergency-towing">Emergency Towing</option>
                      <option value="roadside-assistance">Roadside Assistance</option>
                      <option value="heavy-duty-towing">Heavy Duty Towing</option>
                      <option value="flatbed-towing">Flatbed Towing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Please describe your situation or question..." rows={4} />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">Send Message</Button>

                  <p className="text-sm text-gray-600 text-center">
                    For immediate emergency assistance, please call (555) 123-TOWING
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
