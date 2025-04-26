import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ShoppingCart, CreditCard, Package, Search, BarChart, Shield, Globe, Zap, FileText, Music, Video, BookOpen, Code, Download, Palette, MessageSquare, Users, Bell, DollarSign, Smartphone, Clock, Gift, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Platform Features</h1>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-8">
          Everything you need to create, sell, and deliver digital products in one powerful platform.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white" size="lg" asChild>
            <Link href="/pricing">
              Start Selling <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" size="lg" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="sellers" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="sellers" className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white">
              For Sellers
            </TabsTrigger>
            <TabsTrigger value="buyers" className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white">
              For Buyers
            </TabsTrigger>
            <TabsTrigger value="platform" className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white">
              Platform Features
            </TabsTrigger>
          </TabsList>

          {/* Seller Features */}
          <TabsContent value="sellers" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingCart className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Custom Storefront</h3>
                  <p className="text-zinc-500 mb-4">
                    Create your own branded storefront with customizable themes, logos, and domain names.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Personalized store URL</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Custom branding options</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Mobile-responsive design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Digital Product Hosting</h3>
                  <p className="text-zinc-500 mb-4">
                    Upload and host all your digital products securely with generous storage limits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Up to 50GB storage per account</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Secure file delivery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Content protection features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Payment Processing</h3>
                  <p className="text-zinc-500 mb-4">
                    Accept payments globally with multiple payment options and automatic tax handling.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Credit/debit cards, PayPal, Apple Pay</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Automatic tax calculation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Multi-currency support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                  <p className="text-zinc-500 mb-4">
                    Track sales, customer behavior, and product performance with detailed analytics.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Real-time sales tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Customer demographics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Conversion rate optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Bell className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Marketing Tools</h3>
                  <p className="text-zinc-500 mb-4">
                    Grow your audience and boost sales with built-in marketing and promotion tools.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Email marketing integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Discount codes and coupons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Affiliate program management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Flexible Pricing Options</h3>
                  <p className="text-zinc-500 mb-4">
                    Set your own prices and choose from multiple pricing models for your products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>One-time purchases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Subscription models</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Pay-what-you-want pricing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Buyer Features */}
          <TabsContent value="buyers" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Discover Products</h3>
                  <p className="text-zinc-500 mb-4">
                    Browse thousands of digital products across multiple categories from creators worldwide.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Advanced search filters</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Curated collections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Secure Purchases</h3>
                  <p className="text-zinc-500 mb-4">
                    Shop with confidence knowing all transactions are secure and your data is protected.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>SSL-encrypted checkout</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Buyer protection guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>30-day money-back guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Download className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
                  <p className="text-zinc-500 mb-4">
                    Get immediate access to your purchased digital products with fast, reliable delivery.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Instant download access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Cloud storage integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Permanent access to purchases</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Verified Reviews</h3>
                  <p className="text-zinc-500 mb-4">
                    Read authentic reviews from verified buyers to make informed purchasing decisions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Verified purchase badges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Detailed rating system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Photo and video reviews</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Creator Interaction</h3>
                  <p className="text-zinc-500 mb-4">
                    Connect directly with creators for support, questions, and community engagement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Direct messaging system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Comment on products</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Join creator communities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Gift className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Special Offers</h3>
                  <p className="text-zinc-500 mb-4">
                    Access exclusive discounts, bundles, and limited-time offers from your favorite creators.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Early access to new products</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Exclusive bundle deals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Loyalty rewards program</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Platform Features */}
          <TabsContent value="platform" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multi-tenant Architecture</h3>
                  <p className="text-zinc-500 mb-4">
                    Our platform supports thousands of independent stores while maintaining a unified marketplace.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Individual store customization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Centralized product discovery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Unified checkout experience</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">High-Performance Infrastructure</h3>
                  <p className="text-zinc-500 mb-4">
                    Built on cutting-edge technology to ensure fast loading times and reliable service.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>99.9% uptime guarantee</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Global CDN for fast delivery</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Automatic scaling during traffic spikes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Features</h3>
                  <p className="text-zinc-500 mb-4">
                    Built-in social features to foster connections between creators and their audiences.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Creator profiles and following</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Community discussion boards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Live events and webinars</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile Optimization</h3>
                  <p className="text-zinc-500 mb-4">
                    Fully responsive design ensures a seamless experience across all devices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Responsive web design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Native mobile apps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Mobile payment optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">API & Integrations</h3>
                  <p className="text-zinc-500 mb-4">
                    Connect funroad with your favorite tools and services through our robust API.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Developer-friendly API</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Zapier integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Webhooks for custom workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardContent className="p-6">
                  <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-[#ec4899]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                  <p className="text-zinc-500 mb-4">
                    Your store is always open, allowing customers to browse and purchase at any time.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Automated delivery system</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Round-the-clock monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                      <span>Global audience reach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Product Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Product Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Audio</h3>
              <p className="text-zinc-500">
                Music, sound effects, meditation tracks, podcasts, and audio courses.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Courses</h3>
              <p className="text-zinc-500">
                Online courses, tutorials, workshops, and educational content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-Books</h3>
              <p className="text-zinc-500">
                Digital books, guides, manuals, and PDF resources.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Video</h3>
              <p className="text-zinc-500">
                Video tutorials, stock footage, animations, and visual content.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Software</h3>
              <p className="text-zinc-500">
                Apps, plugins, themes, templates, and digital tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Graphics</h3>
              <p className="text-zinc-500">
                Design assets, illustrations, templates, and visual resources.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bundles</h3>
              <p className="text-zinc-500">
                Product collections, resource packs, and discounted bundles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6 text-center">
              <div className="bg-[#fce7f3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#ec4899]" />
              </div>
              <h3 className="text-xl font-bold mb-2">And More</h3>
              <p className="text-zinc-500">
                New categories added regularly to meet creator and buyer needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="mb-16 bg-[#fdf2f8] rounded-xl p-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Instant Delivery</h2>
            <p className="text-lg mb-6">
              No waiting, no shipping delays. Get immediate access to your digital purchases the moment your payment is processed.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#ec4899] mr-3 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Secure Download Links</h3>
                  <p className="text-zinc-500">Unique, time-limited download links sent directly to your email.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#ec4899] mr-3 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Cloud Storage Access</h3>
                  <p className="text-zinc-500">Access your purchases from any device through your funroad account.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#ec4899] mr-3 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg">Automatic Updates</h3>
                  <p className="text-zinc-500">Get notified when creators update their products with new content.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Instant digital delivery"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#fce7f3] mr-4"></div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-zinc-500 text-sm">Digital Course Creator</p>
                </div>
              </div>
              <p className="text-zinc-600 mb-4">
                funroad has transformed my business. I went from struggling to sell my courses to making consistent
                sales every day. The platform handles everything from payments to delivery, letting me focus on creating
                great content
              </p>
              <div className="flex text-[#ec4899]">
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#fce7f3] mr-4"></div>
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-zinc-500 text-sm">Audio Producer</p>
                </div>
              </div>
              <p className="text-zinc-600 mb-4">
                As a music producer, I needed a platform that could handle large audio files and provide a great
                listening experience. funroad delivers on both fronts, plus the analytics help me understand which tracks
                are resonating with my audience
              </p>
              <div className="flex text-[#ec4899]">
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#fce7f3] mr-4"></div>
                <div>
                  <h3 className="font-bold">Emily Rodriguez</h3>
                  <p className="text-zinc-500 text-sm">E-Book Author</p>
                </div>
              </div>
              <p className="text-zinc-600 mb-4">
                I have tried several platforms to sell my e-books, but funroad stands out for its ease of use and
                marketing tools. My sales have increased by 200% since switching, and the community features help me
                connect with my readers
              </p>
              <div className="flex text-[#ec4899]">
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
                <Star className="h-5 w-5 fill-[#ec4899]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fdf2f8] rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Product Journey?</h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
          Join thousands of creators who are building successful businesses on funroad. Start selling your digital
          products today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white" size="lg" asChild>
            <Link href="/pricing">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" size="lg" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

