import { Clock, Phone, AlertTriangle } from 'lucide-react'

export default function UrgencyBanner() {
  return (
    <section className="bg-red-600 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">Emergency? We've Got You Covered</div>
              <div className="text-red-100 text-sm">24/7 emergency service • No overtime charges</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Response time: ~15 min</span>
            </div>
            <a 
              href="tel:407-555-COOL"
              className="bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Emergency Line
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}