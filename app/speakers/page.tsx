import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Speakers from "@/components/speakers"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Speakers />
      </main>
      <Footer />
    </div>
  )
}
