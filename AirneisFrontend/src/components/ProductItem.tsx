import { Product } from '../types/Product'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { convertProductToCartItem } from '../utils'
import { toast } from 'react-toastify'

// Définition du produit
function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state

  const addToCartHandler = async (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === item._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product.countInStock < quantity) {
      alert('Sorry, product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
    toast.success('Product added to cart')
  }
  return (
    // Carte du produit
    <Card>
      {/* // Lien vers le produit */}
      <Link to={`/product/${product.slug}`}>
        {/* // Image du produit */}
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      {/* // Corps de la carte */}
      <Card.Body>
        {/* // Lien vers le produit */}
        <Link to={`/product/${product.slug}`}>
          {/* // Titre du produit */}
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* // Prix du produit */}
        <Card.Text>${product.price}</Card.Text>
        {/* // Stock du produit */}
        {product.countInStock === 0 ? (
          // Bouton désactivé si le produit est en rupture de stock
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          // Bouton pour ajouter le produit au panier
          <Button
            onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
// Exportation du produit
export default ProductItem
