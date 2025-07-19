const API_URL = '/api'

export async function easyBrokerGet(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`EasyBroker error ${res.status}: ${text}`)
  }
  return res.json()
}
