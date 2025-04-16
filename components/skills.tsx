"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Brain,
  Users,
  Lightbulb,
  MessageSquare,
  Clock,
  Target,
  Code,
  Database,
  Server,
  Globe,
  Shield,
  Cpu,
  Layers,
  GitBranch,
  Workflow,
  Zap,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const softSkills = [
    {
      name: "Trabajo en Equipo",
      icon: <Users className="text-neon-cyan" size={24} />,
      description: "Capacidad para colaborar efectivamente con otros para lograr objetivos comunes.",
      color: "from-neon-cyan/20 to-neon-cyan/5",
      glowColor: "glow-cyan",
    },
    {
      name: "Resolución de Problemas",
      icon: <Lightbulb className="text-neon-purple" size={24} />,
      description: "Habilidad para identificar problemas y encontrar soluciones efectivas.",
      color: "from-neon-purple/20 to-neon-purple/5",
      glowColor: "glow-purple",
    },
    {
      name: "Comunicación",
      icon: <MessageSquare className="text-neon-pink" size={24} />,
      description: "Capacidad para expresar ideas de manera clara y efectiva.",
      color: "from-neon-pink/20 to-neon-pink/5",
      glowColor: "glow-pink",
    },
    {
      name: "Gestión del Tiempo",
      icon: <Clock className="text-neon-blue" size={24} />,
      description: "Habilidad para organizar y priorizar tareas para cumplir con los plazos.",
      color: "from-neon-blue/20 to-neon-blue/5",
      glowColor: "glow-blue",
    },
    {
      name: "Adaptabilidad",
      icon: <Target className="text-neon-green" size={24} />,
      description: "Capacidad para ajustarse a nuevas situaciones y entornos cambiantes.",
      color: "from-neon-green/20 to-neon-green/5",
      glowColor: "glow-green",
    },
    {
      name: "Pensamiento Crítico",
      icon: <Brain className="text-neon-yellow" size={24} />,
      description: "Habilidad para analizar información y tomar decisiones fundamentadas.",
      color: "from-neon-yellow/20 to-neon-yellow/5",
      glowColor: "glow-cyan",
    },
  ]

  const technicalSkills = [
    {
      name: "Desarrollo Frontend",
      level: 75,
      icon: <Code className="text-neon-cyan" size={24} />,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      description: "Creación de interfaces de usuario interactivas y responsivas utilizando tecnologías web modernas.",
      color: "neon-cyan",
    },
    {
      name: "Desarrollo Backend",
      level: 65,
      icon: <Server className="text-neon-purple" size={24} />,
      technologies: ["Node.js", "Express", "Python", "Django"],
      description: "Implementación de lógica de servidor, APIs y servicios web para aplicaciones robustas.",
      color: "neon-purple",
    },
    {
      name: "Bases de Datos",
      level: 70,
      icon: <Database className="text-neon-pink" size={24} />,
      technologies: ["SQL", "MySQL", "MongoDB", "PostgreSQL"],
      description: "Diseño y gestión de bases de datos relacionales y no relacionales para almacenamiento eficiente.",
      color: "neon-pink",
    },
    /*{
      name: "Desarrollo Web",
      level: 80,
      icon: <Globe className="text-neon-blue" size={24} />,
      technologies: ["Responsive Design", "SEO", "Web Performance"],
      description: "Creación de sitios web optimizados para diferentes dispositivos y motores de búsqueda.",
      color: "neon-blue",
    },
    {
      name: "Seguridad Informática",
      level: 55,
      icon: <Shield className="text-neon-green" size={24} />,
      technologies: ["Autenticación", "Autorización", "Encriptación"],
      description: "Implementación de medidas de seguridad para proteger datos y sistemas contra amenazas.",
      color: "neon-green",
    },
    {
      name: "DevOps",
      level: 60,
      icon: <GitBranch className="text-neon-yellow" size={24} />,
      technologies: ["Git", "CI/CD", "Docker", "AWS"],
      description: "Automatización de procesos de desarrollo, pruebas y despliegue de aplicaciones.",
      color: "neon-cyan",
    },*/
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 cyber-grid"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-rainbow text-shadow-lg">
            {t("skills.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-rainbow mx-auto rounded-full"></div>
          <p className="mt-4 text-neon-cyan max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills - New Design */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-center text-neon-cyan text-shadow-cyan"
            >
              {t("skills.technical")}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="perspective">
                  <div className={`neon-card-${skill.color} p-6 rounded-xl`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-md bg-black border border-white/10">{skill.icon}</div>
                      <h4 className="font-bold text-lg text-white">{skill.name}</h4>
                    </div>

                    <p className="text-sm text-white mb-4">{skill.description}</p>

                    {/* Circular progress indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs bg-black/50 border border-${skill.color} text-${skill.color}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="relative w-16 h-16">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          {/* Background circle */}
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="8" />

                          {/* Progress circle */}
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={`var(--color-neon-${skill.color.replace("neon-", "")})`}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            initial={{ strokeDashoffset: 283 }}
                            animate={
                              isInView
                                ? {
                                    strokeDashoffset: 283 - (283 * skill.level) / 100,
                                  }
                                : {}
                            }
                            transition={{ duration: 1.5, delay: 0.2 }}
                            transform="rotate(-90 50 50)"
                          />

                          {/* Percentage text */}
                          <text x="50" y="55" fontSize="20" fill="white" textAnchor="middle" dominantBaseline="middle">
                            {skill.level}%
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-center text-neon-purple text-shadow-purple"
            >
              {t("skills.soft")}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="perspective"
                >
                  <div
                    className={`h-full neon-card border-${skill.color.split("/")[0]} ${skill.glowColor} rounded-xl overflow-hidden relative rotate-y`}
                  >
                    <div className="p-6 flex flex-col items-center text-center relative z-10">
                      <div className="mb-4 mt-2 p-3 rounded-full bg-black/50 border border-white/10">{skill.icon}</div>
                      <h4 className="font-bold mb-2 text-lg text-white">{skill.name}</h4>
                      <p className="text-sm text-white">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional skills visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="neon-card-rainbow rounded-xl glow-pulse">
                <div className="p-6">
                  <h4 className="font-bold mb-4 text-lg text-center text-white">{t("skills.other")}</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Workflow className="text-neon-pink" size={18} />
                      <span className="text-white">Metodologías Ágiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="text-neon-blue" size={18} />
                      <span className="text-white">Arquitectura de Software</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="text-neon-green" size={18} />
                      <span className="text-white">Aprendizaje Rápido</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Cpu className="text-neon-cyan" size={18} />
                      <span className="text-white">Sistemas Embebidos</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
