import React, { useEffect, useState } from 'react'
import { easyBrokerGet } from '../services/easyBrokerApi'
import PropertyCard from './PropertyCard'

const PropertyList = () => {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    easyBrokerGet('/properties?page=1&limit=10')
      .then((data) => {
        setProperties(data.content || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError('Error al cargar propiedades')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando propiedades...</p>
  if (error) return <p>{error}</p>

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {properties.map((prop) => (
        <PropertyCard
          key={prop.public_id}
          title={prop.title}
          price={prop.operations?.[0]?.amount}
          image={prop.property_images?.[0]?.url_medium}
          location={prop.location?.name}
        />
      ))}
    </div>
  )
}

export default PropertyList
