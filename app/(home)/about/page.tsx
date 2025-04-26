import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Store, Users, ShoppingBag, CreditCard, Shield } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About funroad</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          The all-in-one platform empowering creators to build, sell, and grow their digital product businesses.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-pink-400 hover:bg-pink-600 text-white" asChild>
            <Link href="/pricing">
              Start Selling <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className=" text-black hover:bg-pink-50" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At funroad, we believe everyone has knowledge worth sharing. Our mission is to provide creators with the
            simplest way to monetize their expertise through digital products.
          </p>
          <p className="text-lg">
            Whether you are creating audio packs, e-books, online courses, or digital tools, funroad gives you everything
            you need to succeed - from hosting and payments to marketing and analytics.
          </p>
        </div>
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Creators collaborating"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How funroad Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="">
            <CardContent className="pt-6">
              <Store className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">For Creators</h3>
              <p className="text-muted-foreground mb-4">
                Create your store, upload your digital products, set your prices, and start selling in minutes. No
                coding required.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Custom storefront with your branding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Secure file hosting and delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Sales analytics and customer insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">For Buyers</h3>
              <p className="text-muted-foreground mb-4">
                Discover high-quality digital products from trusted creators across multiple categories.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Curated selection of premium content</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Instant access to purchased products</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="">
            <CardContent className="pt-6">
              <ShoppingBag className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">For Marketplace</h3>
              <p className="text-muted-foreground mb-4">
                Browse our marketplace to find digital products across diverse categories from creators worldwide.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Diverse product categories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Verified creator profiles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-pink-400 mr-2 shrink-0 mt-0.5" />
                  <span>Customer reviews and ratings</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Platform Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="bg-pink-100 p-3 rounded-lg h-fit">
              <Store className="h-6 w-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Multi-tenant Storefronts</h3>
              <p className="text-muted-foreground">
                Each creator gets their own customizable storefront with unique branding, while still being part of the
                larger marketplace ecosystem.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-pink-100 p-3 rounded-lg h-fit">
              <CreditCard className="h-6 w-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Seamless Payments</h3>
              <p className="text-muted-foreground">
                Secure payment processing with support for multiple currencies and automatic creator payouts.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-pink-100 p-3 rounded-lg h-fit">
              <Shield className="h-6 w-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Secure File Delivery</h3>
              <p className="text-muted-foreground">
                Protected digital downloads with expiring links and access controls to protect creator content.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-pink-100 p-3 rounded-lg h-fit">
              <Users className="h-6 w-6 text-pink-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Community Features</h3>
              <p className="text-muted-foreground">
                Built-in tools for creators to engage with their audience through comments, reviews, and updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Stats Section */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-pink-400 mb-2">10,000+</p>
            <p className="text-lg text-muted-foreground">Active Creators</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-400 mb-2">50,000+</p>
            <p className="text-lg text-muted-foreground">Digital Products</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-400 mb-2">100,000+</p>
            <p className="text-lg text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-400 mb-2">15+</p>
            <p className="text-lg text-muted-foreground">Product Categories</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Product Journey?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Join thousands of creators who are building successful businesses on funroad. Start selling your digital
          products today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" className="bg-pink-400 hover:bg-pink-600 text-white" asChild>
            <Link href="/pricing">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className=" text-pink-400 hover:bg-pink-50" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
