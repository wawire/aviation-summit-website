"use client"

import { useEffect } from "react"

/**
 * Persist arbitrary JSON-serialisable data in localStorage on the client.
 *
 * It is **SSR-safe** – during server rendering nothing is executed.
 */
export interface ProgressSaverProps {
  /** localStorage key to write/read */
  storageKey: string
  /** Data you want to persist */
  data: unknown
}

export function ProgressSaver({ storageKey, data }: ProgressSaverProps) {
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(data))
    } catch {
      // silent failure (quota exceeded, private mode, etc.)
    }
  }, [storageKey, data])

  return null
}

/* convenience default export for any legacy imports */
export default ProgressSaver
