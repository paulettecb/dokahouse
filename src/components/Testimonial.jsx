import React from 'react'
import { motion } from 'framer-motion'
import '../styles/theme.css'

const testimonials = [
  {
    name: 'Lucía Herrera',
    role: 'Compradora feliz',
    text: '“Gracias a DokaBot encontré el depa ideal sin estrés. ¡Fue como hablar con una amiga experta en bienes raíces!”',
    emoji: "🤖"
  },
  {
    name: 'Carlos Ríos',
    role: 'Inversionista',
    text: '“El bot entendió justo lo que buscaba y me mostró propiedades realmente relevantes. Me ahorró horas de búsqueda.”',
    emoji: "💬"
  },
  {
    name: 'Fernanda Téllez',
    role: 'Primera vez rentando',
    text: '“Estaba perdida, pero con DokaBot sentí que alguien me acompañaba. Todo fue claro y humano.”',
    emoji: "🏡"
  },
  {
    quote: "¡DokaBot me ayudó a encontrar el depa perfecto en solo 3 días!",
    author: "María G.",
    location: "Guadalajara, Jal.",
    emoji: "🏡"
  },
  {
    quote: "Pensé que comprar casa era un proceso frío... hasta que conocí DokaHouse.",
    author: "Luis T.",
    location: "CDMX",
    emoji: "💬"
  },
  {
    quote: "La atención se sintió más humana que con cualquier asesor anterior.",
    author: "Fernanda R.",
    location: "Zapopan, Jal.",
    emoji: "🤖"
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>Lo que dicen nuestras usuarias y usuarios</h2>
        <p>Historias reales de quienes ya encontraron su hogar con DokaHouse.</p>
      </div>

      <div className="testimonials-carousel">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <span className="quote-icon">❝</span>
            <p className="testimonial-text">"{t.quote}"</p>
            <div className="testimonial-footer">
              <span className="testimonial-author">{t.emoji} {t.author}</span>
              <span className="testimonial-location">{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials