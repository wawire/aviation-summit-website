"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, X, ContrastIcon as Compare } from "lucide-react"
import { getPackagesByType } from "@/lib/constants/packages"

interface PackageComparisonProps {
  packageType: "delegate" | "sponsor" | "exhibitor"
}

export function PackageComparison({ packageType }: PackageComparisonProps) {
  const [selectedPackages, setSelectedPackages] = useState<string[]>([])
  const packages = getPackagesByType(packageType)

  const handlePackageToggle = (packageId: string) => {
    setSelectedPackages((prev) =>
      prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId].slice(0, 3),
    )
  }

  const comparePackages = packages.filter((pkg) => selectedPackages.includes(pkg.id))

  // Get all unique features across selected packages
  const allFeatures = Array.from(new Set(comparePackages.flatMap((pkg) => pkg.features)))

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Compare className="h-4 w-4" />
          Compare Packages
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Compare {packageType.charAt(0).toUpperCase() + packageType.slice(1)} Packages</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Package Selection */}
          <div>
            <h4 className="font-medium mb-3">Select packages to compare (up to 3):</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {packages.map((pkg) => (
                <div key={pkg.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`compare-${pkg.id}`}
                    checked={selectedPackages.includes(pkg.id)}
                    onCheckedChange={() => handlePackageToggle(pkg.id)}
                    disabled={!selectedPackages.includes(pkg.id) && selectedPackages.length >= 3}
                  />
                  <label htmlFor={`compare-${pkg.id}`} className="text-sm cursor-pointer">
                    {pkg.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {comparePackages.length > 0 && (
            <ScrollArea className="h-[60vh]">
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: `200px repeat(${comparePackages.length}, 1fr)` }}
              >
                {/* Header Row */}
                <div className="font-medium">Package</div>
                {comparePackages.map((pkg) => (
                  <Card key={pkg.id} className="text-center">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{pkg.name}</CardTitle>
                      <div className="text-2xl font-bold text-primary">${pkg.price.toLocaleString()}</div>
                      {pkg.popular && <Badge className="bg-primary text-white">Most Popular</Badge>}
                    </CardHeader>
                  </Card>
                ))}

                {/* Price Row */}
                <div className="font-medium">Price</div>
                {comparePackages.map((pkg) => (
                  <div key={`price-${pkg.id}`} className="text-center p-4 border rounded">
                    <div className="text-xl font-bold text-primary">${pkg.price.toLocaleString()}</div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${pkg.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                ))}

                {/* Features Rows */}
                {allFeatures.map((feature) => (
                  <>
                    <div key={`feature-${feature}`} className="font-medium text-sm py-2">
                      {feature}
                    </div>
                    {comparePackages.map((pkg) => (
                      <div key={`${pkg.id}-${feature}`} className="text-center p-2 border rounded">
                        {pkg.features.includes(feature) ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </div>
                    ))}
                  </>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
