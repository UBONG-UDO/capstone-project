"use client";
import Hero from "@/components/home/hero"
import { Zap, Shield, Truck, Headphones, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductsPage from "./products.jsx/page";

const features = [
  {
    icon: Zap,
    title: 'High Efficiency',
    description: 'Industry-leading efficiency ratings for maximum energy output'
  },
  {
    icon: Shield,
    title: 'Reliable Quality',
    description: 'Premium components with extended warranties and certifications'
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'Quick and secure delivery to your location nationwide'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 technical support from our solar energy specialists'
  }
];

const stats = [
  { number: '5% Discount', label: 'On Total Amount' },
  { number: 'Free', label: 'Consultation' },
  { number: 'Free', label: 'Load Calculation' },
  { number: 'Free', label: 'Six Months Maintenance After Installation' }
];
export default function Home() {
  return (
    <div>
      <Hero />
        {/* Features Section */}
      <section className="lg:py-16 sm:py-14 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose UB Solar?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solar solutions with unmatched quality and service
            </p>
          </div>
              <hr></hr>
          <div className='pt-[2.5px]'><p className='py-2 text-blue-950 text-sm text-center'>Leading provider of high-quality solar equipment and solutions. Powering a 
            sustainable future with cutting-edge technology.</p></div>
        <hr></hr>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold mb-2 
                lg:text-4xl lg:font-bold lg:mb-2">
                  {stat.number}
                </div>
                <div className="lg:text-lg sm:text-lg text-sm text-blue-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our extensive collection of premium solar equipment and start your journey to energy independence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-800">
              <Link href="/shop">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get Expert Advice
              </Link>
            </Button> */}
            <Link href="/shop"><Button className='bg-blue-800 font-bold text- text-white'>
              Browse Products 
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button></Link>
            <Link href="/contactUs">
            <Button className='bg-white border-2 border-blue-800 font-bold text-base text-blue-800'>
              Get Expert Advice
            </Button></Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}


