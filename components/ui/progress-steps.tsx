import type React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  number: number
  title: string
  icon?: React.ReactNode
}

interface ProgressStepsProps {
  steps: Step[]
  currentStep: number
  className?: string
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors",
                currentStep >= step.number ? "bg-primary border-primary text-white" : "border-gray-400 text-gray-400",
              )}
            >
              {currentStep > step.number ? <Check className="h-5 w-5" /> : step.icon || step.number}
            </div>
            <div className="ml-2 hidden sm:block">
              <p className={cn("text-sm font-medium", currentStep >= step.number ? "text-primary" : "text-gray-400")}>
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-16 h-0.5 mx-4 transition-colors",
                  currentStep > step.number ? "bg-primary" : "bg-gray-300",
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
