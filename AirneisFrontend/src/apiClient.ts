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

//when we send a request, before sending requests using APIclient interceptor, we can modify the request and in the header of request we want to put the bearer token to authenticate the user
apiClient.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem('userInfo'))
      config.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem('userInfo')!).token
      }`
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// Exportation client API
export default apiClient
