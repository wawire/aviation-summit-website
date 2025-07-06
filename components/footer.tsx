import Link from "next/link"
import { Plane, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-heading font-bold text-xl text-primary">Africa Aviation Innovation Summit</div>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Shaping the future of African aviation through innovation, investment, and strategic partnerships. Join us
              in Mombasa for the continent's premier aviation event.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-background/80 hover:text-primary transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-background/80 hover:text-primary transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link href="/exhibitors" className="text-background/80 hover:text-primary transition-colors">
                  Exhibitors
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-background/80 hover:text-primary transition-colors">
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Event Venue</div>
                  <div className="text-background/80 text-sm">Mombasa, Kenya</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-background/80 text-sm">info@aviationsummit.africa</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-background/80 text-sm">+254 716 851 914</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © {new Date().getFullYear()} Africa Aviation Innovation Summit. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-background/80 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
