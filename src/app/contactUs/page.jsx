'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our solar products? Need expert advice? Our team is here to help you make the right choice for your energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      19 Unity Close Ogudu, Ojota<br />
                      Lagos<br />
                      Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+2348168155901</p>
                    <p className="text-gray-600">+2348168297773</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">udoubong123@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-900 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900 mb-1">Sales Questions</p>
                  <p className="text-sm text-blue-700">Need product recommendations?</p>
                  <p className="text-sm text-blue-700">Call: +2348168155901</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900 mb-1">Technical Support</p>
                  <p className="text-sm text-green-700">Installation or product issues?</p>
                  <p className="text-sm text-green-700">Call: +2348168155901</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-medium text-purple-900 mb-1">General Inquiries</p>
                  <p className="text-sm text-purple-700">Other questions or feedback?</p>
                  <p className="text-sm text-purple-700">Email: udoubong123@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="sales-question">Sales Question</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Please provide details about your inquiry..."
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="mt-1"
                      />
                      <Label htmlFor="newsletter" className="text-sm leading-5">
                        I would like to receive updates about new products and special offers
                      </Label>
                    </div>

                    <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's included with my order?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    All products include manufacturer warranties, installation guides, and free technical support.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How fast is shipping?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Most orders ship within 1-2 business days with free shipping on orders over $500.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do you offer installation services?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    We do Install and also partner with certified installers nationwide. Contact us for local installer recommendations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What's your return policy?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    30-day return policy for unused items in original packaging. Some restrictions apply.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}