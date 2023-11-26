/**
 * J'ai choisi d'utiliser Express et Typegoose pour construire cette API REST car ils offrent une excellente compatibilité avec TypeScript.
 * Ce fichier, 'productRouter.ts', gère les routes pour les produits. Il contient deux routes principales : une pour obtenir tous les produits et une autre pour obtenir un produit spécifique par son slug.
 * La route 'GET /' renvoie tous les produits. Les produits sont d'abord triés par priorité et disponibilité en stock, puis par ordre alphabétique.
 * La route 'GET /slug/:slug' renvoie les détails d'un produit spécifique.
 */
import express from 'express'
import asyncHandler from 'express-async-handler'
import { ProductModel } from '../models/product'

export const productRouter = express.Router()
productRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    // Fetch all in-stock products, sorted by priority
    const inStockProducts = await ProductModel.find({
      countInStock: { $gt: 0 },
    }).sort({ isPriority: -1, name: 1 })

    // Fetch all out-of-stock products
    const outOfStockProducts = await ProductModel.find({
      countInStock: { $eq: 0 },
    }).sort({ name: 1 })

    // Combine the two arrays
    const products = [...inStockProducts, ...outOfStockProducts]

    res.json(products)
  })
)

productRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const product = await ProductModel.findOne({ slug: req.params.slug })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)
