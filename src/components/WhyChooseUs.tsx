import { CheckCircle, Clock, Users, BadgeCheck, Shield, Star } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'We understand Florida heat. That\'s why we offer same-day repairs and installations.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed Experts',
    description: 'Our technicians are EPA certified, background-checked, and undergo continuous training.',
  },
  {
    icon: Shield,
    title: 'Upfront Pricing',
    description: 'No hidden fees. You\'ll know the exact price before we start any work.',
  },
  {
    icon: Star,
    title: '10-Year Warranty',
    description: 'We stand behind our work with an industry-leading 10-year warranty on all installations.',
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description: 'We\'ve served Orlando families for 15+ years. Check our 500+ 5-star Google reviews.',
  },
  {
    icon: CheckCircle,
    title: 'Satisfaction Guaranteed',
    description: 'Not happy? We\'ll make it right. That\'s our promise to every customer.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Orlando Trusts Us</h2>
          <p className="mt-4 text-xl text-blue-200">
            We're not just another HVAC company — we're your neighbors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-blue-800 pt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">15+</div>
            <div className="text-sm text-blue-200 mt-1">Years Serving Orlando</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">5,000+</div>
            <div className="text-sm text-blue-200 mt-1">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">4.9★</div>
            <div className="text-sm text-blue-200 mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-400">24/7</div>
            <div className="text-sm text-blue-200 mt-1">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  )
}