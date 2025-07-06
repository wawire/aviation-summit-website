export interface ExhibitionPackage {
  id: string
  name: string
  price: number
  description: string
  slots: number
  slotsRemaining: number
  features: string[]
  popular?: boolean
}

export const EXHIBITION_PACKAGES: ExhibitionPackage[] = [
  {
    id: "premium",
    name: "Premium",
    price: 3000,
    description: "For established organizations",
    slots: 5,
    slotsRemaining: 3,
    features: [
      "Premium 6m x 3m exhibition space",
      "Prime location near main entrance",
      "Professional booth setup included",
      "Electricity and WiFi connection",
      "Company listing in event directory",
      "Logo on event website and materials",
      "4 exhibitor passes included",
      "Access to all networking events",
      "Lead retrieval system access",
      "Post-event attendee contact list",
      "Dedicated social media mentions",
      "Priority consideration for speaking opportunities",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: 2000,
    description: "Great for growing companies",
    slots: 8,
    slotsRemaining: 5,
    popular: true,
    features: [
      "Standard 4m x 3m exhibition space",
      "Good location in main exhibition area",
      "Basic booth setup included",
      "Electricity and WiFi connection",
      "Company listing in event directory",
      "Logo on event website",
      "3 exhibitor passes included",
      "Access to networking sessions",
      "Lead retrieval system access",
      "Social media mentions",
    ],
  },
  {
    id: "startup",
    name: "Startup",
    price: 1000,
    description: "Perfect for small businesses",
    slots: 12,
    slotsRemaining: 8,
    features: [
      "Compact 3m x 2m exhibition space",
      "Shared exhibition area",
      "Table and chairs provided",
      "Electricity connection",
      "Company listing in event directory",
      "2 exhibitor passes included",
      "Access to startup networking session",
      "Startup pitch opportunity",
      "Mentorship session access",
    ],
  },
]

export const INDUSTRIES = [
  "Aviation & Airlines",
  "Airports & Ground Services",
  "Aircraft Manufacturing",
  "Aviation Technology",
  "MRO Services",
  "Ground Support Equipment",
  "Aviation Software",
  "Safety & Security",
  "Cargo & Logistics",
  "Training & Education",
  "Finance & Insurance",
  "Other",
]

export const PRODUCT_CATEGORIES = [
  "Aircraft Systems",
  "Avionics",
  "Ground Support Equipment",
  "MRO Tools & Equipment",
  "Safety Equipment",
  "Software Solutions",
  "Training Systems",
  "Cargo Handling",
  "Airport Infrastructure",
  "Fuel Systems",
  "Communication Systems",
  "Navigation Systems",
]

export const BOOTH_REQUIREMENTS = [
  "Additional Power Outlets",
  "High-Speed Internet",
  "Audio/Visual Equipment",
  "Storage Space",
  "Meeting Area",
  "Product Display Stands",
  "Lighting Enhancement",
  "Carpet/Flooring",
]
