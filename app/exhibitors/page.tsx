import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import ExhibitorRegistrationForm from "@/components/exhibitor-registration-form"

export default function ExhibitorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ExhibitorRegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
