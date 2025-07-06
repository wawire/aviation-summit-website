export interface SponsorTier {
  id: string
  name: string
  price: number
  description: string
  slotsLabel: string
  features: string[]
  popular?: boolean
  color: string
}

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    id: "diamond",
    name: "Diamond",
    price: 60000,
    description: "Premier tier with maximum visibility and influence",
    slotsLabel: "2 slots available",
    color: "purple",
    features: [
      'Naming rights: "AAIS 2025 Powered by [Your Company]"',
      "Top-tier logo placement on all event materials and communications",
      "Opening keynote speech opportunity",
      "Largest, most prominent exhibition space",
      "VIP Lounge access for exclusive networking",
      "Special recognition in all media coverage and press releases",
      "Invitation to exclusive VIP dinner",
      "12 VIP passes",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 40000,
    description: "High-level visibility and engagement",
    slotsLabel: "3 slots available",
    color: "gray",
    popular: true,
    features: [
      "Premium logo placement on all event materials",
      "Keynote or fireside chat speaking opportunity",
      "Prominent exhibition booth",
      "VIP Lounge access for private networking",
      "Dedicated media feature and press release mention",
      "Invitation to exclusive VIP dinner",
      "10 VIP passes",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 30000,
    description: "Enhanced visibility with speaking opportunities",
    slotsLabel: "4 slots available",
    color: "yellow",
    features: [
      "Logo on all marketing collateral & digital promotions",
      "Panel discussion seat",
      "Premium exhibition booth",
      "Access to networking sessions & speaker lounge",
      "Dedicated sponsor highlight across social media",
      "Invitation to VIP networking cocktail",
      "6 VIP passes",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: 20000,
    description: "Essential visibility package for businesses",
    slotsLabel: "Unlimited slots",
    color: "gray",
    features: [
      "Logo on event website & select signage",
      "Mention in event brochure",
      "Basic exhibition space",
      "General networking access",
      "Social media mentions",
      "Invitation to exclusive VIP dinner",
      "4 VIP passes",
    ],
  },
  {
    id: "bronze",
    name: "Bronze",
    price: 10000,
    description: "Entry-level brand presence",
    slotsLabel: "Unlimited slots",
    color: "orange",
    features: [
      "Logo on event website & select signage",
      "Mention in event brochure",
      "Basic exhibition space",
      "General networking access",
      "Social media mentions",
      "Invitation to exclusive VIP dinner",
      "2 VIP passes",
    ],
  },
]
