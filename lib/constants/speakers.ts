export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  image: string
  category: "keynote" | "panelist" | "moderator"
  country: string
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    website?: string
  }
  sessionTitle?: string
  sessionTime?: string
  achievements: string[]
}

export const SPEAKERS: Speaker[] = [
  {
    id: "1",
    name: "Allan Kilavuka",
    title: "Group Managing Director and CEO",
    company: "Kenya Airways PLC",
    bio: "Allan Kilavuka is a seasoned aviation executive with over 20 years of experience in the industry. Under his leadership, Kenya Airways has undergone significant transformation, focusing on operational efficiency, route optimization, and strategic partnerships across Africa.",
    image: "/placeholder.svg?height=400&width=400",
    category: "keynote",
    country: "Kenya",
    expertise: ["Aviation Leadership", "Strategic Planning", "African Aviation", "Airline Operations"],
    social: {
      linkedin: "https://linkedin.com/in/allan-kilavuka",
      twitter: "https://twitter.com/allankilavuka",
    },
    sessionTitle: "The Future of African Aviation: A CEO's Perspective",
    sessionTime: "Day 1, 9:30 AM",
    achievements: [
      "Led Kenya Airways' digital transformation",
      "Expanded KQ's African route network by 40%",
      "Implemented sustainable aviation initiatives",
      "20+ years in aviation industry",
    ],
  },
  {
    id: "2",
    name: "Abderahmane Berthe",
    title: "Secretary General",
    company: "African Airlines Association (AFRAA)",
    bio: "Abderahmane Berthe has been instrumental in promoting collaboration among African airlines and advocating for policies that support the growth of aviation across the continent. His work focuses on regulatory harmonization and capacity building.",
    image: "/placeholder.svg?height=400&width=400",
    category: "keynote",
    country: "Morocco",
    expertise: ["Aviation Policy", "Regulatory Affairs", "Pan-African Cooperation", "Industry Development"],
    social: {
      linkedin: "https://linkedin.com/in/abderahmane-berthe",
      website: "https://afraa.org",
    },
    sessionTitle: "Pan-African Aviation Integration: Opportunities and Challenges",
    sessionTime: "Day 1, 10:30 AM",
    achievements: [
      "Led AFRAA for 8+ years",
      "Championed Single African Air Transport Market",
      "Facilitated 50+ airline partnerships",
      "Expert in aviation liberalization",
    ],
  },
  {
    id: "3",
    name: "Mrs. Hellen Mathuka",
    title: "Chief Strategy & Innovation Officer",
    company: "Kenya Airways",
    bio: "Mrs. Hellen Mathuka is a leading expert in aviation technology and digital innovation. She has spearheaded Kenya Airways digital transformation initiatives, focusing on enhancing customer experience and operational efficiency through smart airport solutions.",
    image: "/placeholder.svg?height=400&width=400",
    category: "panelist",
    country: "Kenya",
    expertise: ["Aviation Technology", "Digital Innovation", "Air Traffic Management", "Smart Airports"],
    social: {
      linkedin: "https://linkedin.com/in/hellen-mathuka",
      twitter: "https://twitter.com/hellenmathuka",
    },
    sessionTitle: "Digital Transformation in African Aviation",
    sessionTime: "Day 1, 2:00 PM",
    achievements: [
      "Led digital transformation at Kenya Airways",
      "Implemented smart airport solutions",
      "Expert in aviation technology",
      "Women in Aviation Leadership Award 2023",
    ],
  },
  {
    id: "4",
    name: "Mr. Julius Thairu",
    title: "Chief Commercial & Customer Officer",
    company: "Kenya Airways",
    bio: "Mr. Julius Thairu is a seasoned commercial aviation executive with over 15 years of experience in airline marketing, sales, and customer service. He has played a key role in enhancing Kenya Airways brand presence and customer loyalty programs.",
    image: "/placeholder.svg?height=400&width=400",
    category: "panelist",
    country: "Kenya",
    expertise: ["Airline Marketing", "Customer Experience", "Brand Management", "Sales Strategy"],
    social: {
      linkedin: "https://linkedin.com/in/julius-thairu",
      twitter: "https://twitter.com/juliusthairu",
    },
    sessionTitle: "Enhancing Customer Experience in African Aviation",
    sessionTime: "Day 1, 3:30 PM",
    achievements: [
      "Increased KQ customer satisfaction by 25%",
      "Developed award-winning loyalty program",
      "Led rebranding initiative for KQ in 2022",
      "15+ years in commercial aviation",
    ],
  },
]

export const SPEAKER_CATEGORIES = [
  { id: "all", name: "All Speakers", count: SPEAKERS.length },
  {
    id: "keynote",
    name: "Keynote Speakers",
    count: SPEAKERS.filter((s) => s.category === "keynote").length,
  },
  {
    id: "panelist",
    name: "Panel Experts",
    count: SPEAKERS.filter((s) => s.category === "panelist").length,
  },
  {
    id: "moderator",
    name: "Moderators",
    count: SPEAKERS.filter((s) => s.category === "moderator").length,
  },
]
