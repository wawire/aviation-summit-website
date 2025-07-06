"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { QrCode, Download, Share2 } from "lucide-react"

interface QRCodeGeneratorProps {
  registrationId: string
  participantName: string
}

export function QRCodeGenerator({ registrationId, participantName }: QRCodeGeneratorProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")

  const generateQRCode = async () => {
    // In a real implementation, you'd generate a QR code
    // For now, we'll simulate it
    const qrData = {
      registrationId,
      participantName,
      event: "AAIS 2025",
      venue: "Diani Reef Beach Resort & Spa",
    }

    // Simulate QR code generation
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(JSON.stringify(qrData))}`
    setQrCodeUrl(qrUrl)
  }

  const downloadQRCode = () => {
    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = `AAIS-2025-${registrationId}.png`
    link.click()
  }

  const shareQRCode = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "AAIS 2025 Registration",
          text: `${participantName}'s registration for Africa Aviation Innovation Summit 2025`,
          url: qrCodeUrl,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" onClick={generateQRCode}>
          <QrCode className="h-4 w-4 mr-2" />
          Generate QR Code
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Registration QR Code</DialogTitle>
        </DialogHeader>
        <div className="text-center space-y-4">
          {qrCodeUrl && (
            <>
              <img src={qrCodeUrl || "/placeholder.svg"} alt="Registration QR Code" className="mx-auto" />
              <p className="text-sm text-muted-foreground">Use this QR code for quick check-in at the event</p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" onClick={downloadQRCode}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm" onClick={shareQRCode}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
