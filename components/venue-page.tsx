"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CollapsibleSection } from "@/components/ui/collapsible-section"
import { EVENT_DETAILS } from "@/lib/constants/event"
import {
  MapPin,
  ExternalLink,
  Plane,
  Car,
  Utensils,
  Wifi,
  Waves,
  Dumbbell,
  Users,
  Phone,
  Mail,
  Star,
  Palmtree,
  Sun,
  Wind,
} from "lucide-react"

const VenuePage = () => {
  const venueFeatures = [
    {
      icon: Waves,
      title: "Beachfront Location",
      description: "Direct access to pristine Diani Beach with crystal clear waters",
    },
    {
      icon: Users,
      title: "Conference Facilities",
      description: "State-of-the-art meeting rooms and conference halls",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Complimentary WiFi throughout the resort",
    },
    {
      icon: Utensils,
      title: "Multiple Restaurants",
      description: "5 restaurants offering international and local cuisine",
    },
    {
      icon: Dumbbell,
      title: "Wellness Center",
      description: "Spa, fitness center, and wellness facilities",
    },
    {
      icon: Car,
      title: "Easy Access",
      description: "45 minutes from Moi International Airport",
    },
  ]

  const accommodationOptions = [
    {
      type: "Deluxe Ocean View",
      price: "$180-220",
      features: ["Ocean view", "King/Twin beds", "Private balcony", "Air conditioning"],
    },
    {
      type: "Premium Garden View",
      price: "$150-180",
      features: ["Garden view", "King/Twin beds", "Private terrace", "Mini bar"],
    },
    {
      type: "Standard Room",
      price: "$120-150",
      features: ["Pool/Garden view", "Queen bed", "En-suite bathroom", "Satellite TV"],
    },
  ]

  const nearbyAttractions = [
    { name: "Diani Beach", distance: "0 km", description: "Pristine white sand beach" },
    { name: "Colobus Conservation", distance: "2 km", description: "Primate sanctuary and education center" },
    { name: "Kongo Mosque", distance: "5 km", description: "Historic 14th-century mosque ruins" },
    { name: "Shimba Hills National Reserve", distance: "30 km", description: "Wildlife reserve with elephants" },
    { name: "Mombasa Old Town", distance: "45 km", description: "UNESCO World Heritage site" },
  ]

  const weatherInfo = {
    temperature: "26-30°C (79-86°F)",
    humidity: "70-80%",
    rainfall: "Minimal in October",
    season: "Dry season - perfect for outdoor events",
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary text-white">Event Venue</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{EVENT_DETAILS.venue.name}</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-xl text-muted-foreground">{EVENT_DETAILS.venue.location}</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">{EVENT_DETAILS.venue.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href={EVENT_DETAILS.venue.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                Visit Venue Website
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Contact Venue
            </Button>
          </div>
        </motion.div>

        {/* Venue Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Why Diani Reef Beach Resort?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venueFeatures.map((feature, index) => (
              <Card key={index} className="card-hover-effect">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Collapsible Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 mb-16"
        >
          <CollapsibleSection title="🏨 Accommodation Options" defaultOpen>
            <div className="grid md:grid-cols-3 gap-6">
              {accommodationOptions.map((option, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{option.type}</h4>
                    <p className="text-2xl font-bold text-primary mb-4">{option.price}/night</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm">
                <strong>Special Summit Rate:</strong> Mention "AAIS 2025" when booking for exclusive conference rates.
                Book directly through the venue website or contact them at{" "}
                <a href="mailto:reservations@dianibeach.com" className="text-primary hover:underline">
                  reservations@dianibeach.com
                </a>
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="🌍 Getting There">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Plane className="h-5 w-5" />
                  By Air
                </h4>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium">Moi International Airport (MBA)</h5>
                    <p className="text-sm text-muted-foreground">45 minutes drive to venue</p>
                    <p className="text-sm">Direct flights from Nairobi (1 hour)</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium">Ukunda Airstrip</h5>
                    <p className="text-sm text-muted-foreground">15 minutes drive to venue</p>
                    <p className="text-sm">Charter flights and small aircraft</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Ground Transportation
                </h4>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium">Airport Transfers</h5>
                    <p className="text-sm">Resort provides shuttle service</p>
                    <p className="text-sm text-primary">$35 per person (one way)</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium">Taxi/Uber</h5>
                    <p className="text-sm">Available from airport</p>
                    <p className="text-sm text-primary">$40-60 (one way)</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium">Car Rental</h5>
                    <p className="text-sm">Available at airport and venue</p>
                    <p className="text-sm text-primary">From $30/day</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="🌴 Local Attractions">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyAttractions.map((attraction, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1">{attraction.name}</h4>
                    <p className="text-sm text-primary mb-2">{attraction.distance}</p>
                    <p className="text-sm text-muted-foreground">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="🌤️ Weather & Climate">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">October Weather</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Sun className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">Temperature</p>
                      <p className="text-sm text-muted-foreground">{weatherInfo.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wind className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Humidity</p>
                      <p className="text-sm text-muted-foreground">{weatherInfo.humidity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palmtree className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Season</p>
                      <p className="text-sm text-muted-foreground">{weatherInfo.season}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-green-800 dark:text-green-200">Perfect Timing!</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  October is one of the best months to visit Diani Beach. The weather is warm and dry, perfect for both
                  business sessions and leisure activities. Expect sunny days with gentle ocean breezes.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="📞 Contact Information">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Venue Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">+254 40 320 2723</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">info@dianibeach.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm">{EVENT_DETAILS.venue.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4">Summit Organizers</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm">{EVENT_DETAILS.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm">{EVENT_DETAILS.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-primary/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Join Us at This Amazing Venue?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience world-class hospitality while networking with Africa's aviation leaders at one of Kenya's most
            prestigious beachfront resorts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/registration">Register for AAIS 2025</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={EVENT_DETAILS.venue.website} target="_blank" rel="noopener noreferrer">
                Book Accommodation
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VenuePage
