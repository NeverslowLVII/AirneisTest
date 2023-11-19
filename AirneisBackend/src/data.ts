import { Product } from './models/product'
import { User } from './models/user'
import bcrypt from 'bcryptjs'

// Exemples de produits
export const sampleProducts: Product[] = [
  {
    // Canapé 3 places
    name: 'MACLEOD',
    slug: 'macleod',
    image: '../public/images/blue-3-seater-sofa.png',
    category: 'Sofas',
    brand: 'Airneis',
    price: 200,
    countInStock: 10,
    description: 'Blue 3 seater sofa',
  },
  {
    // Canapé 2 places
    name: 'NESSIE',
    slug: 'nessie',
    image: '../public/images/red-2-seater-sofa-in-living-room.png',
    category: 'Sofas',
    brand: 'Airneis',
    price: 150,
    countInStock: 20,
    description: 'Red 2 seater sofa',
  },
  {
    // Canapé 1 place
    name: 'THISTLE',
    slug: 'thisle',
    image: '../public/images/single-seat-green-sofa-in-living-room.png',
    category: 'Sofas',
    brand: 'Airneis',
    price: 100,
    countInStock: 0,
    description: 'Green 1 seater sofa',
  },
  {
    // Table basse
    name: 'GLEN',
    slug: 'glen',
    image: '../public/images/modern-brown-coffee-table (1).png',
    category: 'Tables',
    brand: 'Airneis',
    price: 80,
    countInStock: 15,
    description: 'Brown coffee table',
  },
  {
    name: 'WALLACE',
    slug: 'wallace',
    image:
      '../public/images/bookcase-with-a-wooden-finish-and-a-metal-frame.png',
    category: 'Bookcases',
    brand: 'Airneis',
    price: 80,
    countInStock: 15,
    description: 'bookcase with a wooden finish and a metal frame.',
  },
  {
    name: 'HEATHER',
    slug: 'heather',
    image: '../public/images/modern-purple-rug-with-floral-pattern.png',
    category: 'Rugs',
    brand: 'Airneis',
    price: 35,
    countInStock: 0,
    description: 'rug with a woolen texture and a purple colour',
  },
  {
    name: 'STIRLING',
    slug: 'stirling',
    image:
      '../public/images/ad-of-a-lamp-with-glass-shade-and-thin-silver-base.png',
    category: 'Lamps',
    brand: 'Airneis',
    price: 20,
    countInStock: 15,
    description: 'lamp with glass shade and thin silver base',
  },
  {
    name: 'SKYE',
    slug: 'skye',
    image: '../public/images/wardrobe-with-a-white-colour-and-3-doors.png',
    category: 'Wardrobes',
    brand: 'Airneis',
    price: 200,
    countInStock: 15,
    description: 'wardrobe with a white colour and a mirrored door',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    // Création d'un nouvel utilisateur
    name: 'User One',
    email: 'userone@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
  {
    // Création d'un autre utilisateur
    name: 'User Two',
    email: 'usertwo@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
