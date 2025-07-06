import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Globe, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Shaping Africa's Aviation Future</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Africa's aviation industry is at a critical turning point, where strategic investments and innovation can
            drive transformative growth. Join us in exploring how digitalization, automation, and sustainable strategies
            can enhance connectivity and unlock new economic opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: TrendingUp,
              title: "Strategic Growth",
              description: "Leverage investments to drive transformative aviation growth across Africa",
            },
            {
              icon: Globe,
              title: "Enhanced Connectivity",
              description: "Modernize infrastructure to strengthen regional partnerships and connectivity",
            },
            {
              icon: Lightbulb,
              title: "Innovation Focus",
              description: "Harness digitalization and automation for operational excellence",
            },
            {
              icon: Target,
              title: "Competitive Edge",
              description: "Build a more efficient, resilient, and competitive aviation industry",
            },
          ].map((item, index) => (
            <Card key={index} className="card-hover-effect border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 aviation-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">An Exclusive, High-Impact Event</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Africa Aviation Innovation Summit 2025 brings together aviation leaders, policymakers, investors, and
              professionals from tourism, finance, logistics, technology, energy sectors and trade to explore innovative
              investment opportunities that will fuel the next phase of Africa's aviation expansion.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Industry Leaders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
