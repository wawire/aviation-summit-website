"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  name: string
  type?: "text" | "email" | "tel" | "password" | "textarea" | "select" | "checkbox"
  value: any
  onChange: (name: string, value: any) => void
  onBlur?: (name: string) => void
  error?: string
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  className?: string
  disabled?: boolean
}

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required,
  options,
  className,
  disabled,
}: FormFieldProps) {
  const handleChange = (newValue: any) => {
    onChange(name, newValue)
  }

  const handleBlur = () => {
    onBlur?.(name)
  }

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <Textarea
            id={name}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(error && "border-red-500")}
          />
        )

      case "select":
        return (
          <Select value={value || ""} onValueChange={handleChange} disabled={disabled}>
            <SelectTrigger className={cn(error && "border-red-500")}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )

      case "checkbox":
        return (
          <div className="flex items-center space-x-2">
            <Checkbox id={name} checked={value || false} onCheckedChange={handleChange} disabled={disabled} />
            <Label htmlFor={name} className="text-sm font-normal">
              {label}
            </Label>
          </div>
        )

      default:
        return (
          <Input
            id={name}
            type={type}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(error && "border-red-500")}
          />
        )
    }
  }

  if (type === "checkbox") {
    return (
      <div className={className}>
        {renderInput()}
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    )
  }

  return (
    <div className={className}>
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <div className="mt-1">{renderInput()}</div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  )
}
