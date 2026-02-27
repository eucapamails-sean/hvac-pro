'use client'

import { useState } from 'react'
import { Phone, Clock, MapPin, CheckCircle } from 'lucide-react'

export default function Hero() {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    alert(`Thank you! We'll call you at ${phone} within 15 minutes.`)
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Emergency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-slow">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              24/7 Emergency Service Available
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Orlando's #1 Rated
                <span className="text-amber-400"> AC Repair</span> Company
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-xl">
                Same-day service guaranteed. Licensed & insured technicians. 
                5,000+ happy customers in Orange County. 
              </p>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="text-sm">10-Year Warranty</span>
              </div>
            </div>

            {/* Phone CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:407-555-COOL" 
                className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg shadow-amber-500/30"
              >
                <Phone className="w-6 h-6" />
                (407) 555-COOL
              </a>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <Clock className="w-5 h-5" />
                <span>Response time: Under 15 min</span>
              </div>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Serving all of Orange County, FL • Orlando • Winter Park • Kissimmee</span>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Get Your Free Quote</h2>
              <p className="text-gray-600 mt-2">We'll call you back in 15 minutes or less</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="(407) 555-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>AC Maintenance</option>
                  <option>Emergency Service</option>
                  <option>Duct Cleaning</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
              >
                Get My Free Quote Now
              </button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive calls/texts. Message rates may apply.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">
                      ★
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">500+ quotes requested this week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}