"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { FormField } from "@/components/ui/form-field"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ProgressSteps } from "@/components/ui/progress-steps"
import {
  REGISTRATION_TYPES,
  COUNTRIES,
  INDUSTRIES,
  NETWORKING_INTERESTS,
  DIETARY_OPTIONS,
} from "@/lib/constants/registration"
import { BANKING_DETAILS, EXCHANGE_RATE } from "@/lib/constants/payment"
import { useFormValidation } from "@/lib/hooks/useFormValidation"
import { useMultiStepForm } from "@/lib/hooks/useMultiStepForm"
import type { RegistrationFormData, AdditionalAttendee } from "@/lib/types/forms"
import { motion } from "framer-motion"
import { Building, Calendar, CreditCard, Minus, Plus, User, Users } from "lucide-react"
import { useState } from "react"

const initialFormData: RegistrationFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  industry: "",
  country: "",
  registrationType: "",
  additionalAttendees: [],
  additionalIndividualRegistrations: 0,
  needsAccommodation: false,
  accommodationType: "",
  checkIn: "",
  checkOut: "",
  dietaryRequirements: [],
  specialRequests: "",
  networkingInterests: [],
  paymentMethod: "",
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
  registrationType: { required: true },
  agreeToTerms: { required: true },
}

const RegistrationForm = () => {
  const { currentStep, nextStep, prevStep, isFirstStep, isLastStep } = useMultiStepForm(4)
  const {
    data: formData,
    errors,
    updateField,
    touchField,
    validateAll,
  } = useFormValidation(initialFormData, validationRules)
  const [showPaymentDetails, setShowPaymentDetails] = useState(false)
  const [paymentProof, setPaymentProof] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { number: 1, title: "Personal Info", icon: <User className="h-5 w-5" /> },
    { number: 2, title: "Registration", icon: <Calendar className="h-5 w-5" /> },
    { number: 3, title: "Preferences", icon: <Users className="h-5 w-5" /> },
    { number: 4, title: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  ]

  const handleArrayChange = (field: keyof RegistrationFormData, value: string, checked: boolean) => {
    const currentArray = formData[field] as string[]
    const newArray = checked ? [...currentArray, value] : currentArray.filter((item) => item !== value)
    updateField(field, newArray)
  }

  const handleAdditionalAttendeeChange = (index: number, field: keyof AdditionalAttendee, value: string) => {
    const newAttendees = formData.additionalAttendees.map((attendee, i) =>
      i === index ? { ...attendee, [field]: value } : attendee,
    )
    updateField("additionalAttendees", newAttendees)
  }

  const addAdditionalAttendee = () => {
    const newAttendee: AdditionalAttendee = { firstName: "", lastName: "", email: "", jobTitle: "" }
    updateField("additionalAttendees", [...formData.additionalAttendees, newAttendee])
  }

  const removeAdditionalAttendee = (index: number) => {
    const newAttendees = formData.additionalAttendees.filter((_, i) => i !== index)
    updateField("additionalAttendees", newAttendees)
  }

  const getSelectedRegistrationType = () => {
    return REGISTRATION_TYPES.find((type) => type.id === formData.registrationType)
  }

  const calculateTotalAmount = () => {
    const baseType = getSelectedRegistrationType()
    if (!baseType) return 0

    if (baseType.id === "corporate") {
      const additionalCost = formData.additionalIndividualRegistrations * 300
      return baseType.price + additionalCost
    }
    return baseType.price
  }

  const isCorporatePackage = () => {
    return formData.registrationType === "corporate"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateAll()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const submissionData = {
        ...formData,
        paymentProof: paymentProof,
        totalAmount: calculateTotalAmount(),
      }

      console.log("Registration data:", submissionData)
      alert("Registration submitted successfully! We will verify your payment and send confirmation within 24 hours.")
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
        return formData.registrationType
      case 3:
        return true // No required fields in preferences
      case 4:
        return formData.agreeToTerms && formData.paymentMethod && paymentProof
      default:
        return false
    }
  }

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Join Us</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Register for AAIS 2025</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Secure your place at Africa's premier aviation innovation summit. Connect with industry leaders, explore
            investment opportunities, and shape the future of African aviation.
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps steps={steps} currentStep={currentStep} className="mb-12" />

        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {steps[currentStep - 1].icon}
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your personal and professional information"}
                {currentStep === 2 && "Choose your registration type and accommodation preferences"}
                {currentStep === 3 && "Tell us about your networking interests and dietary requirements"}
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
                  </div>
                </motion.div>
              )}

              {/* Step 2: Registration Type */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Choose Registration Type *</Label>
                    <RadioGroup
                      value={formData.registrationType}
                      onValueChange={(value) => {
                        updateField("registrationType", value)
                        if (value !== "corporate") {
                          updateField("additionalAttendees", [])
                          updateField("additionalIndividualRegistrations", 0)
                        }
                      }}
                      className="space-y-4"
                    >
                      {REGISTRATION_TYPES.map((type) => (
                        <div key={type.id} className="relative">
                          <div
                            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                              formData.registrationType === type.id
                                ? "border-primary bg-primary/5"
                                : "border-muted hover:border-primary/50"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value={type.id} id={type.id} />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <Label htmlFor={type.id} className="text-lg font-semibold cursor-pointer">
                                      {type.name}
                                    </Label>
                                    {type.popular && <Badge className="bg-primary text-white">Most Popular</Badge>}
                                    {type.teamPackage && <Badge className="bg-blue-600 text-white">Team Package</Badge>}
                                  </div>
                                  <div className="text-right">
                                    {type.originalPrice && (
                                      <span className="text-sm text-muted-foreground line-through mr-2">
                                        ${type.originalPrice}
                                      </span>
                                    )}
                                    <span className="text-2xl font-bold text-primary">${type.price}</span>
                                    {type.teamPackage && (
                                      <span className="text-sm text-muted-foreground block">
                                        for {type.includedAttendees} people
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <p className="text-muted-foreground mb-3">{type.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {type.features.map((feature) => (
                                    <Badge key={feature} variant="outline" className="text-xs">
                                      {feature}
                                    </Badge>
                                  ))}
                                </div>
                                {type.deadline && (
                                  <p className="text-sm text-primary font-medium">
                                    Early bird deadline: {type.deadline}
                                  </p>
                                )}
                                {type.note && <p className="text-sm text-muted-foreground italic">Note: {type.note}</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Corporate Package Additional Details */}
                  {isCorporatePackage() && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <Separator />
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Corporate Package Details
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Your corporate package includes 5 delegate registrations. Please provide details for the
                          additional 4 attendees below. You can also add more individual registrations at early bird
                          rates.
                        </p>

                        {/* Additional Attendees */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label className="text-base font-medium">
                              Additional Team Members (included in package)
                            </Label>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={addAdditionalAttendee}
                              disabled={formData.additionalAttendees.length >= 4}
                              className="flex items-center gap-2"
                            >
                              <Plus className="h-4 w-4" />
                              Add Member
                            </Button>
                          </div>

                          {formData.additionalAttendees.map((attendee, index) => (
                            <div key={index} className="border rounded-lg p-4 space-y-3">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">Team Member {index + 2}</h4>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeAdditionalAttendee(index)}
                                  className="flex items-center gap-2 text-red-600 hover:text-red-700"
                                >
                                  <Minus className="h-4 w-4" />
                                  Remove
                                </Button>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <FormField
                                  label="First Name"
                                  name={`attendee-${index}-firstName`}
                                  value={attendee.firstName}
                                  onChange={(_, value) => handleAdditionalAttendeeChange(index, "firstName", value)}
                                  required
                                />
                                <FormField
                                  label="Last Name"
                                  name={`attendee-${index}-lastName`}
                                  value={attendee.lastName}
                                  onChange={(_, value) => handleAdditionalAttendeeChange(index, "lastName", value)}
                                  required
                                />
                                <FormField
                                  label="Email"
                                  name={`attendee-${index}-email`}
                                  type="email"
                                  value={attendee.email}
                                  onChange={(_, value) => handleAdditionalAttendeeChange(index, "email", value)}
                                  required
                                />
                                <FormField
                                  label="Job Title"
                                  name={`attendee-${index}-jobTitle`}
                                  value={attendee.jobTitle}
                                  onChange={(_, value) => handleAdditionalAttendeeChange(index, "jobTitle", value)}
                                  required
                                />
                              </div>
                            </div>
                          ))}

                          {formData.additionalAttendees.length < 4 && (
                            <p className="text-sm text-muted-foreground">
                              You can add up to {4 - formData.additionalAttendees.length} more team members to your
                              corporate package.
                            </p>
                          )}
                        </div>

                        {/* Additional Individual Registrations */}
                        <Separator className="my-6" />
                        <div className="space-y-4">
                          <Label className="text-base font-medium">Additional Individual Registrations</Label>
                          <p className="text-sm text-muted-foreground">
                            Need more than 5 attendees? Add individual registrations at early bird rates ($300 each).
                          </p>
                          <div className="flex items-center gap-4">
                            <Label htmlFor="additionalRegistrations">Number of additional registrations:</Label>
                            <div className="flex items-center gap-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  updateField(
                                    "additionalIndividualRegistrations",
                                    Math.max(0, formData.additionalIndividualRegistrations - 1),
                                  )
                                }
                                disabled={formData.additionalIndividualRegistrations <= 0}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <Input
                                id="additionalRegistrations"
                                type="number"
                                min="0"
                                max="50"
                                value={formData.additionalIndividualRegistrations}
                                onChange={(e) =>
                                  updateField(
                                    "additionalIndividualRegistrations",
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
                                  updateField(
                                    "additionalIndividualRegistrations",
                                    formData.additionalIndividualRegistrations + 1,
                                  )
                                }
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          {formData.additionalIndividualRegistrations > 0 && (
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                              <p className="text-sm">
                                <strong>Additional cost:</strong> {formData.additionalIndividualRegistrations} × $300 =
                                <span className="text-green-600 font-medium">
                                  {" "}
                                  ${formData.additionalIndividualRegistrations * 300}
                                </span>
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Registration details for additional attendees can be provided after payment
                                confirmation.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <Separator />

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Accommodation</Label>
                    <div className="space-y-4">
                      <FormField
                        label="I need accommodation assistance"
                        name="needsAccommodation"
                        type="checkbox"
                        value={formData.needsAccommodation}
                        onChange={updateField}
                      />
                      {formData.needsAccommodation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pl-6"
                        >
                          <p className="text-sm text-muted-foreground">
                            Our team will contact you with accommodation options and pricing.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Networking Interests</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select areas you're interested in to help us connect you with relevant attendees
                    </p>
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

                  <Separator />

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Dietary Requirements</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
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

                  <FormField
                    label="Special Requests, reasonable accommodation requests or Additional Information"
                    name="specialRequests"
                    type="textarea"
                    value={formData.specialRequests}
                    onChange={updateField}
                    placeholder="Please let us know if you have any special requirements, accessibility needs, or other requests..."
                  />
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
                        <span>Registration Type:</span>
                        <span className="font-medium">{getSelectedRegistrationType()?.name}</span>
                      </div>
                      {isCorporatePackage() && (
                        <>
                          <div className="flex justify-between">
                            <span>Included Attendees:</span>
                            <span className="font-medium">{1 + formData.additionalAttendees.length} of 5</span>
                          </div>
                          {formData.additionalIndividualRegistrations > 0 && (
                            <div className="flex justify-between">
                              <span>Additional Individual Registrations:</span>
                              <span className="font-medium">{formData.additionalIndividualRegistrations}</span>
                            </div>
                          )}
                        </>
                      )}
                      <Separator />
                      {isCorporatePackage() ? (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Corporate Package (5 people):</span>
                            <span>${getSelectedRegistrationType()?.price}</span>
                          </div>
                          {formData.additionalIndividualRegistrations > 0 && (
                            <div className="flex justify-between">
                              <span>Additional Registrations ({formData.additionalIndividualRegistrations}):</span>
                              <span>${formData.additionalIndividualRegistrations * 300}</span>
                            </div>
                          )}
                          <div className="flex justify-between text-lg font-bold border-t pt-2">
                            <span>Total Amount:</span>
                            <span className="text-primary">${calculateTotalAmount()}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Amount:</span>
                          <span className="text-primary">${getSelectedRegistrationType()?.price}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Payment Method</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => {
                        updateField("paymentMethod", value)
                        setShowPaymentDetails(true)
                      }}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="international" id="international" />
                        <Label htmlFor="international" className="flex items-center gap-2 cursor-pointer">
                          <Building className="h-5 w-5" />
                          International Payments (USD)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="local" id="local" />
                        <Label htmlFor="local" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-5 w-5" />
                          Local Payments (KES) / M-Pesa
                        </Label>
                      </div>
                    </RadioGroup>

                    {/* Payment Details Display */}
                    {showPaymentDetails && formData.paymentMethod && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 p-6 bg-muted/50 rounded-lg"
                      >
                        {formData.paymentMethod === "international" && (
                          <div>
                            <h4 className="font-semibold text-lg mb-4 text-primary">
                              International Payment Details (USD)
                            </h4>
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
                                <span className="font-medium">USD Account Number:</span>
                                <span className="font-mono">{BANKING_DETAILS.international.accountNumber}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">SWIFT Code:</span>
                                <span className="font-mono">{BANKING_DETAILS.international.swiftCode}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Branch Code:</span>
                                <span className="font-mono">{BANKING_DETAILS.international.branchCode}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Amount:</span>
                                <span className="font-mono text-lg text-primary">${calculateTotalAmount()} USD</span>
                              </div>
                            </div>
                            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <h5 className="font-medium mb-2">Transfer Instructions:</h5>
                              <p className="text-sm">{BANKING_DETAILS.international.instructions}</p>
                            </div>
                          </div>
                        )}

                        {formData.paymentMethod === "local" && (
                          <div>
                            <h4 className="font-semibold text-lg mb-4 text-primary">Local Payment Details (KES)</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="font-medium">Bank Name:</span>
                                <span>{BANKING_DETAILS.local.bankName}</span>
                              </div>
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
                                  KES {(calculateTotalAmount() * EXCHANGE_RATE).toLocaleString()} (≈ $
                                  {calculateTotalAmount()} USD)
                                </span>
                              </div>
                            </div>
                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <h5 className="font-medium mb-2">M-Pesa Payment Instructions:</h5>
                              <pre className="text-sm whitespace-pre-wrap">{BANKING_DETAILS.local.instructions}</pre>
                            </div>
                          </div>
                        )}

                        {/* Transaction Code Input */}
                        <div className="mt-6">
                          <Label htmlFor="paymentProof" className="text-base font-medium">
                            Transaction Code / Reference Number *
                          </Label>
                          <Input
                            id="paymentProof"
                            placeholder={
                              formData.paymentMethod === "international"
                                ? "Enter bank transfer reference number"
                                : "Enter M-Pesa transaction code (e.g., QGH7X8Y9Z)"
                            }
                            value={paymentProof}
                            onChange={(e) => setPaymentProof(e.target.value)}
                            className="mt-2"
                            required
                          />
                          <p className="text-sm text-muted-foreground mt-2">
                            {formData.paymentMethod === "international"
                              ? "Enter the reference number provided by your bank for the international transfer"
                              : "Enter the transaction code you received via SMS after making the M-Pesa payment"}
                          </p>
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
                      label="I would like to receive updates about future AAIS events and aviation industry news"
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

export default RegistrationForm
