"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={() => setLanguage(language === "es" ? "en" : "es")}
        variant="outline"
        size="sm"
        className="bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 transition-all duration-300 group"
      >
        <Globe size={16} className="mr-2 text-purple-400 group-hover:text-purple-300" />
        {language === "es" ? "English" : "Español"}
      </Button>
    </div>
  )
}
