"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const OBJECTIVES = [
  "Promote collaboration between African airlines and global partners.",
  "Address policy and regulatory challenges hampering growth.",
  "Showcase innovative technologies improving safety and efficiency.",
]

const THEMES = [
  "Sustainability & Green Aviation",
  "Digital Transformation & AI",
  "Regional Connectivity & Open Skies",
  "Financing African Aviation",
]

export function ObjectivesThemesSection() {
  return (
    <section
      id="objectives"
      className="flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24"
      style={{ minHeight: "85vh" }}
    >
      <div className="w-full max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Summit Objectives &amp; Key Themes</h2>

        <Tabs defaultValue="objectives" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-64 grid-cols-2">
            <TabsTrigger value="objectives">Objectives</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
          </TabsList>

          <TabsContent value="objectives">
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {OBJECTIVES.map((item) => (
                <li key={item} className="relative pl-6">
                  <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="themes">
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              {THEMES.map((item) => (
                <li key={item} className="relative pl-6">
                  <span className="absolute left-0 top-1 h-3 w-3 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
