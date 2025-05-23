// File: app/pricing/page.tsx
import PricingSection from "@/components/ui/pricing-section"
import Navbar from "@/components/ui/navbar"

export default function PricingPage() {
  return (
    <main className="relative min-h-screen w-full text-white">
      <Navbar />
      <div className="pt-24 px-4">
        <PricingSection />
      </div>
    </main>
  )
}
