import { ApiError } from './types/APIError'
import { CartItem } from './types/Cart'
import { Product } from './types/Product'

export const getError = (error: ApiError) => {
  // Fonction: Obtenir Erreur
  return error.response && error.response.data.message // Condition: Réponse et Message
    ? error.response.data.message // Résultat: Message de la Réponse
    : error.message // Résultat: Message de l'Erreur
}

export const ConvertProductToCartItem = (product: Product): CartItem => {
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name,
    slug: product.slug,
    image: product.image,
    price: product.price,
    CountInStock: product.countInStock,
    quantity: 1,
  }
  return cartItem
}
