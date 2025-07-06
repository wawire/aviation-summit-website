export interface UnifiedPackage {
  id: string
  name: string
  type: "delegate" | "sponsor" | "exhibitor"
  price: number
  originalPrice?: number
  description: string
  features: string[]
  totalSlots?: number
  availableSlots?: number
  popular?: boolean
  teamPackage?: boolean
  includedAttendees?: number
  deadline?: string
  note?: string
  displayOrder: number
  category?: string
  highlight?: string
}

export const UNIFIED_PACKAGES: UnifiedPackage[] = [
  // DELEGATE PACKAGES
  {
    id: "early-bird-delegate",
    name: "Early Bird Delegate",
    type: "delegate",
    price: 300,
    originalPrice: 350,
    description: "Limited time offer - Save $50 until August 31st, 2025",
    features: [
      "Full 2-day summit access",
      "All keynote sessions & panel discussions",
      "Welcome reception & networking events",
      "Gala dinner & awards ceremony",
      "Summit materials & certificate",
      "Access to mobile app & networking platform",
      "Complimentary refreshments",
    ],
    deadline: "August 31, 2025",
    popular: true,
    displayOrder: 1,
    highlight: "Save $50",
  },
  {
    id: "standard-delegate",
    name: "Standard Delegate",
    type: "delegate",
    price: 350,
    description: "Full access to all summit activities and networking opportunities",
    features: [
      "Full 2-day summit access",
      "All keynote sessions & panel discussions",
      "Welcome reception & networking events",
      "Gala dinner & awards ceremony",
      "Summit materials & certificate",
      "Access to mobile app & networking platform",
      "Complimentary refreshments",
    ],
    displayOrder: 2,
  },
  {
    id: "corporate-team",
    name: "Corporate Team Package",
    type: "delegate",
    price: 1500,
    description: "Perfect for teams - includes 5 delegate registrations",
    features: [
      "5 full delegate registrations included",
      "All standard delegate benefits",
      "Priority seating at all sessions",
      "Private meeting room access (2 hours)",
      "Company logo in event materials",
      "Gala dinner tickets for the team",
      "Post-event industry report",
      "Additional attendees at early bird rates",
    ],
    teamPackage: true,
    includedAttendees: 5,
    note: "Additional attendees can be added at $299 each",
    displayOrder: 3,
  },
  {
    id: "student-academic",
    name: "Student & Academic",
    type: "delegate",
    price: 150,
    description: "Special rate for students and academic professionals",
    features: [
      "Full 2-day summit access",
      "All keynote sessions & panel discussions",
      "Student networking session",
      "Gala dinner ticket",
      "Summit materials & certificate",
      "Career guidance workshop",
      "Mentorship opportunities",
    ],
    note: "Valid student ID required",
    displayOrder: 4,
  },

  // SPONSOR PACKAGES (Original)
  {
    id: "diamond-sponsor",
    name: "Diamond Sponsor",
    type: "sponsor",
    price: 60000,
    description: "Premier tier with maximum visibility and influence",
    features: [
      'Naming rights: "AAIS 2025 Powered by [Your Company]"',
      "Top-tier logo placement on all event materials and communications",
      "Opening keynote speech opportunity",
      "Largest, most prominent exhibition space",
      "VIP Lounge access for exclusive networking",
      "Special recognition in all media coverage and press releases",
      "Invitation to exclusive VIP dinner",
      "Gala dinner premium table for 12 guests",
      "12 VIP passes",
    ],
    totalSlots: 2,
    availableSlots: 2,
    displayOrder: 1,
  },
  {
    id: "platinum-sponsor",
    name: "Platinum Sponsor",
    type: "sponsor",
    price: 40000,
    description: "High-level visibility and engagement",
    features: [
      "Premium logo placement on all event materials",
      "Keynote or fireside chat speaking opportunity",
      "Prominent exhibition booth",
      "VIP Lounge access for private networking",
      "Dedicated media feature and press release mention",
      "Invitation to exclusive VIP dinner",
      "Gala dinner reserved table for 10 guests",
      "10 VIP passes",
    ],
    totalSlots: 3,
    availableSlots: 3,
    popular: true,
    displayOrder: 2,
  },
  {
    id: "gold-sponsor",
    name: "Gold Sponsor",
    type: "sponsor",
    price: 30000,
    description: "Enhanced visibility with speaking opportunities",
    features: [
      "Logo on all marketing collateral & digital promotions",
      "Panel discussion seat",
      "Premium exhibition booth",
      "Access to networking sessions & speaker lounge",
      "Dedicated sponsor highlight across social media",
      "Invitation to VIP networking cocktail",
      "Gala dinner table for 6 guests",
      "6 VIP passes",
    ],
    totalSlots: 4,
    availableSlots: 4,
    displayOrder: 3,
  },
  {
    id: "silver-sponsor",
    name: "Silver Sponsor",
    type: "sponsor",
    price: 20000,
    description: "Essential visibility package for businesses",
    features: [
      "Logo on event website & select signage",
      "Mention in event brochure",
      "Basic exhibition space",
      "General networking access",
      "Social media mentions",
      "Gala dinner table for 4 guests",
      "4 VIP passes",
    ],
    totalSlots: 0, // Unlimited
    availableSlots: 999,
    displayOrder: 4,
  },
  {
    id: "bronze-sponsor",
    name: "Bronze Sponsor",
    type: "sponsor",
    price: 10000,
    description: "Entry-level brand presence",
    features: [
      "Logo on event website & select signage",
      "Mention in event brochure",
      "Basic exhibition space",
      "General networking access",
      "Social media mentions",
      "Gala dinner tickets for 2 guests",
      "2 VIP passes",
    ],
    totalSlots: 0, // Unlimited
    availableSlots: 999,
    displayOrder: 5,
  },

  // EXHIBITOR PACKAGES (Original)
  {
    id: "premium-exhibitor",
    name: "Premium Exhibition Package",
    type: "exhibitor",
    price: 3000,
    description: "For established organizations",
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
      "Gala dinner table for 4 guests",
    ],
    totalSlots: 5,
    availableSlots: 3,
    displayOrder: 1,
  },
  {
    id: "standard-exhibitor",
    name: "Standard Exhibition Package",
    type: "exhibitor",
    price: 2000,
    description: "Great for growing companies",
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
      "Gala dinner tickets for 3 guests",
    ],
    totalSlots: 8,
    availableSlots: 5,
    popular: true,
    displayOrder: 2,
  },
  {
    id: "startup-exhibitor",
    name: "Startup Exhibition Package",
    type: "exhibitor",
    price: 1000,
    description: "Perfect for small businesses",
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
      "Gala dinner tickets for 2 guests",
    ],
    totalSlots: 12,
    availableSlots: 8,
    displayOrder: 3,
  },
]

export const PACKAGE_CATEGORIES = [
  { id: "delegate", name: "Delegate Packages", description: "Join as an attendee" },
  { id: "sponsor", name: "Sponsorship Packages", description: "Partner with us for maximum visibility" },
  { id: "exhibitor", name: "Exhibition Packages", description: "Showcase your products and services" },
]

export const getPackagesByType = (type: "delegate" | "sponsor" | "exhibitor") => {
  return UNIFIED_PACKAGES.filter((pkg) => pkg.type === type).sort((a, b) => a.displayOrder - b.displayOrder)
}

export const getPackageById = (id: string) => {
  return UNIFIED_PACKAGES.find((pkg) => pkg.id === id)
}
