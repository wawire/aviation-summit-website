import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, DollarSign, Scale } from "lucide-react"

export function ObjectivesSection() {
  const objectives = [
    {
      icon: Users,
      title: "Industry Collaboration",
      description:
        "Explore how diverse industries can shape Africa's aviation future by actively involving investors, policymakers, and industry leaders in discussions, panels and networking sessions to drive investment opportunities in aviation infrastructure and innovation.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Showcase",
      description:
        "Highlight Innovation's Role: Demonstrate how innovation enhances efficiency, customer experience and operational excellence across the aviation ecosystem.",
    },
    {
      icon: DollarSign,
      title: "Funding Models",
      description:
        "Showcase Funding Models: Present innovative financing models and business strategies that bolster industry resilience and growth for sustainable development.",
    },
    {
      icon: Scale,
      title: "Regulatory Framework",
      description:
        "Foster Regulatory Dialogue: Encourage discussions on regulatory frameworks that create an enabling environment for aviation investments and sustainable growth.",
    },
  ]

  return (
    <section id="objectives" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Summit Objectives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach to transforming Africa's aviation landscape through strategic partnerships,
            innovation, and sustainable investment models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <Card key={index} className="card-hover-effect border-0 shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 aviation-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <objective.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold mb-3">{objective.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
