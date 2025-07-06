"use client"

import { motion } from "framer-motion"
import { Award, Check, Crown, Gem, Star, Zap } from "lucide-react"
import { useState } from "react"
import { SPONSOR_TIERS } from "@/lib/constants/sponsorship"

const Sponsors = () => {
  const [inView, setInView] = useState(true)

  const handleSelectTier = (tierId: string) => {
    // Navigate to sponsor registration form with tier pre-selected
    window.location.href = `/register/sponsor?tier=${tierId}`
  }

  const getIcon = (tierName: string) => {
    switch (tierName.toLowerCase()) {
      case "diamond":
        return <Gem className="h-6 w-6" />
      case "platinum":
        return <Crown className="h-6 w-6" />
      case "gold":
        return <Star className="h-6 w-6" />
      case "silver":
        return <Award className="h-6 w-6" />
      case "bronze":
        return <Zap className="h-6 w-6" />
      default:
        return <Star className="h-6 w-6" />
    }
  }

  const getColorClasses = (color: string, isPopular: boolean) => {
    const baseClasses = isPopular ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md border-gray-200"

    return `${baseClasses} bg-white`
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="text-primary font-semibold mb-2 block">Sponsorship Packages</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Partner with AAIS 2025</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Position your brand at the forefront of Africa's aviation transformation. Choose the sponsorship tier that
          aligns with your business objectives.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
      >
        {SPONSOR_TIERS.map((tier) => (
          <motion.div key={tier.id} variants={itemVariants} className="relative">
            <div
              className={`flex flex-col justify-between h-full border rounded-lg transition-all duration-300 hover:shadow-lg ${getColorClasses(tier.color, tier.popular || false)}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 left-6">
                  <div className="bg-primary text-white px-3 py-1 rounded-b-md text-xs font-medium">Most Popular</div>
                </div>
              )}

              <div className={`p-6 ${tier.popular ? "pt-8" : ""}`}>
                <div className="flex justify-between items-center mb-2">
                  <div
                    className={`p-2 rounded-full ${
                      tier.popular ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {getIcon(tier.name)}
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full border ${
                      tier.popular ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {tier.slotsLabel}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${tier.popular ? "text-primary" : "text-gray-900"}`}>
                  {tier.name}
                </h3>

                <div className={`text-2xl font-semibold mt-2 mb-3 ${tier.popular ? "text-primary" : "text-gray-900"}`}>
                  ${tier.price.toLocaleString()}
                </div>

                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>

                <hr className={`my-4 ${tier.popular ? "border-primary/20" : "border-gray-200"}`} />

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.popular ? "text-primary" : "text-green-500"}`}
                      />
                      <span className="text-sm leading-relaxed text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <button
                  className={`w-full py-3 px-4 rounded-md transition-all duration-300 font-medium ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary/30"
                  }`}
                  onClick={() => handleSelectTier(tier.id)}
                >
                  Select Package
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Section */}
      <div className="max-w-4xl mx-auto mt-12 text-center p-8 bg-white rounded-lg shadow-sm border">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Sponsor AAIS 2025?</h3>
        <p className="text-gray-600 mb-6">
          Join Africa's premier aviation industry summit as a sponsor and gain unparalleled access to key
          decision-makers, thought leaders, and industry innovators.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/register/sponsor")}
            className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
          >
            Become a Sponsor
          </button>
          <button
            onClick={() => (window.location.href = "/sponsorship-brochure.pdf")}
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-300 font-medium"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
