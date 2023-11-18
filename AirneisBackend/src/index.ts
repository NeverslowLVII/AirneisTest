import express, { Request, Response } from 'express'
import { sampleProducts } from './data'

const app = express()
app.get('/api/products', (req: Request, res: Response) => {
  res.send(sampleProducts)
})
const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
