"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/context/language-context"

export default function Contact() {
  const { toast } = useToast()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Show success toast
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé lo antes posible.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="text-neon-cyan" size={24} />,
      title: "Email",
      value: "tu.email@ejemplo.com",
      color: "neon-cyan",
      link: "mailto:tu.email@ejemplo.com",
    },
    {
      icon: <Phone className="text-neon-purple" size={24} />,
      title: "Teléfono",
      value: "+XX XXX XXX XXX",
      color: "neon-purple",
      link: "tel:+XXXXXXXXXXXX",
    },
    {
      icon: <MapPin className="text-neon-pink" size={24} />,
      title: "Ubicación",
      value: "Ciudad, País",
      color: "neon-pink",
      link: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "#",
      color: "from-zinc-700 to-zinc-900",
      borderColor: "border-neon-cyan",
      glowColor: "shadow-[0_0_10px_rgba(0,255,255,0.3)]",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      url: "#",
      color: "from-blue-700 to-blue-900",
      borderColor: "border-neon-purple",
      glowColor: "shadow-[0_0_10px_rgba(208,0,255,0.3)]",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "#",
      color: "from-sky-500 to-sky-700",
      borderColor: "border-neon-pink",
      glowColor: "shadow-[0_0_10px_rgba(255,0,255,0.3)]",
      label: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      url: "#",
      color: "from-pink-600 to-purple-700",
      borderColor: "border-neon-blue",
      glowColor: "shadow-[0_0_10px_rgba(0,191,255,0.3)]",
      label: "Instagram",
    },
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
    <section id="contact" ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(0,255,255,0.2),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(208,0,255,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-gradient-rainbow text-shadow-lg">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-rainbow mx-auto rounded-full"></div>
          <p className="mt-4 text-neon-cyan max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-cyan text-shadow-cyan">{t("contact.getintouch")}</h3>
            <p className="text-white mb-8">{t("contact.getintouch.description")}</p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4 mb-8"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="block"
                >
                  <div className={`neon-card-${info.color} rounded-xl hover:bg-black/60 transition-all duration-300`}>
                    <CardContent className="p-4 flex items-center">
                      <div className="mr-4 p-3 rounded-full bg-black/50 border border-white/10">{info.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-400">{info.title}</p>
                        <p className="font-medium text-white">{info.value}</p>
                      </div>
                      <ExternalLink size={16} className="text-gray-400" />
                    </CardContent>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <h4 className="text-xl font-semibold mb-4 text-neon-purple text-shadow-purple">{t("contact.social")}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg bg-gradient-to-br ${link.color} border ${link.borderColor} ${link.glowColor} flex flex-col items-center justify-center text-white transition-all duration-300 hover:scale-105`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="mb-2">{link.icon}</div>
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="neon-card-rainbow rounded-xl glow-pulse">
              <div className="h-1.5 bg-gradient-rainbow"></div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple text-shadow-purple">
                  {t("contact.form.title")}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-neon-cyan mb-1">
                        {t("contact.form.name")}
                      </label>
                      <div className="relative">
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          placeholder={t("contact.form.name.placeholder")}
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-black/60 border-neon-cyan/30 focus:border-neon-cyan transition-all duration-300 pl-10 text-white"
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-neon-cyan">01</span>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-neon-purple mb-1">
                        {t("contact.form.email")}
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder={t("contact.form.email.placeholder")}
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-black/60 border-neon-purple/30 focus:border-neon-purple transition-all duration-300 pl-10 text-white"
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-neon-purple">02</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-neon-pink mb-1">
                      {t("contact.form.subject")}
                    </label>
                    <div className="relative">
                      <Input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder={t("contact.form.subject.placeholder")}
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-black/60 border-neon-pink/30 focus:border-neon-pink transition-all duration-300 pl-10 text-white"
                        required
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neon-pink">03</span>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-neon-blue mb-1">
                      {t("contact.form.message")}
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("contact.form.message.placeholder")}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-black/60 border-neon-blue/30 focus:border-neon-blue transition-all duration-300 min-h-[150px] pl-10 pt-8 text-white"
                        required
                      />
                      <div className="absolute top-2 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neon-blue">04</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-rainbow hover:opacity-90 transition-all duration-300 text-black font-bold relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 via-white/0 to-white/0 animate-shimmer"></span>
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        {t("contact.form.sending")}
                      </div>
                    ) : (
                      <>
                        <Send size={16} />
                        <span className="relative z-10">{t("contact.form.submit")}</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
