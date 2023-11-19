import { Product } from './types/Product'

// Exemples de produits
export const sampleProducts: Product[] = [
  {
    // Canapé 3 places
    name: '3 seater sofa',
    slug: '3-seater-sofa',
    image: '../public/images/blue-3-seater-sofa.png',
    category: 'Sofas',
    brand: 'Airneis',
    price: 200,
    countInStock: 10,
    description: 'Blue 3 seater sofa',
  },
  {
    // Canapé 2 places
    name: '2 seater sofa',
    slug: '2-seater-sofa',
    image: '../public/images/red-2-seater-sofa-in-living-room.png',
    category: 'Sofas',
    brand: 'Airneis',
    price: 150,
    countInStock: 20,
    description: 'Red 2 seater sofa',
  },
  {
    // Canapé 1 place
    name: '1 seater sofa',
    slug: '1-seater-sofa',
    image: '../public/images/single-seat-green-sofa-in-living-room.png',
    category: 'Sofas',
    brand: 'Airneis',
    price: 100,
    countInStock: 0,
    description: 'Green 1 seater sofa',
  },
  {
    // Table basse
    name: 'Coffee table',
    slug: 'coffee-table',
    image: '../public/images/modern-brown-coffee-table (1).png',
    category: 'Tables',
    brand: 'Airneis',
    price: 80,
    countInStock: 15,
    description: 'Brown coffee table',
  },
]
