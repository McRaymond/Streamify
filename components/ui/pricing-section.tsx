"use client"

import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-24 px-6"> {/* Transparent background */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Choose the plan that's right for you
        </h2>

        <div className="bg-black/40 rounded-3xl p-10 md:p-16 shadow-xl border border-slate-800 backdrop-blur-md">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[...["Basic", "Standard", "Premium"]].map((plan, idx) => {
              const details = [
                [
                  "Good video quality",
                  "Watch on TV, computer, mobile & tablet",
                  "Unlimited movies & TV shows",
                ],
                [
                  "Better video quality",
                  "Watch on 2 screens simultaneously",
                  "Unlimited movies & TV shows",
                ],
                [
                  "Best video quality in 4K+HDR",
                  "Watch on 4 screens simultaneously",
                  "Unlimited movies & TV shows",
                ],
              ][idx]

              const prices = ["8.99", "13.99", "17.99"]
              const highlight = idx === 1

              return (
                <div
                  key={plan}
                  className={`${
                    highlight
                      ? "bg-gradient-to-b from-purple-900/40 to-blue-900/20 border border-purple-500 shadow-md shadow-purple-500/20 scale-105"
                      : "bg-slate-800/40 border border-gray-700"
                  } backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 hover:border-purple-500`}
                >
                  {highlight && (
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan}</h3>
                  <div className="text-3xl font-bold mb-6">
                    ${prices[idx]}
                    <span className="text-sm font-normal text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left text-sm">
                    {details.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} className="text-purple-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-md font-semibold transition ${
                      highlight
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500"
                        : "bg-white text-slate-900 hover:bg-gray-200"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
