export interface AdditionalAttendee {
  firstName: string
  lastName: string
  email: string
  jobTitle: string
}

export interface RegistrationFormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  industry: string
  country: string

  // Registration Type
  registrationType: string

  // Corporate Package Additional Attendees
  additionalAttendees: AdditionalAttendee[]
  additionalIndividualRegistrations: number

  // Accommodation
  needsAccommodation: boolean
  accommodationType: string
  checkIn: string
  checkOut: string

  // Dietary Requirements
  dietaryRequirements: string[]
  specialRequests: string

  // Networking Preferences
  networkingInterests: string[]

  // Payment Information
  paymentMethod: string

  // Terms and Conditions
  agreeToTerms: boolean
  marketingConsent: boolean
}

export interface ExhibitorFormData {
  // Company Information
  companyName: string
  contactPerson: string
  email: string
  phone: string
  website: string
  industry: string
  country: string
  companyDescription: string

  // Exhibition Details
  exhibitionPackage: string
  boothRequirements: string[]
  productCategories: string[]

  // Setup Requirements
  setupRequirements: string
  electricalNeeds: string
  internetRequirements: string

  // Marketing Materials
  companyLogo: string
  brochureDescription: string
  specialDisplays: string

  // Contact Preferences
  preferredContactMethod: string
  bestTimeToCall: string

  // Payment Information
  paymentMethod: string
  billingAddress: string
  taxId: string
  mpesaTransactionCode: string
  bankTransactionCode: string

  // Terms and Conditions
  agreeToTerms: boolean
  marketingConsent: boolean
}
