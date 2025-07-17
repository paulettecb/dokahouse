import React, { useEffect, useState } from 'react'
import { easyBrokerGet } from '../services/easyBrokerApi'

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
    <ul>
      {properties.map((prop) => (
        <li key={prop.public_id}>{prop.title}</li>
      ))}
    </ul>
  )
}

export default PropertyList
