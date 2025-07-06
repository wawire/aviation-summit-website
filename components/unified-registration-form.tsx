"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormField } from "@/components/ui/form-field"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ProgressSteps } from "@/components/ui/progress-steps"
import { PACKAGE_CATEGORIES, getPackagesByType, getPackageById } from "@/lib/constants/packages"
import { EVENT_DETAILS } from "@/lib/constants/event"
import { COUNTRIES, INDUSTRIES, NETWORKING_INTERESTS, DIETARY_OPTIONS } from "@/lib/constants/registration"
import { PRODUCT_CATEGORIES, BOOTH_REQUIREMENTS } from "@/lib/constants/exhibition"
import { BANKING_DETAILS, EXCHANGE_RATE } from "@/lib/constants/payment"
import { useFormValidation } from "@/lib/hooks/useFormValidation"
import { useMultiStepForm } from "@/lib/hooks/useMultiStepForm"
import { Building, CreditCard, ExternalLink, MapPin, Minus, Plus, Sparkles, User, Users } from "lucide-react"
import { PackageComparison } from "@/components/ui/package-comparison"
import { ProgressSaver } from "@/components/ui/progress-saver"
import { CollapsibleSection } from "@/components/ui/collapsible-section"

interface UnifiedFormData {
  // Basic Information
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  company: string
  website: string
  industry: string
  country: string
  companyDescription: string

  // Package Selection
  selectedPackage: string
  packageType: "delegate" | "sponsor" | "exhibitor"

  // Delegate Specific
  additionalAttendees: Array<{
    firstName: string
    lastName: string
    email: string
    jobTitle: string
  }>
  additionalRegistrations: number

  // Sponsor/Exhibitor Specific
  productCategories: string[]
  boothRequirements: string[]
  setupRequirements: string
  electricalNeeds: string
  internetRequirements: string
  specialDisplays: string
  preferredContactMethod: string
  bestTimeToCall: string
  billingAddress: string
  taxId: string

  // Preferences
  networkingInterests: string[]
  dietaryRequirements: string[]
  specialRequests: string

  // Payment
  paymentMethod: string
  paymentReference: string

  // Consent
  agreeToTerms: boolean
  marketingConsent: boolean
}

const initialFormData: UnifiedFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  website: "",
  industry: "",
  country: "",
  companyDescription: "",
  selectedPackage: "",
  packageType: "delegate",
  additionalAttendees: [],
  additionalRegistrations: 0,
  productCategories: [],
  boothRequirements: [],
  setupRequirements: "",
  electricalNeeds: "",
  internetRequirements: "",
  specialDisplays: "",
  preferredContactMethod: "",
  bestTimeToCall: "",
  billingAddress: "",
  taxId: "",
  networkingInterests: [],
  dietaryRequirements: [],
  specialRequests: "",
  paymentMethod: "",
  paymentReference: "",
  agreeToTerms: false,
  marketingConsent: false,
}

const validationRules = {
  firstName: { required: true, minLength: 2 },
  lastName: { required: true, minLength: 2 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { required: true, minLength: 10 },
  jobTitle: { required: true },
  company: { required: true },
  industry: { required: true },
  country: { required: true },
  selectedPackage: { required: true },
  agreeToTerms: { required: true },
}

const UnifiedRegistrationForm = () => {
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useMultiStepForm(4)
  const {
    data: formData,
    errors,
    updateField,
    touchField,
    validateAll,
  } = useFormValidation(initialFormData, validationRules)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { number: 1, title: "Personal Info", icon: <User className="h-5 w-5" /> },
    { number: 2, title: "Package Selection", icon: <Sparkles className="h-5 w-5" /> },
    { number: 3, title: "Additional Details", icon: <Users className="h-5 w-5" /> },
    { number: 4, title: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  ]

  const selectedPackage = getPackageById(formData.selectedPackage)
  const isDelegate = selectedPackage?.type === "delegate"
  const isSponsor = selectedPackage?.type === "sponsor"
  const isExhibitor = selectedPackage?.type === "exhibitor"
  const isCorporateTeam = formData.selectedPackage === "corporate-team"

  const calculateTotalAmount = () => {
    if (!selectedPackage) return 0
    let total = selectedPackage.price
    if (isCorporateTeam) {
      total += formData.additionalRegistrations * 300
    }
    return total
  }

  const handleArrayChange = (field: keyof UnifiedFormData, value: string, checked: boolean) => {
    const currentArray = formData[field] as string[]
    const newArray = checked ? [...currentArray, value] : currentArray.filter((item) => item !== value)
    updateField(field, newArray)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateAll()) return

    setIsSubmitting(true)
    try {
      // Here you would submit to your API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const submissionData = {
        ...formData,
        totalAmount: calculateTotalAmount(),
        packageDetails: selectedPackage,
      }

      console.log("Registration submitted:", submissionData)
      alert("Registration submitted successfully! We will contact you within 24 hours.")
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error submitting your registration. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.jobTitle &&
          formData.company &&
          formData.industry &&
          formData.country
        )
      case 2:
        return formData.selectedPackage
      case 3:
        return true
      case 4:
        return formData.agreeToTerms && formData.paymentMethod && formData.paymentReference
      default:
        return false
    }
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Join Us</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Register for AAIS 2025</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Secure your place at Africa's premier aviation innovation summit. Whether you're attending as a delegate,
            partnering as a sponsor, or showcasing as an exhibitor - we have the perfect package for you.
          </p>

          {/* Venue Information */}
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Event Venue</h3>
            </div>
            <p className="font-medium text-primary mb-2">{EVENT_DETAILS.venue.name}</p>
            <p className="text-muted-foreground mb-3">{EVENT_DETAILS.venue.location}</p>
            <p className="text-sm text-muted-foreground mb-4">{EVENT_DETAILS.venue.description}</p>
            <Button asChild variant="outline" size="sm">
              <a
                href={EVENT_DETAILS.venue.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View Venue Website
              </a>
            </Button>
          </div>
        </div>

        {/* Progress Steps */}
        <ProgressSteps steps={steps} currentStep={currentStep} className="mb-12" />

        {/* Progress Saver */}
        <div className="flex justify-center mb-6">
          <ProgressSaver
            formData={formData}
            onRestore={(data) => {
              Object.keys(data).forEach((key) => {
                if (key !== "savedAt") {
                  updateField(key, data[key])
                }
              })
            }}
            storageKey="aais-registration-progress"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {steps[currentStep - 1].icon}
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your personal and professional information"}
                {currentStep === 2 && "Choose the package that best fits your needs"}
                {currentStep === 3 && "Provide additional details based on your selected package"}
                {currentStep === 4 && "Review your registration and complete payment"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.firstName}
                      required
                    />
                    <FormField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.lastName}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.email}
                      required
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.phone}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Job Title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.jobTitle}
                      required
                    />
                    <FormField
                      label="Company/Organization"
                      name="company"
                      value={formData.company}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.company}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Company Website"
                      name="website"
                      value={formData.website}
                      onChange={updateField}
                      placeholder="https://"
                    />
                    <FormField
                      label="Industry"
                      name="industry"
                      type="select"
                      value={formData.industry}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.industry}
                      placeholder="Select your industry"
                      options={INDUSTRIES.map((industry) => ({ value: industry, label: industry }))}
                      required
                    />
                  </div>

                  <FormField
                    label="Country"
                    name="country"
                    type="select"
                    value={formData.country}
                    onChange={updateField}
                    onBlur={touchField}
                    error={errors.country}
                    placeholder="Select your country"
                    options={COUNTRIES.map((country) => ({ value: country, label: country }))}
                    required
                  />
                </motion.div>
              )}

              {/* Step 2: Package Selection */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <Tabs defaultValue="delegate" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      {PACKAGE_CATEGORIES.map((category) => (
                        <TabsTrigger key={category.id} value={category.id}>
                          {category.name}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {PACKAGE_CATEGORIES.map((category) => (
                      <TabsContent key={category.id} value={category.id} className="space-y-4">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                          <p className="text-muted-foreground">{category.description}</p>
                        </div>

                        <RadioGroup
                          value={formData.selectedPackage}
                          onValueChange={(value) => {
                            updateField("selectedPackage", value)
                            const pkg = getPackageById(value)
                            if (pkg) {
                              updateField("packageType", pkg.type)
                            }
                          }}
                          className="space-y-4"
                        >
                          {getPackagesByType(category.id as any).map((pkg) => (
                            <div key={pkg.id} className="relative">
                              <div
                                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                                  formData.selectedPackage === pkg.id
                                    ? "border-primary bg-primary/5"
                                    : "border-muted hover:border-primary/50"
                                }`}
                              >
                                <div className="flex items-center space-x-3">
                                  <RadioGroupItem value={pkg.id} id={pkg.id} />
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="flex items-center gap-2">
                                        <Label htmlFor={pkg.id} className="text-lg font-semibold cursor-pointer">
                                          {pkg.name}
                                        </Label>
                                        {pkg.popular && <Badge className="bg-primary text-white">Most Popular</Badge>}
                                        {pkg.highlight && (
                                          <Badge className="bg-green-600 text-white">{pkg.highlight}</Badge>
                                        )}
                                      </div>
                                      <div className="text-right">
                                        {pkg.originalPrice && (
                                          <span className="text-sm text-muted-foreground line-through mr-2">
                                            ${pkg.originalPrice.toLocaleString()}
                                          </span>
                                        )}
                                        <span className="text-2xl font-bold text-primary">
                                          ${pkg.price.toLocaleString()}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="text-muted-foreground mb-3">{pkg.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                      {pkg.features.map((feature) => (
                                        <Badge key={feature} variant="outline" className="text-xs">
                                          {feature}
                                        </Badge>
                                      ))}
                                    </div>
                                    {pkg.deadline && (
                                      <p className="text-sm text-primary font-medium">Deadline: {pkg.deadline}</p>
                                    )}
                                    {pkg.note && (
                                      <p className="text-sm text-muted-foreground italic">Note: {pkg.note}</p>
                                    )}
                                    {pkg.availableSlots && (
                                      <p className="text-sm text-orange-600 font-medium">
                                        Only {pkg.availableSlots} slots remaining!
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>
                      </TabsContent>
                    ))}
                  </Tabs>

                  {/* Package Comparison Tool */}
                  <div className="mt-8 text-center">
                    <PackageComparison packageType={formData.packageType || "delegate"} />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Corporate Team Package Details */}
                  {isCorporateTeam && (
                    <CollapsibleSection title="Corporate Team Package Details" defaultOpen>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Corporate Team Package Details</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Your package includes 5 delegate registrations. You can add more at early bird rates.
                        </p>

                        <div className="flex items-center gap-4">
                          <Label>Additional Individual Registrations:</Label>
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateField(
                                  "additionalRegistrations",
                                  Math.max(0, formData.additionalRegistrations - 1),
                                )
                              }
                              disabled={formData.additionalRegistrations <= 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              min="0"
                              max="50"
                              value={formData.additionalRegistrations}
                              onChange={(e) =>
                                updateField(
                                  "additionalRegistrations",
                                  Math.max(0, Number.parseInt(e.target.value) || 0),
                                )
                              }
                              className="w-20 text-center"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                updateField("additionalRegistrations", formData.additionalRegistrations + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {formData.additionalRegistrations > 0 && (
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
                            <p className="text-sm">
                              <strong>Additional cost:</strong> {formData.additionalRegistrations} × $300 =
                              <span className="text-green-600 font-medium">
                                {" "}
                                ${formData.additionalRegistrations * 300}
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    </CollapsibleSection>
                  )}

                  {/* Sponsor/Exhibitor Specific Fields */}
                  {(isSponsor || isExhibitor) && (
                    <CollapsibleSection title="Company & Exhibition Details" defaultOpen>
                      <FormField
                        label="Company Description"
                        name="companyDescription"
                        type="textarea"
                        value={formData.companyDescription}
                        onChange={updateField}
                        placeholder="Briefly describe your company and what you'll be showcasing..."
                        required
                      />

                      {isExhibitor && (
                        <>
                          <div>
                            <Label className="text-base font-medium mb-4 block">Product Categories</Label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {PRODUCT_CATEGORIES.map((category) => (
                                <div key={category} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={category}
                                    checked={formData.productCategories.includes(category)}
                                    onCheckedChange={(checked) =>
                                      handleArrayChange("productCategories", category, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={category} className="text-sm">
                                    {category}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <Label className="text-base font-medium mb-4 block">Booth Requirements</Label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {BOOTH_REQUIREMENTS.map((requirement) => (
                                <div key={requirement} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={requirement}
                                    checked={formData.boothRequirements.includes(requirement)}
                                    onCheckedChange={(checked) =>
                                      handleArrayChange("boothRequirements", requirement, checked as boolean)
                                    }
                                  />
                                  <Label htmlFor={requirement} className="text-sm">
                                    {requirement}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </CollapsibleSection>
                  )}

                  {/* Common Fields */}
                  <CollapsibleSection title="Networking & Preferences">
                    <div>
                      <Label className="text-base font-medium mb-4 block">Networking Interests</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {NETWORKING_INTERESTS.map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={formData.networkingInterests.includes(interest)}
                              onCheckedChange={(checked) =>
                                handleArrayChange("networkingInterests", interest, checked as boolean)
                              }
                            />
                            <Label htmlFor={interest} className="text-sm">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-4 block">Dietary Requirements</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {DIETARY_OPTIONS.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                              id={option}
                              checked={formData.dietaryRequirements.includes(option)}
                              onCheckedChange={(checked) =>
                                handleArrayChange("dietaryRequirements", option, checked as boolean)
                              }
                            />
                            <Label htmlFor={option} className="text-sm">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="Special Requests">
                    <FormField
                      label="Special Requests or Additional Information"
                      name="specialRequests"
                      type="textarea"
                      value={formData.specialRequests}
                      onChange={updateField}
                      placeholder="Any special requirements, accessibility needs, or additional information..."
                    />
                  </CollapsibleSection>
                </motion.div>
              )}

              {/* Step 4: Payment & Review */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Registration Summary */}
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Registration Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Company:</span>
                        <span className="font-medium">{formData.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span className="font-medium">{selectedPackage?.name}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-primary">${calculateTotalAmount().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => updateField("paymentMethod", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="international" id="international" />
                        <Label htmlFor="international" className="flex items-center gap-2 cursor-pointer">
                          <Building className="h-5 w-5" />
                          International Bank Transfer (USD)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="local" id="local" />
                        <Label htmlFor="local" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-5 w-5" />
                          Local Payment (KES) / M-Pesa
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* Payment Details */}
                    {formData.paymentMethod && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 p-6 bg-muted/50 rounded-lg"
                      >
                        {formData.paymentMethod === "international" && (
                          <div>
                            <h4 className="font-semibold text-lg mb-4 text-primary">International Payment Details</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="font-medium">Bank Name:</span>
                                <span>{BANKING_DETAILS.international.bankName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Account Name:</span>
                                <span>{BANKING_DETAILS.international.accountName}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Account Number:</span>
                                <span className="font-mono">{BANKING_DETAILS.international.accountNumber}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">SWIFT Code:</span>
                                <span className="font-mono">{BANKING_DETAILS.international.swiftCode}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Amount:</span>
                                <span className="font-mono text-lg text-primary">
                                  ${calculateTotalAmount().toLocaleString()} USD
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {formData.paymentMethod === "local" && (
                          <div>
                            <h4 className="font-semibold text-lg mb-4 text-primary">Local Payment Details</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="font-medium">Paybill Number:</span>
                                <span className="font-mono text-lg">{BANKING_DETAILS.local.paybillNumber}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Account Number:</span>
                                <span className="font-mono text-lg">{BANKING_DETAILS.local.accountNumber}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Amount:</span>
                                <span className="font-mono text-lg text-primary">
                                  KES {(calculateTotalAmount() * EXCHANGE_RATE).toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="mt-6">
                          <FormField
                            label="Payment Reference/Transaction Code"
                            name="paymentReference"
                            value={formData.paymentReference}
                            onChange={updateField}
                            placeholder={
                              formData.paymentMethod === "international"
                                ? "Bank transfer reference"
                                : "M-Pesa transaction code"
                            }
                            required
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <FormField
                      label="I agree to the Terms and Conditions and Privacy Policy"
                      name="agreeToTerms"
                      type="checkbox"
                      value={formData.agreeToTerms}
                      onChange={updateField}
                      required
                    />
                    <FormField
                      label="I would like to receive updates about AAIS events and aviation industry news"
                      name="marketingConsent"
                      type="checkbox"
                      value={formData.marketingConsent}
                      onChange={updateField}
                    />
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button type="button" variant="outline" onClick={prevStep} disabled={isFirstStep}>
                  Previous
                </Button>
                {!isLastStep ? (
                  <Button type="button" onClick={nextStep} disabled={!canProceedToNextStep()}>
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!canProceedToNextStep() || isSubmitting}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Processing...
                      </>
                    ) : (
                      "Complete Registration"
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  )
}

export default UnifiedRegistrationForm
