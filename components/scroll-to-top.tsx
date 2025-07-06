"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scroll = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return visible ? (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        aria-label="Scroll to top"
        size="icon"
        variant="outline"
        onClick={scroll}
        className="h-12 w-12 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-white transition-colors"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  ) : null
}
