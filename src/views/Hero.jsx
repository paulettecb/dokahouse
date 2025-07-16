import React, { useEffect, useState } from 'react'
import '../styles/theme.css'
import logoLight from '../assets/logo.png'
import logoDark from '../assets/logo_dark.png'

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
      <img
        src={isDark ? logoDark : logoLight}
        alt="DokaHouse Logo"
        className="hero-logo"
      />
      <h1 className="hero-title">Explora tu nuevo hogar con ayuda inteligente</h1>
      <p className="hero-subtitle">
        Descubre propiedades personalizadas con DokaBot, tu asistente inmobiliario conversacional.
      </p>
      <button className="primary hero-button">
        💬 Habla con DokaBot
      </button>
    </section>
  )
}

export default Hero