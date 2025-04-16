"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Building, BookOpen, GraduationCap, MapPin } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Education() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const educationItems = [
    {
      degree: t("education.degree1"),
      institution: t("UNAN-Managua"),
      period: t("2022 - 2026"),
      description: t("education.description1"),
      location: "Managua, Nicaragua",
      color: "neon-cyan",
      icon: <GraduationCap size={24} className="text-neon-cyan" />,
      courses: ["Programación Avanzada", "Bases de Datos", "Redes", "Seguridad Informática"],
    },
    {
      degree: t("education.degree2"),
      institution: t("Salomón Ibarra M"),
      period: t("2017 - 2021"),
      description: t("education.description2"),
      location: "Managua, Nicaragua",
      color: "neon-purple",
      icon: <BookOpen size={24} className="text-neon-purple" />,
      courses: ["Matemáticas", "Física", "Química", "Informática Básica"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute inset-0 neon-dots opacity-30"></div>

      {/* Floating education icons */}
      <motion.div
        className="absolute top-20 left-10 text-neon-cyan/20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <GraduationCap size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-neon-purple/20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <BookOpen size={80} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-rainbow text-shadow-lg">
            {t("education.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-rainbow mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="h-full">
                <div className={`h-full neon-card-${item.color} rounded-xl overflow-hidden backdrop-blur-sm`}>
                  {/* Header with icon and degree */}
                  <div className="p-6 border-b border-white/10 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-black/60 border border-white/10">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Institution and location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center text-white bg-black/40 rounded-lg p-3">
                        <Building size={16} className={`mr-2 text-${item.color}`} />
                        <span>{item.institution}</span>
                      </div>

                      <div className="flex items-center text-white bg-black/40 rounded-lg p-3">
                        <MapPin size={16} className={`mr-2 text-${item.color}`} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-black/30 rounded-lg p-4 border-l-2 border-white/10">
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>

                    {/* Courses */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <BookOpen size={16} className={`mr-2 text-${item.color}`} />
                        Cursos Principales
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.courses.map((course, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center bg-black/40 px-3 py-2 rounded-lg text-${item.color} text-sm hover:bg-${item.color}/10 transition-colors duration-300`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-${item.color} mr-2`}></div>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
