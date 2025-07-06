"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Clock } from "lucide-react"
import { getPackageById } from "@/lib/constants/packages"

interface RealTimeAvailabilityProps {
  packageId: string
}

export function RealTimeAvailability({ packageId }: RealTimeAvailabilityProps) {
  const [availability, setAvailability] = useState<{
    available: number
    total: number
    status: "available" | "limited" | "full"
  } | null>(null)

  const pkg = getPackageById(packageId)

  useEffect(() => {
    // Simulate real-time availability updates
    if (pkg?.availableSlots !== undefined) {
      const available = pkg.availableSlots
      const total = pkg.totalSlots || available

      let status: "available" | "limited" | "full" = "available"
      if (available === 0) status = "full"
      else if (available <= total * 0.3) status = "limited"

      setAvailability({ available, total, status })
    }
  }, [pkg])

  if (!availability || !pkg?.totalSlots) return null

  const getStatusIcon = () => {
    switch (availability.status) {
      case "available":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "limited":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "full":
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusColor = () => {
    switch (availability.status) {
      case "available":
        return "bg-green-100 text-green-800 border-green-200"
      case "limited":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "full":
        return "bg-red-100 text-red-800 border-red-200"
    }
  }

  const getStatusText = () => {
    switch (availability.status) {
      case "available":
        return `${availability.available} spots available`
      case "limited":
        return `Only ${availability.available} spots left!`
      case "full":
        return "Fully booked - Join waitlist"
    }
  }

  return (
    <Badge className={`flex items-center gap-1 ${getStatusColor()}`}>
      {getStatusIcon()}
      <span className="text-xs">{getStatusText()}</span>
    </Badge>
  )
}
