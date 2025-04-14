"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Code, Server, Database, Braces, FileCode, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export default function Projects() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      demoLink: "#",
      color: "neon-cyan",
      features: ["Gestión de inventario", "Sistema de ventas", "Reportes en tiempo real", "Panel de administración"],
      category: "Web App",
      year: "2023",
    },
    {
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Firebase"],
      githubLink: "#",
      demoLink: "#",
      color: "neon-purple",
      features: ["Seguimiento de actividades", "Rutinas personalizadas", "Estadísticas de progreso", "Modo offline"],
      category: "Mobile App",
      year: "2023",
    },
    {
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      githubLink: "#",
      demoLink: "#",
      color: "neon-pink",
      features: ["Biblioteca de recursos", "Foro de discusión", "Sistema de búsqueda", "Área de miembros"],
      category: "Website",
      year: "2022",
    },
  ]

  // Floating code icons for background
  const codeIcons = [
    { icon: <Code size={40} className="text-neon-cyan/10" />, x: "10%", y: "20%", animation: "float-slow" },
    { icon: <Server size={50} className="text-neon-purple/10" />, x: "80%", y: "15%", animation: "float" },
    { icon: <Database size={35} className="text-neon-pink/10" />, x: "20%", y: "85%", animation: "float-fast" },
    { icon: <Braces size={60} className="text-neon-blue/10" />, x: "85%", y: "75%", animation: "float-slow" },
    { icon: <FileCode size={45} className="text-neon-green/10" />, x: "50%", y: "10%", animation: "float" },
    { icon: <Globe size={55} className="text-neon-cyan/10" />, x: "15%", y: "50%", animation: "float-fast" },
    { icon: <Code size={40} className="text-neon-purple/10" />, x: "70%", y: "40%", animation: "float" },
    { icon: <Server size={35} className="text-neon-pink/10" />, x: "40%", y: "90%", animation: "float-slow" },
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
    <section id="projects" ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      {/* Floating code icons */}
      {codeIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.animation}`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: ["0%", "20%", "0%"],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 10 + index,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-rainbow text-shadow-lg">
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-rainbow mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.03 }} className="h-full perspective">
              <div className={`h-full neon-card-${project.color} rounded-xl overflow-hidden rotate-y`}>
                <div className="relative overflow-hidden aspect-video">
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={`bg-black/70 text-${project.color} border-${project.color}/50 backdrop-blur-sm`}>
                      {project.category}
                    </Badge>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-black/70 text-white border-white/20 backdrop-blur-sm">{project.year}</Badge>
                  </div>

                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-white">Características:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${project.color} mt-1.5 mr-2`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className={`bg-black/50 text-${project.color} border-${project.color}/50`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex items-center gap-1 border-${project.color} text-${project.color} hover:bg-${project.color}/10`}
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>{t("projects.cta.code")}</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex items-center gap-1 border-${project.color} text-${project.color} hover:bg-${project.color}/10`}
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        <span>{t("projects.cta.demo")}</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
