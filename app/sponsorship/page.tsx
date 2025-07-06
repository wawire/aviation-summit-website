import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import Sponsors from "@/components/sponsors"

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}
