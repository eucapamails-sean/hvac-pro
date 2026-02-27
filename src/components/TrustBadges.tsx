import { Award, Shield, Users, Star, BadgeCheck, Clock } from 'lucide-react'

const badges = [
  { icon: Award, label: 'Licensed & Insured', sub: 'CFC1426387' },
  { icon: Shield, label: '10-Year Warranty', sub: 'On All Work' },
  { icon: Users, label: '5,000+ Customers', sub: 'In Orlando Area' },
  { icon: Star, label: '4.9/5 Rating', sub: 'Google Reviews' },
  { icon: BadgeCheck, label: 'EPA Certified', sub: 'Technicians' },
  { icon: Clock, label: '24/7 Emergency', sub: 'Always Available' },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <badge.icon className="w-8 h-8 text-blue-600 mb-2" />
              <span className="font-semibold text-gray-900 text-sm">{badge.label}</span>
              <span className="text-xs text-gray-500">{badge.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}