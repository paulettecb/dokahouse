import React from 'react'

const PropertyCard = ({ title = 'Casa en Zapopan', price = '$2,400,000 MXN', image, location = 'Zona Real' }) => {
  return (
    <div style={{
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      width: '300px',
    }}>
      <img src={image || 'https://via.placeholder.com/300x180'} alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <p style={{ margin: '0.25rem 0', fontWeight: 600 }}>{price}</p>
        <p style={{ fontSize: '0.9rem', color: '#555' }}>{location}</p>
      </div>
    </div>
  )
}

export default PropertyCard