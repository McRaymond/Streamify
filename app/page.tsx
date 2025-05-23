import Link from "next/link"
import ReasonsBanner from "@/components/ui/reasons-banner"
import TrendingBanner from "@/components/ui/trending-banner"
import Navbar from "@/components/ui/navbar"

export default function HomePage() {
  return (
    <main className="relative w-full text-white">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] w-full">
        {/* Background image and overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/img/bg-grid.png"
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero content */}
        <div className="flex flex-col items-center justify-center px-4 text-center pt-12 pb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-2xl">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-base md:text-lg mt-3 font-medium text-gray-200">
            Starts at $7.99. Cancel anytime.
          </p>
          <p className="text-sm md:text-base mt-3 text-gray-300 max-w-lg">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <form className="mt-5 flex flex-col sm:flex-row gap-3 items-center justify-center w-full max-w-lg">
            <input
              type="email"
              placeholder="Email address"
              className="w-full flex-1 px-4 py-2.5 rounded bg-black/70 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Link href="/pricing" className="shrink-0">
              <button
                type="button"
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition text-sm"
              >
                Get Started →
              </button>
            </Link>
          </form>
        </div>
      </section>

      {/* Sections outside background */}
      <ReasonsBanner />
      <TrendingBanner />
    </main>
  )
}
