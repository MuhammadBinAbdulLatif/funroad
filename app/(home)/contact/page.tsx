import Link from "next/link"
import { Mail, MapPin, Phone, MessageSquare, Clock, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-8">
          Have questions about funroad? We are here to help you succeed with your digital product business.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="font-medium">
                      First name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="border-zinc-200 focus:border-[#ec4899] focus:ring-[#ec4899]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="font-medium">
                      Last name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="border-zinc-200 focus:border-[#ec4899] focus:ring-[#ec4899]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-zinc-200 focus:border-[#ec4899] focus:ring-[#ec4899]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    className="border-zinc-200 focus:border-[#ec4899] focus:ring-[#ec4899]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    className="border-zinc-200 focus:border-[#ec4899] focus:ring-[#ec4899]"
                  />
                </div>
                <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#ec4899] mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:support@funroad.com" className="text-zinc-500 hover:text-[#ec4899]">
                      support@funroad.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#ec4899] mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1-800-123-4567" className="text-zinc-500 hover:text-[#ec4899]">
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ec4899] mt-1" />
                  <div>
                    <p className="font-medium">Office</p>
                    <address className="text-zinc-500 not-italic">
                      123 Creator Avenue
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#ec4899] mt-1" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-zinc-500">Monday - Friday: 9AM - 5PM PST</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <p className="text-zinc-500 mb-4">
                Stay updated with the latest news, features, and creator success stories.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#f9a8d4] flex items-center justify-center text-white hover:bg-[#ec4899]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#f9a8d4] flex items-center justify-center text-white hover:bg-[#ec4899]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#f9a8d4] flex items-center justify-center text-white hover:bg-[#ec4899]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#f9a8d4] flex items-center justify-center text-white hover:bg-[#ec4899]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">How do I become a seller on funroad?</h3>
              <p className="text-zinc-500">
                Sign up for an account, complete your profile, and click on  Become a Seller in your dashboard. You will
                need to provide some additional information about your business and the products you plan to sell.
              </p>
            </CardContent>
          </Card>
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">What types of digital products can I sell?</h3>
              <p className="text-zinc-500">
                You can sell a wide range of digital products including e-books, courses, audio files, templates,
                software, graphics, and more. All products must comply with our terms of service.
              </p>
            </CardContent>
          </Card>
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">How do payouts work?</h3>
              <p className="text-zinc-500">
                We process payouts on a bi-weekly basis. Once your account reaches the minimum payout threshold of $50,
                you will receive your earnings via your preferred payment method (PayPal, Stripe, or bank transfer).
              </p>
            </CardContent>
          </Card>
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">What fees does funroad charge?</h3>
              <p className="text-zinc-500">
                funroad charges a 10% transaction fee on each sale. Payment processing fees (typically 2.9% + $0.30) are
                also deducted. Please visit our pricing page for detailed information on our fee structure.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" asChild>
            <Link href="/faq">
              View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Support Options */}
      <section className="bg-[#fdf2f8] rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">More Ways to Get Support</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-[#fce7f3] bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Help Center</h3>
              <p className="text-zinc-500 mb-4">
                Browse our comprehensive knowledge base for tutorials, guides, and answers to common questions.
              </p>
              <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" asChild>
                <Link href="/help">Visit Help Center</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-[#fce7f3] bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-zinc-500 mb-4">
                Connect with other creators, share tips, and get advice from the funroad community.
              </p>
              <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" asChild>
                <Link href="/community">Join Community</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-[#fce7f3] bg-white">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-zinc-500 mb-4">
                Get real-time assistance from our support team during business hours.
              </p>
              <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" asChild>
                <Link href="/chat">Start Chat</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Product Journey?</h2>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-8">
          Join thousands of creators who are building successful businesses on funroad. Start selling your digital
          products today.
        </p>
        <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white" size="lg" asChild>
          <Link href="/pricing">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  )
}
