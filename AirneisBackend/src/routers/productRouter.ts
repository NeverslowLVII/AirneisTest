import express from 'express'
import asyncHandler from 'express-async-handler'
import { ProductModel } from '../models/product'

export const productRouter = express.Router() // Définition: Routeur Produit
// Définition: Route GET Produit
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await ProductModel.find() // Récupération: Produits
    res.json(products) // Renvoi: Produits
  })
)

// Définition: Route GET Produit
productRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug }) // Récupération: Produits
    if (product) {
      res.json(product) // Renvoi: Produits
    } else {
      res.status(404).json({ message: 'Product not found' }) // Renvoi: Erreur
    }
  })
)
