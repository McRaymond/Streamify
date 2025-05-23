// File: components/ui/reasons-banner.tsx
import Image from "next/image"

export default function ReasonsBanner() {
  return (
    <section className="relative w-full flex justify-center py-12">
      <div className="relative max-w-3xl w-full flex items-center justify-center">
        {/* Purple banner */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 px-6 py-4 bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg shadow-lg w-full">
          <div className="flex-1 text-center sm:text-left text-white">
            <p className="font-semibold text-sm sm:text-base">
              The Streamify you love for just $7.99.
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              Get our most affordable, ad-supported plan.
            </p>
          </div>
          <button className="mt-2 sm:mt-0 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm font-medium">
            Learn More
          </button>
        </div>

        {/* Popcorn icon outside the banner */}
        <div className="absolute -left-20 sm:-left-40 top-1/2 transform -translate-y-1/2 z-20">
          <Image
            src="/img/popcorn.png"
            alt="Popcorn Icon"
            width={200}
            height={200}
            className="opacity-100"
          />
        </div>
      </div>
    </section>
  )
}
