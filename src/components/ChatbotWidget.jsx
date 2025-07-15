import React from 'react'

const ChatbotWidget = () => {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '1rem 1.5rem',
        borderRadius: '2rem',
        backgroundColor: '#5A4FCF',
        color: 'white',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        fontSize: '1rem',
      }}
    >
      💬 DokaBot
    </button>
  )
}

export default ChatbotWidget