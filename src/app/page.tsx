import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ProblemSection from '@/components/ProblemSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import TrustBadges from '@/components/TrustBadges'
import UrgencyBanner from '@/components/UrgencyBanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ProblemSection />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <UrgencyBanner />
    </main>
  )
}
