"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Code, Database, Server, Braces, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { useLanguage } from "@/context/language-context"

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate mouse position as percentage of screen
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={containerRef} className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black z-10"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>

        {/* Animated gradient circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-neon-cyan/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-neon-purple/10 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/3 w-[30vw] h-[30vw] rounded-full bg-neon-pink/10 blur-[100px]"
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
        />
      </div>

      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-10 -left-10 opacity-10 text-neon-cyan" style={{ y }}>
          <Code size={200} strokeWidth={1} className="animate-float-slow" />
        </motion.div>
        <motion.div className="absolute -bottom-10 -right-10 opacity-10 text-neon-purple" style={{ y }}>
          <Database size={200} strokeWidth={1} className="animate-float" />
        </motion.div>
        <motion.div className="absolute top-1/4 right-10 opacity-10 text-neon-pink" style={{ y }}>
          <Terminal size={150} strokeWidth={1} className="animate-float-fast" />
        </motion.div>
        <motion.div className="absolute bottom-1/4 left-10 opacity-10 text-neon-blue" style={{ y }}>
          <Braces size={150} strokeWidth={1} className="animate-float" />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div className="container mx-auto px-4 z-10 relative" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          {/* Logo/Avatar */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative perspective">
              <div className="absolute inset-0 rounded-full bg-gradient-rainbow opacity-70 blur-md animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center rotate-y">
                <Server size={64} className="text-neon-cyan" />
              </div>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
              <span className="block text-white">{t("hero.greeting")}</span>
              <span className="block mt-2 text-gradient-rainbow text-shadow-lg">Katherine Segura S</span>
            </h1>
          </motion.div>

          {/* Animated typing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-16 flex items-center justify-center mb-6"
          >
            <div className="text-xl md:text-2xl font-medium">
              <span className="text-white">Soy </span>
              <TypeAnimation
                sequence={[
                  "Estudiante de Ingeniería",
                  2000,
                  "Desarrollador Web",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-neon-cyan text-shadow-cyan"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-cyan-purple hover:opacity-90 transition-all duration-300 text-black font-bold relative overflow-hidden group"
              onClick={() => scrollToSection("about")}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 via-white/0 to-white/0 animate-shimmer"></span>
              <span className="relative z-10">{t("hero.cta.about")}</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              {t("hero.cta.projects")}
            </Button>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            className="mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
         
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="text-neon-cyan border border-neon-cyan/20 rounded-full p-2 bg-black/60 backdrop-blur-sm hover:bg-black/80 hover:text-neon-cyan/80 transition-all duration-300"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown size={24} />
        </Button>
      </motion.div>
    </section>
  )
}
