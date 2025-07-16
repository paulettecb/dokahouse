import React from 'react'
import '../styles/theme.css'

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
        <h2>¿Por qué usar DokaBot?</h2>
        <p>
          Nuestro asistente conversacional combina IA y experiencia inmobiliaria para ofrecerte
          un servicio más humano, rápido y útil.
        </p>
      </div>

      <div className="features-list">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features