import { Product } from '../types/Product'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

// Définition du produit
function ProductItem({ product }: { product: Product }) {
  return (
    // Carte du produit
    <Card style={{ border: 'none' }}>
      {/* // Lien vers le produit */}
      <Link to={`/product/${product.slug}`}>
        <div style={{ position: 'relative' }}>
          {/* // Image du produit */}
          <img
            src={product.image}
            className={`card-img-top ${
              product.countInStock === 0 ? 'bw-filter' : ''
            }`}
            alt={product.name}
          />
          {product.countInStock === 0 && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage: 'url(/images/Flag_of_Scotland2.png)',
                backgroundSize: 'cover',
                mixBlendMode: 'multiply',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '4em',
                  textAlign: 'center',
                }}
              >
                {/* OUT OF STOCK */}
              </div>
            </div>
          )}
        </div>
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
      </Card.Body>
    </Card>
  )
}
// Exportation du produit
export default ProductItem
