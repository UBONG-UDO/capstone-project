import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Users, Award, Globe, Target, Heart } from 'lucide-react';

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/images/Battery.png",
    description: "15+ years in renewable energy with a passion for sustainable technology."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/images/Battery.png",
    description: "Expert in solar technology and system integration with 12 years experience."
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "/images/Battery.png",
    description: "Operations specialist ensuring seamless delivery and customer satisfaction."
  }
];

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We source only the highest quality solar equipment from trusted manufacturers worldwide.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do, providing exceptional service and support.'
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description: 'Committed to promoting clean energy solutions for a more sustainable future.'
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'Continuously exploring new technologies and solutions to advance solar energy adoption.'
  }
];

const milestones = [
  { year: '2010', title: 'Company Founded', desc: 'Started with a vision to make solar energy accessible' },
  { year: '2015', title: 'Major Expansion', desc: 'Expanded product line and nationwide shipping' },
  { year: '2020', title: '50K Customers', desc: 'Reached milestone of 50,000 satisfied customers' },
  { year: '2025', title: 'Industry Leader', desc: 'Recognized as a leading solar equipment provider' }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About UB Solar
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Leading the renewable energy revolution with premium solar equipment and exceptional service since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At SolarTech, we're dedicated to accelerating the world's transition to sustainable energy. 
                We believe that everyone should have access to clean, reliable, and affordable solar power solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experts carefully curates the highest quality solar equipment from leading manufacturers, 
                ensuring our customers receive products that deliver exceptional performance and longevity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">Premium Quality</Badge>
                <Badge className="bg-green-100 text-green-900 hover:bg-green-200">Eco-Friendly</Badge>
                <Badge className="bg-purple-100 text-purple-900 hover:bg-purple-200">Expert Support</Badge>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/panelInstallation.jpeg"
                alt="Solar panel installation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to customers and the environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to make solar energy accessible to everyone
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-900 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">         
             <div className="text-center mb-12">                                     
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
             Passionate experts dedicated to advancing solar energy adoption
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-900 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}