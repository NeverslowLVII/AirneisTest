import { Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductsQuery } from '../hooks/productHook'
import { getError } from '../utils'
import { ApiError } from '../types/APIError'

// Page d'accueil
export default function HomePage() {
  // Récupération des produits
  const { data: products, error, isLoading } = useGetProductsQuery()
  // Chargement en cours ?
  return isLoading ? (
    // Affichage de la boîte de chargement
    <LoadingBox />
  ) : error ? (
    // Erreur ? Affichage du message d'erreur
    <MessageBox variant="danger">
      {getError(error as unknown as ApiError)}
    </MessageBox>
  ) : (
    // Affichage des produits
    <Row>
      {/* // Titre de la page */}
      <Helmet>
        <title>Airneis | Home</title>
      </Helmet>
      {/* // Boucle sur les produits */}
      {products!.map((product) => (
        // Affichage de chaque produit
        <Col
          key={product.slug}
          sm={6}
          md={4}
          lg={4}
          style={{ padding: 'calc(var(--bs-gutter-x) * 0.5)' }}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}
