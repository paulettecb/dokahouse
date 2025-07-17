const API_URL = 'https://api.stagingeb.com/v1'

export async function easyBrokerGet(endpoint) {
  const token = import.meta.env.VITE_EASYBROKER_TOKEN
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'X-Authorization': token,
    },
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`EasyBroker error ${res.status}: ${text}`)
  }
  return res.json()
}
