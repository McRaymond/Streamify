import { PricingCard } from "@/components/pricing-card"
import { plans } from "@/lib/plans"



export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Simple pricing for advanced people</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our pricing is designed for advanced people who need more features and more flexibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  )
}
