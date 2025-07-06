import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import VenuePage from "@/components/venue-page"

export default function Venue() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <VenuePage />
      </main>
      <Footer />
    </div>
  )
}
