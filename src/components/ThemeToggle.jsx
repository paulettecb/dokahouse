import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
    }
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: 'none',
        fontSize: '2rem',
        cursor: 'pointer',
      }}
    >
      {theme === 'light' ? '🌞' : '🌜'}
    </button>
  )
}

export default ThemeToggle
