import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingIcons from "@/components/floating-icons"
import LanguageSwitcher from "@/components/language-switcher"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FloatingIcons />
      <LanguageSwitcher />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
