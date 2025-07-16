import React, { useState, useEffect } from 'react'
import Home from './views/Home'
import Hero from './views/Hero'
import Features from './views/Features'
import ChatbotWidget from './components/ChatbotWidget'
import './styles/theme.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : ''
  }, [darkMode])

  return (
    <>
      <button
        onClick={() => setDarkMode(prev => !prev)}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          background: darkMode ? 'var(--color-light)' : 'var(--color-dark)',
          color: darkMode ? 'var(--color-dark)' : 'var(--color-light)',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          'font-size': '3rem',
          zIndex: 1000
        }}
      >
        {darkMode ? '☀️' : '🌙 '}
      </button>

      <Hero />
      <Features />
      <ChatbotWidget />
    </>
  )
}

export default App