import Link from "next/link"
import { ArrowRight, Check, CheckCircle, CreditCard, HelpCircle, Package, Percent, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-8">
          No monthly fees. No hidden costs. Just a simple percentage when you make a sale.
        </p>
      </section>

      {/* Main Pricing Section */}
      <section className="mb-16">
        <Card className="border-[#fce7f3] overflow-hidden">
          <div className="bg-[#fdf2f8] p-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full mb-6">
              <Percent className="h-8 w-8 text-[#ec4899]" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Simple Commission Model</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              We only make money when you do. Pay just 10% when you make a sale.
            </p>
          </div>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl font-bold text-[#ec4899]">10%</span>
                  <div className="ml-4">
                    <p className="text-2xl font-semibold">Transaction Fee</p>
                    <p className="text-zinc-500">Per successful sale</p>
                  </div>
                </div>
                <p className="text-lg mb-6">
                  When you sell a digital product on funroad, we take a 10% commission from each sale. Payment
                  processing fees (typically 2.9% + $0.30) are also deducted.
                </p>
                <div className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                  <span>No monthly subscription fees</span>
                </div>
                <div className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                  <span>No setup costs</span>
                </div>
                <div className="flex items-center text-lg mb-2">
                  <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                  <span>No hidden charges</span>
                </div>
              </div>
              <div className="bg-[#fdf2f8] p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Example Calculation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-[#f9a8d4]">
                    <span className="font-medium">Your product price</span>
                    <span className="font-bold">$100.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#f9a8d4]">
                    <span className="font-medium">funroad fee (10%)</span>
                    <span className="text-zinc-600">-$10.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#f9a8d4]">
                    <span className="font-medium">Payment processing (2.9% + $0.30)</span>
                    <span className="text-zinc-600">-$3.20</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold">You receive</span>
                    <span className="font-bold text-xl text-[#ec4899]">$86.80</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex flex-col sm:flex-row gap-4 items-center">
            <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full sm:w-auto" size="lg" asChild>
              <Link href="/signup">
                Start Selling Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8] w-full sm:w-auto" size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* What's Included Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What is Included</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-[#fce7f3]">
            <CardHeader>
              <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-[#ec4899]" />
              </div>
              <CardTitle>Storefront & Hosting</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Customizable storefront</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Unlimited products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>50GB storage for digital files</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Custom domain support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Mobile-responsive design</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardHeader>
              <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-[#ec4899]" />
              </div>
              <CardTitle>Sales & Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Multiple payment methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Automatic tax handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Bi-weekly payouts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Sales analytics dashboard</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-[#fce7f3]">
            <CardHeader>
              <div className="bg-[#fce7f3] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-[#ec4899]" />
              </div>
              <CardTitle>Marketing & Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Marketplace visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Discount code creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Email marketing tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#ec4899] mr-2 shrink-0 mt-0.5" />
                  <span>Social sharing integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Volume Discounts</h2>
        <p className="text-lg text-center text-zinc-500 max-w-3xl mx-auto mb-8">
          As your sales grow, you can qualify for reduced commission rates.
        </p>

        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="monthly" className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white">
              Monthly Sales
            </TabsTrigger>
            <TabsTrigger value="lifetime" className="data-[state=active]:bg-[#ec4899] data-[state=active]:text-white">
              Lifetime Sales
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-[#fce7f3]">
                <CardHeader className="text-center pb-2">
                  <CardTitle>Standard</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-[#ec4899]">10%</div>
                  <p className="text-zinc-500">Commission Rate</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">Monthly sales under $10,000</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>All platform features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Standard support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Marketplace visibility</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-[#ec4899] relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ec4899] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle>Growth</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-[#ec4899]">8%</div>
                  <p className="text-zinc-500">Commission Rate</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">Monthly sales $10,000 - $50,000</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>All Standard features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Featured placement opportunities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardHeader className="text-center pb-2">
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-[#ec4899]">6%</div>
                  <p className="text-zinc-500">Commission Rate</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">Monthly sales over $50,000</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>All Growth features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Custom integration support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="lifetime" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-[#fce7f3]">
                <CardHeader className="text-center pb-2">
                  <CardTitle>Standard</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-[#ec4899]">10%</div>
                  <p className="text-zinc-500">Commission Rate</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">Lifetime sales under $100,000</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>All platform features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Standard support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Marketplace visibility</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-[#ec4899] relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ec4899] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle>Growth</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-[#ec4899]">8%</div>
                  <p className="text-zinc-500">Commission Rate</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">Lifetime sales $100,000 - $500,000</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>All Standard features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Featured placement opportunities</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-[#fce7f3]">
                <CardHeader className="text-center pb-2">
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-4xl font-bold mt-2 text-[#ec4899]">6%</div>
                  <p className="text-zinc-500">Commission Rate</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6">Lifetime sales over $500,000</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>All Growth features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-[#ec4899] mr-2" />
                      <span>Custom integration support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white w-full" asChild>
                    <Link href="/contact">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Compare with Competitors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How We Compare</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b-2 border-[#fce7f3]">Feature</th>
                <th className="p-4 border-b-2 border-[#fce7f3] bg-[#fdf2f8]">
                  <div className="font-bold text-xl">funroad</div>
                  <div className="text-[#ec4899] font-bold">10%</div>
                </th>
                <th className="p-4 border-b-2 border-[#fce7f3]">
                  <div className="font-bold text-xl">Competitor A</div>
                  <div className="text-zinc-500 font-bold">15% + $39/mo</div>
                </th>
                <th className="p-4 border-b-2 border-[#fce7f3]">
                  <div className="font-bold text-xl">Competitor B</div>
                  <div className="text-zinc-500 font-bold">5% + $99/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Monthly Fee</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <span className="text-[#ec4899] font-bold">$0</span>
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">$39</td>
                <td className="p-4 border-b border-[#fce7f3] text-center">$99</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Transaction Fee</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <span className="text-[#ec4899] font-bold">10%</span>
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">15%</td>
                <td className="p-4 border-b border-[#fce7f3] text-center">5%</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">File Storage</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <span className="text-[#ec4899] font-bold">50GB</span>
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">25GB</td>
                <td className="p-4 border-b border-[#fce7f3] text-center">100GB</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Marketplace Exposure</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <Check className="h-5 w-5 text-[#ec4899] mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Custom Domain</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <Check className="h-5 w-5 text-[#ec4899] mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Email Marketing Tools</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <Check className="h-5 w-5 text-[#ec4899] mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">-</td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Affiliate Program</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <Check className="h-5 w-5 text-[#ec4899] mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">-</td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="text-left p-4 border-b border-[#fce7f3] font-medium">Volume Discounts</td>
                <td className="p-4 border-b border-[#fce7f3] bg-[#fdf2f8] text-center">
                  <Check className="h-5 w-5 text-[#ec4899] mx-auto" />
                </td>
                <td className="p-4 border-b border-[#fce7f3] text-center">-</td>
                <td className="p-4 border-b border-[#fce7f3] text-center">
                  <Check className="h-5 w-5 text-zinc-400 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          <AccordionItem value="item-1" className="border-[#fce7f3]">
            <AccordionTrigger className="text-lg font-medium">
              How does the 10% commission work?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              When you make a sale on funroad, we automatically deduct a 10% commission fee from the sale price. For
              example, if you sell a digital product for $100, we will take $10 as our commission. Payment processing fees
              (typically 2.9% + $0.30) are also deducted from the sale price.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-[#fce7f3]">
            <AccordionTrigger className="text-lg font-medium">
              Are there any hidden fees or monthly charges?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              No, there are no hidden fees or monthly charges. We only make money when you make a sale. The only fees
              you will pay are the 10% commission and standard payment processing fees.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-[#fce7f3]">
            <AccordionTrigger className="text-lg font-medium">
              How and when do I get paid?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              We process payouts on a bi-weekly basis. Once your account reaches the minimum payout threshold of $50,
              you will receive your earnings via your preferred payment method (PayPal, Stripe, or bank transfer). You can
              track all your earnings and pending payouts in your seller dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-[#fce7f3]">
            <AccordionTrigger className="text-lg font-medium">
              Can I qualify for lower commission rates?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              Yes! As your sales volume grows, you can qualify for reduced commission rates. Sellers with monthly sales
              between $10,000 and $50,000 pay only 8% commission, and those with monthly sales over $50,000 pay just 6%.
              These rates are applied automatically based on your sales performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-[#fce7f3]">
            <AccordionTrigger className="text-lg font-medium">
              What types of digital products can I sell?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              You can sell a wide range of digital products including e-books, online courses, audio files (music,
              meditation tracks, sound effects), video content, software, graphics, templates, and more. All products
              must comply with our terms of service.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border-[#fce7f3]">
            <AccordionTrigger className="text-lg font-medium">
              How do I set up my store on funroad?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-600">
              Setting up your store is simple! Sign up for an account, complete your profile information, and click on
              Become a seller in your dashboard. You will be guided through the process of customizing your storefront,
              setting up payment methods, and uploading your first products. The entire process typically takes less
              than 30 minutes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fdf2f8] rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
          Join thousands of creators who are building successful businesses on funroad. Start selling your digital
          products today with our simple, transparent pricing.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#ec4899] hover:bg-[#db2777] text-white" size="lg" asChild>
            <Link href="/signup">
              Create Your Store <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-[#ec4899] text-[#ec4899] hover:bg-[#fdf2f8]" size="lg" asChild>
            <Link href="/contact">
              <HelpCircle className="mr-2 h-4 w-4" /> Have Questions?
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

