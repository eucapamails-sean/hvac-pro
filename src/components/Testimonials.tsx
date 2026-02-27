import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Winter Park, FL',
    rating: 5,
    text: 'Our AC died during the July heatwave. Orlando HVAC Pros came out same day and had it running in 2 hours. Fair price, professional service. Highly recommend!',
    service: 'AC Repair',
  },
  {
    name: 'Michael R.',
    location: 'Orlando, FL',
    rating: 5,
    text: 'Got a complete new system installed. The crew was clean, efficient, and explained everything. My energy bills dropped 30%! Worth every penny.',
    service: 'AC Installation',
  },
  {
    name: 'Jennifer K.',
    location: 'Kissimmee, FL',
    rating: 5,
    text: 'Called at 9 PM on a Saturday for an emergency. Technician arrived within the hour. Fixed the issue and saved our weekend. True 24/7 service!',
    service: 'Emergency Repair',
  },
]

const reviewPlatforms = [
  { name: 'Google', rating: '4.9', reviews: '523 reviews' },
  { name: 'Yelp', rating: '4.8', reviews: '189 reviews' },
  { name: 'BBB', rating: 'A+', reviews: 'Accredited' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What Orlando Homeowners Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it — hear from real customers
          </p>
          
          {/* Platform Ratings */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {reviewPlatforms.map((platform, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <span className="font-semibold text-gray-900">{platform.name}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-gray-900">{platform.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{platform.reviews}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="mt-12 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-white text-lg mb-4">
              "We film every customer review because we have nothing to hide. 
              <span className="text-amber-400 font-semibold"> Real Orlando homeowners. Real results."</span>
            </p>
            <button className="text-blue-200 hover:text-white underline text-sm">
              Watch Video Testimonials
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}