import Alert from 'react-bootstrap/Alert'

// Exportation de la fonction MessageBox
export default function MessageBox({
  // Définition des variantes
  variant = 'info',
  // Définition des enfants
  children,
}: {
  // Type de variante
  variant?: string
  // Type d'enfant
  children: React.ReactNode
}) {
  // Retourne une alerte avec la variante et les enfants
  return <Alert variant={variant || 'info'}>{children}</Alert>
}
