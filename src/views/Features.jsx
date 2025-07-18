import React from 'react'
import '../styles/theme.css'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '🧠',
    title: 'Asistencia inteligente',
    text: 'DokaBot te ayuda a encontrar propiedades según tus necesidades reales, sin complicaciones.',
  },
  {
    icon: '🏘️',
    title: 'Catálogo actualizado',
    text: 'Consulta inmuebles disponibles en tiempo real gracias a la conexión con EasyBroker.',
  },
  {
    icon: '📍',
    title: 'Búsqueda por zona',
    text: 'Explora colonias específicas, cercanas a tus puntos de interés o en zonas emergentes.',
  },
]

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¿Por qué usar DokaBot?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Nuestro asistente conversacional combina IA y experiencia inmobiliaria para ofrecerte un servicio más humano, rápido y útil.
        </motion.p>
      </div>

      <div className="features-list">
        {features.map((f, i) => (
          <motion.div
            className="feature-card"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
          >
            <span className="feature-icon">{f.icon}</span>
            <div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features