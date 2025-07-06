"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Building, CreditCard, Sparkles, User } from "lucide-react"
import { useState } from "react"
import { FormField } from "@/components/ui/form-field"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { ProgressSteps } from "@/components/ui/progress-steps"
import { EXHIBITION_PACKAGES, INDUSTRIES, PRODUCT_CATEGORIES, BOOTH_REQUIREMENTS } from "@/lib/constants/exhibition"
import { BANKING_DETAILS, EXCHANGE_RATE } from "@/lib/constants/payment"
import { useFormValidation } from "@/lib/hooks/useFormValidation"
import { useMultiStepForm } from "@/lib/hooks/useMultiStepForm"
import type { ExhibitorFormData } from "@/lib/types/forms"

const initialFormData: ExhibitorFormData = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  country: "",
  companyDescription: "",
  exhibitionPackage: "",
  boothRequirements: [],
  productCategories: [],
  setupRequirements: "",
  electricalNeeds: "",
  internetRequirements: "",
  companyLogo: "",
  brochureDescription: "",
  specialDisplays: "",
  preferredContactMethod: "",
  bestTimeToCall: "",
  paymentMethod: "",
  billingAddress: "",
  taxId: "",
  mpesaTransactionCode: "",
  bankTransactionCode: "",
  agreeToTerms: false,
  marketingConsent: false,
}

const validationRules = {
  companyName: { required: true, minLength: 2 },
  contactPerson: { required: true, minLength: 2 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { required: true, minLength: 10 },
  industry: { required: true },
  country: { required: true },
  companyDescription: { required: true, minLength: 50 },
  exhibitionPackage: { required: true },
  agreeToTerms: { required: true },
}

const ExhibitorRegistrationForm = () => {
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
    { number: 1, title: "Company Info", icon: <Building className="h-5 w-5" /> },
    { number: 2, title: "Exhibition", icon: <Sparkles className="h-5 w-5" /> },
    { number: 3, title: "Setup", icon: <User className="h-5 w-5" /> },
    { number: 4, title: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  ]

  const handleArrayChange = (field: keyof ExhibitorFormData, value: string, checked: boolean) => {
    const currentArray = formData[field] as string[]
    const newArray = checked ? [...currentArray, value] : currentArray.filter((item) => item !== value)
    updateField(field, newArray)
  }

  const getSelectedPackage = () => {
    return EXHIBITION_PACKAGES.find((pkg) => pkg.id === formData.exhibitionPackage)
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

      console.log("Exhibitor registration data:", formData)
      alert("Exhibition application submitted successfully! Our team will contact you within 24 hours.")
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.companyName &&
          formData.contactPerson &&
          formData.email &&
          formData.phone &&
          formData.industry &&
          formData.country &&
          formData.companyDescription
        )
      case 2:
        return formData.exhibitionPackage
      case 3:
        return true // No required fields in setup
      case 4:
        return (
          formData.agreeToTerms &&
          formData.paymentMethod &&
          ((formData.paymentMethod === "local" && formData.mpesaTransactionCode) ||
            (formData.paymentMethod === "international" && formData.bankTransactionCode))
        )
      default:
        return false
    }
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-2 block">Exhibition Opportunity</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Become an Exhibitor</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcase your products and services to Africa's aviation industry leaders. Connect directly with potential
            customers and partners at AAIS 2025.
          </p>
        </div>

        {/* Progress Steps */}
        <ProgressSteps steps={steps} currentStep={currentStep} className="mb-12" />

        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="border-b p-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {steps[currentStep - 1].icon}
                Step {currentStep}: {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray-600 mt-2">
                {currentStep === 1 && "Tell us about your company and what you'll be showcasing"}
                {currentStep === 2 && "Select your exhibition package and specify your product categories"}
                {currentStep === 3 && "Detail your booth setup requirements and technical needs"}
                {currentStep === 4 && "Review your exhibition package and complete the application"}
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.companyName}
                      required
                    />
                    <FormField
                      label="Primary Contact Person"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={updateField}
                      onBlur={touchField}
                      error={errors.contactPerson}
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
                      label="Company Website"
                      name="website"
                      type="text"
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
                    value={formData.country}
                    onChange={updateField}
                    onBlur={touchField}
                    error={errors.country}
                    required
                  />

                  <FormField
                    label="Company Description"
                    name="companyDescription"
                    type="textarea"
                    value={formData.companyDescription}
                    onChange={updateField}
                    onBlur={touchField}
                    error={errors.companyDescription}
                    placeholder="Briefly describe your company and the products/services you'll be showcasing..."
                    required
                  />
                </motion.div>
              )}

              {/* Step 2: Exhibition Package */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Select Exhibition Package *</h3>
                    <div className="space-y-4">
                      {EXHIBITION_PACKAGES.map((pkg) => (
                        <div key={pkg.id} className="relative">
                          <div
                            className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                              formData.exhibitionPackage === pkg.id
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-primary/30"
                            }`}
                            onClick={() => updateField("exhibitionPackage", pkg.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <input
                                type="radio"
                                id={pkg.id}
                                name="exhibitionPackage"
                                value={pkg.id}
                                checked={formData.exhibitionPackage === pkg.id}
                                onChange={(e) => updateField("exhibitionPackage", e.target.value)}
                                className="text-primary"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <label htmlFor={pkg.id} className="text-lg font-semibold cursor-pointer">
                                      {pkg.name}
                                    </label>
                                    {pkg.popular && (
                                      <span className="bg-primary text-white px-2 py-1 text-xs rounded">
                                        Most Popular
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-right">
                                    <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                                  </div>
                                </div>
                                <p className="text-gray-600 mb-3">{pkg.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                  {pkg.features.map((feature) => (
                                    <span
                                      key={feature}
                                      className="bg-gray-100 text-gray-800 px-2 py-1 text-xs rounded border"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                                <p className="text-sm text-gray-500">
                                  {pkg.slotsRemaining} of {pkg.slots} slots available
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="my-6" />

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Select the categories that best describe your products/services
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`category-${category}`}
                            checked={formData.productCategories.includes(category)}
                            onChange={(e) => handleArrayChange("productCategories", category, e.target.checked)}
                            className="text-primary"
                          />
                          <label htmlFor={`category-${category}`} className="text-sm">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Setup Requirements */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Booth Requirements</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {BOOTH_REQUIREMENTS.map((requirement) => (
                        <div key={requirement} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`booth-${requirement}`}
                            checked={formData.boothRequirements.includes(requirement)}
                            onChange={(e) => handleArrayChange("boothRequirements", requirement, e.target.checked)}
                            className="text-primary"
                          />
                          <label htmlFor={`booth-${requirement}`} className="text-sm">
                            {requirement}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Electrical Requirements"
                      name="electricalNeeds"
                      type="select"
                      value={formData.electricalNeeds}
                      onChange={updateField}
                      placeholder="Select electrical needs"
                      options={[
                        { value: "standard", label: "Standard (included in package)" },
                        { value: "additional", label: "Additional Power Outlets" },
                        { value: "high-power", label: "High Power Equipment" },
                        { value: "custom", label: "Custom Requirements" },
                      ]}
                    />
                    <FormField
                      label="Internet Requirements"
                      name="internetRequirements"
                      type="select"
                      value={formData.internetRequirements}
                      onChange={updateField}
                      placeholder="Select internet needs"
                      options={[
                        { value: "wifi", label: "Standard WiFi" },
                        { value: "dedicated", label: "Dedicated Connection" },
                        { value: "high-speed", label: "High-Speed Internet" },
                        { value: "none", label: "No Internet Required" },
                      ]}
                    />
                  </div>

                  <FormField
                    label="Special Setup Requirements"
                    name="setupRequirements"
                    type="textarea"
                    value={formData.setupRequirements}
                    onChange={updateField}
                    placeholder="Describe any special setup requirements, equipment needs, or booth customizations..."
                  />

                  <FormField
                    label="Special Displays or Demonstrations"
                    name="specialDisplays"
                    type="textarea"
                    value={formData.specialDisplays}
                    onChange={updateField}
                    placeholder="Will you have any special displays, product demonstrations, or interactive elements?"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      label="Preferred Contact Method"
                      name="preferredContactMethod"
                      type="select"
                      value={formData.preferredContactMethod}
                      onChange={updateField}
                      placeholder="Select contact method"
                      options={[
                        { value: "email", label: "Email" },
                        { value: "phone", label: "Phone" },
                        { value: "video", label: "Video Call" },
                        { value: "meeting", label: "In-Person Meeting" },
                      ]}
                    />
                    <FormField
                      label="Best Time to Contact"
                      name="bestTimeToCall"
                      type="select"
                      value={formData.bestTimeToCall}
                      onChange={updateField}
                      placeholder="Select best time"
                      options={[
                        { value: "morning", label: "Morning (9AM - 12PM)" },
                        { value: "afternoon", label: "Afternoon (12PM - 5PM)" },
                        { value: "evening", label: "Evening (5PM - 8PM)" },
                        { value: "anytime", label: "Anytime" },
                      ]}
                    />
                  </div>
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
                  {/* Exhibition Summary */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Exhibition Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Company:</span>
                        <span className="font-medium">{formData.companyName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact:</span>
                        <span className="font-medium">{formData.contactPerson}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Exhibition Package:</span>
                        <span className="font-medium">{getSelectedPackage()?.name}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Amount:</span>
                        <span className="text-primary">${getSelectedPackage()?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <input
                          type="radio"
                          id="international"
                          name="paymentMethod"
                          value="international"
                          checked={formData.paymentMethod === "international"}
                          onChange={(e) => updateField("paymentMethod", e.target.value)}
                          className="text-primary"
                        />
                        <label htmlFor="international" className="flex items-center gap-2 cursor-pointer">
                          <Building className="h-5 w-5" />
                          International Payments (USD)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <input
                          type="radio"
                          id="local"
                          name="paymentMethod"
                          value="local"
                          checked={formData.paymentMethod === "local"}
                          onChange={(e) => updateField("paymentMethod", e.target.value)}
                          className="text-primary"
                        />
                        <label htmlFor="local" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-5 w-5" />
                          Local Payments (KES) / M-Pesa
                        </label>
                      </div>
                    </div>

                    {/* Payment Details Display */}
                    {formData.paymentMethod === "international" && (
                      <div className="mt-6 p-4 border rounded-lg">
                        <h4 className="font-semibold text-lg mb-4 text-primary">International Payment Details (USD)</h4>
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
                            <span className="font-mono text-lg text-primary">${getSelectedPackage()?.price} USD</span>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                          <h5 className="font-medium mb-2">Transfer Instructions:</h5>
                          <p className="text-sm">{BANKING_DETAILS.international.instructions}</p>
                        </div>
                        <div className="mt-6">
                          <FormField
                            label="Bank Transfer Reference Number"
                            name="bankTransactionCode"
                            value={formData.bankTransactionCode}
                            onChange={updateField}
                            placeholder="Enter bank transfer reference number"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === "local" && (
                      <div className="mt-6 p-4 border rounded-lg">
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
                              KES {((getSelectedPackage()?.price || 0) * EXCHANGE_RATE).toLocaleString()} (≈ $
                              {getSelectedPackage()?.price} USD)
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-green-50 rounded-lg">
                          <h5 className="font-medium mb-2">M-Pesa Payment Instructions:</h5>
                          <pre className="text-sm whitespace-pre-wrap">{BANKING_DETAILS.local.instructions}</pre>
                        </div>
                        <div className="mt-6">
                          <FormField
                            label="M-Pesa Transaction Code"
                            name="mpesaTransactionCode"
                            value={formData.mpesaTransactionCode}
                            onChange={updateField}
                            placeholder="Enter M-Pesa transaction code (e.g., QGH7X8Y9Z)"
                            required
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <FormField
                    label="Billing Address"
                    name="billingAddress"
                    type="textarea"
                    value={formData.billingAddress}
                    onChange={updateField}
                    placeholder="Enter your complete billing address..."
                  />

                  <FormField
                    label="Tax ID / VAT Number (if applicable)"
                    name="taxId"
                    value={formData.taxId}
                    onChange={updateField}
                  />

                  <hr />

                  <div className="space-y-4">
                    <FormField
                      label="I agree to the Exhibition Terms and Conditions and Privacy Policy"
                      name="agreeToTerms"
                      type="checkbox"
                      value={formData.agreeToTerms}
                      onChange={updateField}
                      required
                    />
                    <FormField
                      label="I would like to receive updates about AAIS events and exhibition opportunities"
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
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={isFirstStep}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {!isLastStep ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceedToNextStep()}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canProceedToNextStep() || isSubmitting}
                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" />
                        Processing...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ExhibitorRegistrationForm
