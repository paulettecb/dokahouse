import React from 'react'
import PropertyList from '../components/PropertyList'

const Home = () => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bienvenido a Doka House 🏠</h1>
      <p>Explora propiedades con ayuda de nuestro asistente inteligente.</p>
      <PropertyList />
    </main>
  )
}

export default Home
