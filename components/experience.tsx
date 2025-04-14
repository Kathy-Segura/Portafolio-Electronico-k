"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin, CodeIcon, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

export default function Experience() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      position: t("experience.position1"),
      company: t("experience.company1"),
      location: t("experience.location1"),
      period: t("experience.period1"),
      description: t("experience.description1"),
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "neon-cyan",
      responsibilities: [
        "Desarrollo de interfaces de usuario responsivas",
        "Integración con APIs RESTful",
        "Optimización de rendimiento web",
        "Pruebas y depuración de código",
      ],
    },
    {
      position: t("experience.position2"),
      company: t("experience.company2"),
      location: t("experience.location2"),
      period: t("experience.period2"),
      description: t("experience.description2"),
      skills: ["Java", "SQL", "Git"],
      color: "neon-purple",
      responsibilities: [
        "Diseño de base de datos relacional",
        "Desarrollo de lógica de negocio",
        "Implementación de sistema de autenticación",
        "Documentación técnica",
      ],
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
    <section id="experience" ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      {/* Floating experience icons */}
      <motion.div
        className="absolute top-20 right-10 text-neon-cyan/20 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Briefcase size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-neon-purple/20 hidden md:block"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <CodeIcon size={80} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-rainbow text-shadow-lg">
            {t("experience.title")}
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
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="h-full">
                <div className={`h-full neon-card-${exp.color} rounded-xl overflow-hidden backdrop-blur-sm`}>
                  {/* Header with position and company */}
                  <div className="relative">
                    {/* Background glow effect */}
                    <div className={`absolute inset-0 bg-${exp.color}/20 blur-md`}></div>

                    <div className="relative p-6 border-b border-white/10 flex items-center gap-4">
                      <div className="p-3 rounded-full bg-black/60 border border-white/10">
                        <Briefcase size={24} className={`text-${exp.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Company and location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center text-white bg-black/40 rounded-lg p-3">
                        <Briefcase size={16} className={`mr-2 text-${exp.color}`} />
                        <span>{exp.company}</span>
                      </div>

                      <div className="flex items-center text-white bg-black/40 rounded-lg p-3">
                        <MapPin size={16} className={`mr-2 text-${exp.color}`} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="bg-black/30 rounded-lg p-4 border-l-2 border-white/10">
                      <p className="text-white/80 text-sm">{exp.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <Zap size={16} className={`mr-2 text-${exp.color}`} />
                        Responsabilidades
                      </h4>

                      <div className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start bg-black/40 px-3 py-2 rounded-lg">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${exp.color} mr-2 mt-1.5`}></div>
                            <span className="text-white/80 text-sm">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <CodeIcon size={16} className={`mr-2 text-${exp.color}`} />
                        Tecnologías
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            className={`bg-black/60 text-${exp.color} border border-${exp.color}/30 hover:bg-${exp.color}/20 transition-colors duration-300`}
                          >
                            {skill}
                          </Badge>
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
