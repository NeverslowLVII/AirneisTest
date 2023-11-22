import express from 'express'
import asyncHandler from 'express-async-handler'
import { CategoryModel } from '../models/category'

export const categoryRouter = express.Router()
categoryRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await CategoryModel.find().sort('displayOrder')
    res.json(categories)
  })
)

categoryRouter.get(
  '/slug/:slug',
  asyncHandler(async (req, res) => {
    const category = await CategoryModel.findOne({ slug: req.params.slug })
    if (category) {
      res.json(category)
    } else {
      res.status(404).json({ message: 'Category not found' })
    }
  })
)
