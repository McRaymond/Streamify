"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { PaymentModal } from "./payment-modal"

interface PricingCardProps {
  name: string
  price: number
  period: string
  features: string[]
  featured?: boolean
}

export function PricingCard({ name, price, period, features, featured }: PricingCardProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  return (
    <>
      <div className="relative flex flex-col justify-between p-6 bg-zinc-900 rounded-xl border border-zinc-800 shadow-md hover:shadow-lg transition-shadow">
        {featured && (
          <div className="absolute -top-2 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight text-white">€{price}</span>
              <span className="ml-1 text-sm text-zinc-400">/{period}</span>
            </div>
          </div>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 font-medium text-white"
            onClick={() => setShowPaymentModal(true)}
          >
            Get {name}
          </Button>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        plan={{ name, price, period }}
      />
    </>
  )
}
