"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Hash,
  Server,
  Terminal,
  Braces,
  Cpu,
  Layers,
  Workflow,
} from "lucide-react"
import type { JSX } from "react"

interface FloatingIcon {
  icon: JSX.Element
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  color: string
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // Generate random icons
    const newIcons: FloatingIcon[] = []
    const iconComponents = [
      <Code key="code" />,
      <Database key="database" />,
      <FileCode key="filecode" />,
      <GitBranch key="gitbranch" />,
      <Globe key="globe" />,
      <Hash key="hash" />,
      <Server key="server" />,
      <Terminal key="terminal" />,
      <Braces key="braces" />,
      <Cpu key="cpu" />,
      <Layers key="layers" />,
      <Workflow key="workflow" />,
    ]

    const colors = [
      "text-neon-cyan/20",
      "text-neon-purple/20",
      "text-neon-pink/20",
      "text-neon-blue/20",
      "text-neon-green/20",
    ]

    for (let i = 0; i < 20; i++) {
      const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      newIcons.push({
        icon: randomIcon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10, // 10-30px
        duration: Math.random() * 20 + 10, // 10-30s
        delay: Math.random() * -20, // Random delay for more natural movement
        opacity: Math.random() * 0.05 + 0.02, // 0.02-0.07
        color: randomColor,
      })
    }

    setIcons(newIcons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.color}`}
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            opacity: icon.opacity,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: icon.delay,
            ease: "easeInOut",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  )
}
