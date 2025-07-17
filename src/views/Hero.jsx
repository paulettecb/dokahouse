import React, { useEffect, useState } from 'react'
import '../styles/theme.css'
import logoLight from '../assets/logo.png'
import logoDark from '../assets/logo_dark.png'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark'))
    })
    observer.observe(document.body, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero-section">
        <motion.img
            src={isDark ? logoDark : logoLight}
            alt="DokaHouse Logo"
            className="hero-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        />
       <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        >
            Explora tu nuevo hogar con ayuda inteligente
        </motion.h1>
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Descubre propiedades personalizadas con DokaBot, tu asistente inmobiliario conversacional.
      </motion.p>
      <motion.button
        className="primary hero-button"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        💬 Habla con DokaBot
      </motion.button>
    </section>
  )
}

export default Hero