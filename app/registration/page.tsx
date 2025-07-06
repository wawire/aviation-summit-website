import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import UnifiedRegistrationForm from "@/components/unified-registration-form"

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <UnifiedRegistrationForm />
      </main>
      <Footer />
    </div>
  )
}
