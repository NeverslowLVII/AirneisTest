import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHook'
import { ApiError } from '../types/APIError'
import { getError } from '../utils'
import { useContext } from 'react'
import { Store } from '../Store'
import { toast } from 'react-toastify'
import { convertProductToCartItem } from '../utils'
import { useNavigate } from 'react-router-dom'

// Page produit
export default function ProductPage() {
  // Récupération du slug du produit
  const { slug } = useParams()
  // Appel de l'API pour obtenir les détails du produit
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!)

  const { state, dispatch } = useContext(Store)
  const { cart } = state

  const navigate = useNavigate()

  const addToCartHandler = () => {
    const existItem = cart.cartItems.find((x) => x._id === product!._id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product!.countInStock < quantity) {
      toast.warn('Sorry. Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...convertProductToCartItem(product!), quantity },
    })
    toast.success('Product added to cart')
    navigate('/cart')
  }
  // Gestion des différents états de la requête
  return isLoading ? (
    // Chargement
    <LoadingBox />
  ) : error ? (
    // Erreur
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    // Produit non trouvé
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    // Affichage du produit
    <div>
      <Row>
        <Col md={6}>
          {/* // Image du produit */}
          <img className="large" src={product.image} alt={product.name}></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {/* // Titre du produit */}
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            {/* // Prix du produit */}
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            {/* // Description du produit */}
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    {/* // Prix du produit */}
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    {/* // Statut du produit */}
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        // En stock
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        // Indisponible
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      {/* // Bouton Ajouter au panier */}
                      <Button onClick={addToCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
