import React from 'react'
import Hero from './views/Hero'
import Features from './views/Features'
import ChatbotWidget from './components/ChatbotWidget'
import ThemeToggle from './components/ThemeToggle'
import Testimonials from './components/Testimonial'

import './styles/theme.css'

function App() {

  return (
    <>
      <Hero />
      <Features />
      <ChatbotWidget />
      <Testimonials />
      <ThemeToggle />
    </>
  )
}

export default App