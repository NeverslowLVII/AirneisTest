import axios from 'axios'

// Création client API
const apiClient = axios.create({
  // URL de base
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000/' : '/',
  // En-têtes
  headers: {
    'Content-Type': 'application/json',
  },
})

// Exportation client API
export default apiClient
