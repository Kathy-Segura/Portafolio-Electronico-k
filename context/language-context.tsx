"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Hero section
    "hero.greeting": "Hello, I'm",
    "hero.role": "Information Systems Engineering Student",
    "hero.cta.about": "Learn more about me",
    "hero.cta.projects": "View projects",
    "hero.tag.webdev": "#WebDevelopment",
    "hero.tag.programming": "#Programming",
    "hero.tag.systems": "#Systems",
    "hero.tag.software": "#SoftwareEngineering",
    "hero.tag.tech": "#EmergingTech",

    // About section
    "about.title": "About Me",
    "about.description":
      "I'm a passionate Information Systems Engineering student with a strong interest in software development and solving technological problems. I love learning new technologies and applying them in innovative projects.",
    "about.card.name": "Name",
    "about.card.graduation": "Graduation",
    "about.card.location": "Location",
    "about.card.english": "English",

    // Education section
    "education.title": "Education",
    "education.degree1": "Information Systems Engineering",
    "education.institution1": "Your University",
    "education.period1": "2022 - 2026 (Expected)",
    "education.description1":
      "Comprehensive training in software development, databases, networks, computer security, and technology project management.",
    "education.degree2": "High School",
    "education.institution2": "Your High School",
    "education.period2": "2018 - 2022",
    "education.description2": "General education with emphasis on mathematics and sciences.",

    // Skills section
    "skills.title": "Skills",
    "skills.subtitle":
      "A combination of technical and soft skills that allow me to develop effective solutions and work in teams.",
    "skills.technical": "Technical Skills",
    "skills.soft": "Soft Skills",
    "skills.other": "Other Skills",
    "skills.beginner": "Beginner",
    "skills.advanced": "Advanced",

    // Experience section
    "experience.title": "Experience",
    "experience.position1": "Development Intern",
    "experience.company1": "Tech Company",
    "experience.location1": "City, Country",
    "experience.period1": "Summer 2024",
    "experience.description1":
      "Participation in web application development using modern technologies. Collaboration in agile teams and learning software development methodologies.",
    "experience.position2": "Academic Project",
    "experience.company2": "University",
    "experience.location2": "City, Country",
    "experience.period2": "2023",
    "experience.description2":
      "Development of a management system for the university as part of an academic project. Implementation of key functionalities and teamwork.",

    // Projects section
    "projects.title": "Projects",
    "projects.project1.title": "Management System",
    "projects.project1.description": "Web application for inventory and sales management of a local store.",
    "projects.project2.title": "Mobile Application",
    "projects.project2.description": "Mobile app for tracking physical activities and exercise routines.",
    "projects.project3.title": "Educational Website",
    "projects.project3.description": "Educational platform to share resources and study materials.",
    "projects.cta.code": "Code",
    "projects.cta.demo": "Demo",

    // Contact section
    "contact.title": "Contact",
    "contact.subtitle":
      "Do you have any questions or proposals? Don't hesitate to contact me. I'll be happy to hear your ideas.",
    "contact.getintouch": "Get in touch",
    "contact.getintouch.description":
      "I'm available for freelance projects, job opportunities, or just to chat about technology and software development. Feel free to contact me through any of the following means.",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "Message subject",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Write your message here...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.social": "Social Networks",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  es: {
    // Hero section
    "hero.greeting": "Hola, soy",
    "hero.role": "Estudiante de Ingeniería en Sistemas de Información",
    "hero.cta.about": "Conoce más sobre mí",
    "hero.cta.projects": "Ver proyectos",
    "hero.tag.webdev": "#DesarrolloWeb",
    "hero.tag.programming": "#Programación",
    "hero.tag.systems": "#Sistemas",
    "hero.tag.software": "#IngenieríaDeSoftware",
    "hero.tag.tech": "#TecnologíasEmergentes",

    // About section
    "about.title": "Sobre Mí",
    "about.description":
      "Soy un estudiante apasionado de Ingeniería en Sistemas de Información con un fuerte interés en el desarrollo de software y la resolución de problemas tecnológicos. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos innovadores.",
    "about.card.name": "Nombre",
    "about.card.graduation": "Graduación",
    "about.card.location": "Ubicación",
    "about.card.english": "Inglés",

    // Education section
    "education.title": "Formación Académica",
    "education.degree1": "Ingeniería en Sistemas de Información",
    "education.institution1": "Tu Universidad",
    "education.period1": "2022 - 2026 (Esperado)",
    "education.description1":
      "Formación integral en desarrollo de software, bases de datos, redes, seguridad informática y gestión de proyectos tecnológicos.",
    "education.degree2": "Bachillerato",
    "education.institution2": "Tu Escuela Secundaria",
    "education.period2": "2018 - 2022",
    "education.description2": "Formación general con énfasis en matemáticas y ciencias.",

    // Skills section
    "skills.title": "Habilidades",
    "skills.subtitle":
      "Combinación de habilidades técnicas y blandas que me permiten desarrollar soluciones efectivas y trabajar en equipo.",
    "skills.technical": "Habilidades Técnicas",
    "skills.soft": "Habilidades Blandas",
    "skills.other": "Otras Habilidades",
    "skills.beginner": "Principiante",
    "skills.advanced": "Avanzado",

    // Experience section
    "experience.title": "Experiencia",
    "experience.position1": "Pasante de Desarrollo",
    "experience.company1": "Empresa Tecnológica",
    "experience.location1": "Ciudad, País",
    "experience.period1": "Verano 2024",
    "experience.description1":
      "Participación en el desarrollo de aplicaciones web utilizando tecnologías modernas. Colaboración en equipos ágiles y aprendizaje de metodologías de desarrollo de software.",
    "experience.position2": "Proyecto Académico",
    "experience.company2": "Universidad",
    "experience.location2": "Ciudad, País",
    "experience.period2": "2023",
    "experience.description2":
      "Desarrollo de un sistema de gestión para la universidad como parte de un proyecto académico. Implementación de funcionalidades clave y trabajo en equipo.",

    // Projects section
    "projects.title": "Proyectos",
    "projects.project1.title": "Sistema de Gestión",
    "projects.project1.description": "Aplicación web para la gestión de inventarios y ventas de una tienda local.",
    "projects.project2.title": "Aplicación Móvil",
    "projects.project2.description": "App móvil para el seguimiento de actividades físicas y rutinas de ejercicio.",
    "projects.project3.title": "Sitio Web Educativo",
    "projects.project3.description": "Plataforma educativa para compartir recursos y materiales de estudio.",
    "projects.cta.code": "Código",
    "projects.cta.demo": "Demo",

    // Contact section
    "contact.title": "Contacto",
    "contact.subtitle":
      "¿Tienes alguna pregunta o propuesta? No dudes en contactarme. Estaré encantado de escuchar tus ideas.",
    "contact.getintouch": "Ponte en contacto",
    "contact.getintouch.description":
      "Estoy disponible para proyectos freelance, oportunidades laborales o simplemente para conversar sobre tecnología y desarrollo de software. No dudes en contactarme a través de cualquiera de los siguientes medios.",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "Asunto del mensaje",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Escribe tu mensaje aquí...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.social": "Redes Sociales",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
