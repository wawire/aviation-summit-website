import { Card, CardContent } from "@/components/ui/card"
import { Building, Leaf, TrendingUp, Handshake } from "lucide-react"

export function KeyThemesSection() {
  const themes = [
    {
      icon: Building,
      title: "Innovative Infrastructure Development",
      description:
        "Strengthening airports, air traffic management, and regional connectivity through cutting-edge solutions and modern technology implementations.",
      color: "bg-blue-500",
    },
    {
      icon: Leaf,
      title: "Investing in Efficiency and Sustainability",
      description:
        "Exploring funding models and innovative approaches for long-term sustainability, environmental responsibility, and operational efficiency.",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      title: "Expanding African Aviation Horizons",
      description:
        "Strategies to boost airline profitability, increase airport capacity, and enhance overall industry competitiveness across the continent.",
      color: "bg-purple-500",
    },
    {
      icon: Handshake,
      title: "Regional Partnerships for Growth",
      description:
        "Identifying synergies among African airlines, governments, and investors to create collaborative frameworks for sustainable development.",
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="themes" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Key Themes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the core focus areas that will drive Africa's aviation transformation and unlock unprecedented
            opportunities for growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <Card key={index} className="card-hover-effect border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className={`${theme.color} p-6 text-white`}>
                  <theme.icon className="w-12 h-12 mb-4" />
                  <h3 className="font-heading text-2xl font-bold">{theme.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{theme.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">Unparalleled Networking Opportunities</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              This exclusive, high-impact event will provide cutting-edge industry insights and actionable strategies,
              ensuring attendees gain a measurable return on investment while actively shaping the future of African
              aviation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading font-bold mb-2">Infrastructure Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Modern solutions for airports and air traffic management
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading font-bold mb-2">Growth Strategies</h4>
                <p className="text-sm text-muted-foreground">
                  Actionable plans for industry expansion and profitability
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-heading font-bold mb-2">Partnership Building</h4>
                <p className="text-sm text-muted-foreground">Connect with key stakeholders and decision makers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
