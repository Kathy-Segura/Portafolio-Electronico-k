"use client"

import type React from "react"

import { motion } from "framer-motion"
import { User, Calendar, MapPin, GraduationCap } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-rainbow text-shadow-lg">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-rainbow mx-auto rounded-full"></div>
        </motion.div>

        {/* Main content container */}
        <div className="max-w-5xl mx-auto">
          <div className="neon-card-rainbow rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="h-1 bg-gradient-rainbow"></div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Profile Image - Left side on medium+ screens, top on mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="md:col-span-5 flex justify-center"
                >
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    {/* Animated glow background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-gradient-xy blur-xl opacity-50"></div>

                    {/* Profile image */}
                    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/20 z-10">
                      <img
                        src="/katy.jpg?height=400&width=400"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Decorative ring */}
                    <div className="absolute -inset-3 rounded-full border-2 border-dashed border-neon-cyan/30 animate-spin-slow"></div>
                  </div>
                </motion.div>

                {/* Content - Right side on medium+ screens, bottom on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="md:col-span-7"
                >
                  <div className="space-y-6">
                    {/* Bio text */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gradient-cyan-purple">
                        <span className="text-white">Hola, soy </span>Tu Nombre
                      </h3>
                      <p className="text-white/90 leading-relaxed">{t("about.description")}</p>
                    </div>

                    {/* Info cards in a grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <InfoCard
                        icon={<User className="text-neon-cyan" size={20} />}
                        label={t("about.card.name")}
                        value="Tu Nombre"
                        color="cyan"
                      />

                      <InfoCard
                        icon={<Calendar className="text-neon-purple" size={20} />}
                        label={t("about.card.graduation")}
                        value="2026"
                        color="purple"
                      />

                      <InfoCard
                        icon={<MapPin className="text-neon-pink" size={20} />}
                        label={t("about.card.location")}
                        value="Tu Ciudad"
                        color="pink"
                      />

                      <InfoCard
                        icon={<GraduationCap className="text-neon-blue" size={20} />}
                        label={t("about.card.english")}
                        value="Nivel A2"
                        color="blue"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Info Card Component
function InfoCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-black/40 backdrop-blur-sm border border-neon-${color}/30 rounded-lg p-3 flex items-center gap-3 group hover:bg-black/60 transition-all duration-300`}
    >
      <div
        className={`p-2 rounded-full bg-black/60 border border-neon-${color}/50 group-hover:border-neon-${color} transition-colors duration-300`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className={`font-medium text-neon-${color}`}>{value}</p>
      </div>
    </motion.div>
  )
}
