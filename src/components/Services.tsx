import { Wind, Wrench, Sparkles, Thermometer, Zap, Settings } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'AC Repair',
    description: 'Fast diagnosis and repair for all AC brands. We fix it right the first time.',
    price: 'From $89',
    popular: false,
  },
  {
    icon: Thermometer,
    title: 'AC Installation',
    description: 'New system installation with free load calculation. Energy-efficient options.',
    price: 'Financing Available',
    popular: true,
  },
  {
    icon: Settings,
    title: 'AC Maintenance',
    description: 'Annual tune-ups to prevent breakdowns and extend system life.',
    price: '$79/visit',
    popular: false,
  },
  {
    icon: Sparkles,
    title: 'Duct Cleaning',
    description: 'Remove dust, allergens, and improve air quality throughout your home.',
    price: 'From $299',
    popular: false,
  },
  {
    icon: Wrench,
    title: 'Heat Pump Service',
    description: 'Expert repair and installation for heat pump systems.',
    price: 'Call for Quote',
    popular: false,
  },
  {
    icon: Zap,
    title: 'Emergency Service',
    description: '24/7 emergency repairs. No overtime charges on nights and weekends.',
    price: 'Available Now',
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Complete HVAC solutions for Orlando homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                service.popular 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-100 bg-white'
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                service.popular ? 'bg-blue-500' : 'bg-blue-100'
              }`}>
                <service.icon className={`w-7 h-7 ${service.popular ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className={`font-bold ${service.popular ? 'text-blue-700' : 'text-gray-900'}`}>
                  {service.price}
                </span>
                <a 
                  href="#" 
                  className="text-blue-600 font-semibold hover:text-blue-700 text-sm"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}