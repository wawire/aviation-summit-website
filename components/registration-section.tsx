import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Users, GraduationCap, Building } from "lucide-react"

export function RegistrationSection() {
  const pricingTiers = [
    {
      name: "Early Bird",
      price: "$299",
      originalPrice: "$349",
      icon: Star,
      badge: "Save $50",
      badgeColor: "bg-green-500",
      description: "Limited time offer - Register before August 31st",
      features: [
        "Full 2-day summit access",
        "All keynote sessions",
        "Networking events",
        "Welcome reception",
        "Summit materials",
        "Certificate of attendance",
      ],
      popular: true,
    },
    {
      name: "Standard",
      price: "$349",
      icon: Users,
      description: "Regular registration for industry professionals",
      features: [
        "Full 2-day summit access",
        "All keynote sessions",
        "Networking events",
        "Welcome reception",
        "Summit materials",
        "Certificate of attendance",
      ],
    },
    {
      name: "Student",
      price: "$150",
      icon: GraduationCap,
      badge: "57% Off",
      badgeColor: "bg-blue-500",
      description: "Special rate for students and recent graduates",
      features: [
        "Full 2-day summit access",
        "All keynote sessions",
        "Student networking session",
        "Summit materials",
        "Certificate of attendance",
        "Career guidance session",
      ],
    },
    {
      name: "Corporate Package",
      price: "$1,500",
      icon: Building,
      badge: "Best Value",
      badgeColor: "bg-purple-500",
      description: "For 5 participants - Additional attendees at Early Bird rate",
      features: [
        "5 full summit passes",
        "Priority seating",
        "VIP networking access",
        "Private meeting room (2 hours)",
        "Company logo in materials",
        "Post-event report",
        "Additional attendees at $299 each",
      ],
    },
  ]

  return (
    <section id="registration" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Registration Fees</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the registration option that best fits your needs. Early bird pricing available for a limited time
            with significant savings.
          </p>
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
            🔥 Early Bird Special: Limited time offer - Save $50!
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`card-hover-effect relative ${
                tier.popular ? "border-primary shadow-xl scale-105" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="aviation-gradient text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 aviation-gradient rounded-full flex items-center justify-center">
                  <tier.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-heading text-2xl">{tier.name}</CardTitle>
                {tier.badge && <Badge className={`${tier.badgeColor} text-white`}>{tier.badge}</Badge>}
              </CardHeader>

              <CardContent className="text-center">
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold font-heading">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{tier.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "aviation-gradient text-white btn-hover-effect"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">Registration Information</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Secure your spot at Africa's premier aviation innovation event. All registrations include access to
              exclusive networking opportunities and industry insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading font-bold mb-2">Group Discounts</h4>
              <p className="text-sm text-muted-foreground">
                Corporate packages offer the best value for teams. Additional attendees can register at Early Bird
                rates.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading font-bold mb-2">Student Rates</h4>
              <p className="text-sm text-muted-foreground">
                Special pricing for students and recent graduates. Valid student ID required at registration.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-heading font-bold mb-2">Early Bird Benefits</h4>
              <p className="text-sm text-muted-foreground">
                Register early to save $50 and secure your preferred seating. Limited time offer expires August 31st.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="aviation-gradient text-white btn-hover-effect px-12 py-4 text-lg">
              Start Registration Process
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Questions about registration? Contact us at{" "}
              <a href="mailto:register@aviationsummit.africa" className="text-primary hover:underline">
                register@aviationsummit.africa
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
