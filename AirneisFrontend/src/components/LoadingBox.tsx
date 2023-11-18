import Spinner from 'react-bootstrap/Spinner'

// Exportation de la fonction de chargement
export default function LoadingBox() {
  // Retourne un spinner lors du chargement
  return (
    <Spinner animation="border" role="status">
      // Texte caché pendant le chargement
      <span className="visually-hidden">Chargement...</span>
    </Spinner>
  )
}
