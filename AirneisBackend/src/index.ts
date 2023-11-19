import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { productRouter } from './routers/productRouter' // Importation: Routeur Produit
import { seedRouter } from './routers/seedRouter'
import { userRouter } from './routers/userRouter' // Importation: Routeur Utilisateur

dotenv.config() // Importation: Dotenv
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/airneis' // Importation: URI MongoDB
mongoose.set('strictQuery', true) // Configuration: Query Strict MongoDB (pas d'alerte de duplication)
mongoose
  .connect(MONGODB_URI) // Connexion MongoDB
  .then(() => console.log('connected to MongoDB ...')) // Résultat: Connexion MongoDB
  .catch((error) => console.log(error)) // Erreur: Connexion MongoDB
// Création de l'application
const app = express()
// Utilisation de CORS
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use(express.json()) // Utilisation: JSON
app.use(express.urlencoded({ extended: true })) // Utilisation: URL Encoded

app.use('/api/products', productRouter) // Utilisation: Routeur Produit
app.use('/api/users', userRouter) // Utilisation: Routeur Utilisateur
app.use('/api/seed', seedRouter) // Utilisation: Routeur Seed

// Port d'écoute
const PORT = 4000
// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
