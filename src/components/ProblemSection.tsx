import { AlertTriangle, Thermometer, DollarSign, AlertCircle } from 'lucide-react'

const problems = [
  {
    icon: Thermometer,
    title: 'AC Won\'t Cool?',
    description: 'Sweating through Florida heat while your AC blows warm air?',
  },
  {
    icon: AlertTriangle,
    title: 'Strange Noises?',
    description: 'Banging, squealing, or grinding sounds from your unit?',
  },
  {
    icon: DollarSign,
    title: 'High Energy Bills?',
    description: 'Paying too much because your AC is working overtime?',
  },
  {
    icon: AlertCircle,
    title: 'System Won\'t Start?',
    description: 'Complete failure leaving you without cooling?',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Is Your AC Acting Up?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Florida heat is brutal. Don't suffer another day with a broken AC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            <span className="font-semibold text-blue-900">Good news:</span> Our technicians can fix any AC problem — same day, guaranteed.
          </p>
          <a 
            href="tel:407-555-COOL"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Call Now for Fast Relief
          </a>
        </div>
      </div>
    </section>
  )
}