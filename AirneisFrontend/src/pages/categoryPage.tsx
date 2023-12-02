import { Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
import {
  useGetCategoryDetailsQuery,
  useGetProductsByCategoryQuery,
} from '../hooks/productHook'

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const { data: categoryDetails } = useGetCategoryDetailsQuery(categorySlug)
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(categorySlug)

  // Tri des produits par priorité et stock épuisé
  const sortedProducts = products?.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority
    }
    if (a.countInStock === 0) {
      return 1
    }
    if (b.countInStock === 0) {
      return -1
    }
    return 0
  })

  return (
    <div>
      <Row>
        <Col>
          <Card className="category-header">
            <Card.Img variant="top" src={categoryDetails?.image} />
            <Card.ImgOverlay>
              <Card.Title>{categoryDetails?.name}</Card.Title>
            </Card.ImgOverlay>
          </Card>
          <p>{categoryDetails?.description}</p>
        </Col>
      </Row>
      <Row>
        {sortedProducts?.map((product) => (
          <Col key={product.slug} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
