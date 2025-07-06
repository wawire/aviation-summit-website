export interface RegistrationType {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  features: string[]
  deadline?: string
  popular?: boolean
  teamPackage?: boolean
  includedAttendees?: number
  note?: string
}

export const REGISTRATION_TYPES: RegistrationType[] = [
  {
    id: "early-bird",
    name: "Early Bird Delegate",
    price: 300,
    originalPrice: 350,
    description: "Full access to all sessions, networking events, and materials",
    features: [
      "All keynote sessions",
      "Panel discussions",
      "Networking events",
      "Conference materials",
      "Gala Night Ticket",
    ],
    deadline: "August 31, 2025",
    popular: true,
  },
  {
    id: "standard",
    name: "Standard Delegate",
    price: 350,
    description: "Full access to all sessions, networking events, and materials",
    features: [
      "All keynote sessions",
      "Panel discussions",
      "Networking events",
      "Conference materials",
      "Gala Night Ticket",
    ],
  },
  {
    id: "corporate",
    name: "Corporate Package",
    price: 1500,
    description: "Perfect for teams - includes 5 delegate registrations",
    features: [
      "5 delegate registrations included",
      "All keynote sessions",
      "Panel discussions",
      "Conference materials for all",
      "Gala Night Ticket for the team",
    ],
    note: "Additional attendees can be added at Early Bird or Standard rates",
    teamPackage: true,
    includedAttendees: 5,
  },
  {
    id: "student",
    name: "Student/Academic",
    price: 150,
    description: "Special rate for students and academic professionals",
    features: [
      "All keynote sessions",
      "Panel discussions",
      "Networking events",
      "Conference materials",
      "Gala Night Ticket",
    ],
    note: "Valid student ID required",
  },
]

export const COUNTRIES = [
  "Kenya",
  "Nigeria",
  "South Africa",
  "Ghana",
  "Ethiopia",
  "Egypt",
  "Morocco",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Botswana",
  "Zambia",
  "Zimbabwe",
  "Namibia",
  "Mauritius",
  "Senegal",
  "Ivory Coast",
  "Cameroon",
  "Tunisia",
  "Algeria",
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "Canada",
  "Australia",
  "China",
  "India",
  "UAE",
  "Other",
]

export const INDUSTRIES = [
  "Aviation & Airlines",
  "Airports & Ground Services",
  "Government & Regulatory",
  "Finance & Investment",
  "Tourism & Hospitality",
  "Technology & Innovation",
  "Logistics & Supply Chain",
  "Consulting Services",
  "Academia & Research",
  "Media & Communications",
  "Other",
]

export const NETWORKING_INTERESTS = [
  "Investment Opportunities",
  "Technology Innovation",
  "Regulatory Affairs",
  "Sustainability Initiatives",
  "Regional Partnerships",
  "Infrastructure Development",
  "Digital Transformation",
  "Market Expansion",
  "Policy Development",
  "Talent Development",
]

export const DIETARY_OPTIONS = [
  "Vegetarian",
  "Vegan",
  "Halal",
  "Kosher",
  "Gluten-free",
  "Dairy-free",
  "Nut allergies",
  "Other allergies",
]
