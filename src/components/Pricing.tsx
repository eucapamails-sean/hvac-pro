import { Check, Phone } from 'lucide-react'

const plans = [
  {
    name: 'Repair',
    price: '$89',
    sub: 'diagnostic fee credited to repair',
    features: [
      'Full system diagnostic',
      'Upfront repair quote',
      'Same-day service',
      '90-day repair warranty',
      'All major brands serviced',
    ],
    cta: 'Book Repair',
    popular: false,
  },
  {
    name: 'New Installation',
    price: 'Financing',
    sub: '0% APR for 24 months',
    features: [
      'Free in-home consultation',
      'Load calculation included',
      'Removal of old unit',
      '10-year parts warranty',
      'Lifetime workmanship warranty',
      'Energy rebate assistance',
    ],
    cta: 'Get Free Quote',
    popular: true,
  },
  {
    name: 'Maintenance',
    price: '$79',
    sub: 'per visit or $199/year',
    features: [
      '2 annual tune-ups',
      'Priority scheduling',
      '10% repair discount',
      'No diagnostic fees',
      'Extended equipment life',
    ],
    cta: 'Start Saving',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            No hidden fees. No surprises. Just honest, upfront pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-blue-600 text-white shadow-xl scale-105' 
                  : 'bg-gray-50 text-gray-900 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-blue-900 font-bold px-4 py-1 rounded-full text-sm">
                  BEST VALUE
                </span>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold mb-1">
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.sub}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-amber-400' : 'text-green-500'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="tel:407-555-COOL"
                className={`block w-full text-center font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-blue-50' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Phone className="w-5 h-5" />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Not sure what you need?</span> Call us for a free phone consultation.
          </p>
        </div>
      </div>
    </section>
  )
}