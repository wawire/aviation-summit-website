"use client"

import { useState, useCallback } from "react"

interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
}

interface ValidationRules {
  [key: string]: ValidationRule
}

interface ValidationErrors {
  [key: string]: string
}

export function useFormValidation<T extends Record<string, any>>(initialData: T, rules: ValidationRules) {
  const [data, setData] = useState<T>(initialData)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = useCallback(
    (name: string, value: any): string | null => {
      const rule = rules[name]
      if (!rule) return null

      if (rule.required && (!value || (typeof value === "string" && value.trim() === ""))) {
        return `${name} is required`
      }

      if (rule.minLength && typeof value === "string" && value.length < rule.minLength) {
        return `${name} must be at least ${rule.minLength} characters`
      }

      if (rule.maxLength && typeof value === "string" && value.length > rule.maxLength) {
        return `${name} must be no more than ${rule.maxLength} characters`
      }

      if (rule.pattern && typeof value === "string" && !rule.pattern.test(value)) {
        return `${name} format is invalid`
      }

      if (rule.custom) {
        return rule.custom(value)
      }

      return null
    },
    [rules],
  )

  const validateAll = useCallback((): boolean => {
    const newErrors: ValidationErrors = {}
    let isValid = true

    Object.keys(rules).forEach((name) => {
      const error = validateField(name, data[name])
      if (error) {
        newErrors[name] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [data, rules, validateField])

  const updateField = useCallback(
    (name: string, value: any) => {
      setData((prev) => ({ ...prev, [name]: value }))

      // Validate field if it has been touched
      if (touched[name]) {
        const error = validateField(name, value)
        setErrors((prev) => ({
          ...prev,
          [name]: error || "",
        }))
      }
    },
    [touched, validateField],
  )

  const touchField = useCallback(
    (name: string) => {
      setTouched((prev) => ({ ...prev, [name]: true }))

      // Validate the field when touched
      const error = validateField(name, data[name])
      setErrors((prev) => ({
        ...prev,
        [name]: error || "",
      }))
    },
    [data, validateField],
  )

  const resetForm = useCallback(() => {
    setData(initialData)
    setErrors({})
    setTouched({})
  }, [initialData])

  return {
    data,
    errors,
    touched,
    updateField,
    touchField,
    validateAll,
    resetForm,
    isValid: Object.keys(errors).length === 0,
  }
}
