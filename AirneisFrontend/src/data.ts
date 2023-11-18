import { Product } from './types/Product'

// Exemples de produits
export const sampleProducts: Product[] = [
  {
    // Canapé 3 places
    name: 'Canapé 3 places',
    slug: 'canape-3-places',
    image: '../public/images/blue-3-seater-sofa.png',
    category: 'Canapés',
    brand: 'Airneis',
    price: 200,
    countInStock: 10,
    description: 'Canapé 3 places de couleur bleu',
    rating: 4.5,
    numReviews: 12,
  },
  {
    // Canapé 2 places
    name: 'Canapé 2 places',
    slug: 'canape-2-places',
    image: '../public/images/red-2-seater-sofa-in-living-room.png',
    category: 'Canapés',
    brand: 'Airneis',
    price: 150,
    countInStock: 20,
    description: 'Canapé 2 places de couleur rouge',
    rating: 4.0,
    numReviews: 8,
  },
  {
    // Canapé 1 place
    name: 'Canapé 1 place',
    slug: 'canape-1-place',
    image: '../public/images/single-seat-green-sofa-in-living-room.png',
    category: 'Canapés',
    brand: 'Airneis',
    price: 100,
    countInStock: 0,
    description: 'Canapé 1 place de couleur vert',
    rating: 3,
    numReviews: 12,
  },
  {
    // Table basse
    name: 'Table basse',
    slug: 'table-basse',
    image: '../public/images/modern-brown-coffee-table (1).png',
    category: 'Tables',
    brand: 'Airneis',
    price: 80,
    countInStock: 15,
    description: 'Table basse de couleur marron',
    rating: 5,
    numReviews: 12,
  },
]
