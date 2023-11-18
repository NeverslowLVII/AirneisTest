import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Store } from './Store'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Définition de l'application
function App() {
  // Utilisation du contexte du magasin
  const {
    state: { mode },
    dispatch,
  } = useContext(Store)

  // Effet pour changer le thème
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  // Gestionnaire pour changer de mode
  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  // Rendu de l'application
  return (
    <>
      {/* // Conteneur principal */}
      <div className="d-flex flex-column vh-100">
        {/* // En-tête */}
        <header>
          {/* // Barre de navigation */}
          <Navbar expand="lg">
            {/* // Conteneur de la marque */}
            <Container>
              {/* // Marque */}
              <NavbarBrand>Airneis</NavbarBrand>
            </Container>
            {/* // Navigation */}
            <Nav>
              {/* // Bouton pour changer de mode */}
              <Button variant={mode} onClick={switchModeHandler}>
                {/* // Icône du bouton */}
                <i
                  className={
                    mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
                  }
                ></i>
              </Button>
              {/* // Lien vers le panier */}
              <a href="/cart" className="nav-link">
                Panier
              </a>
              {/* // Lien vers la connexion */}
              <a href="/signin" className="nav-link">
                Connexion
              </a>
            </Nav>
          </Navbar>
        </header>
        {/* // Contenu principal */}
        <main>
          {/* // Conteneur du contenu */}
          <Container className="mt-3">
            {/* // Sortie du routeur */}
            <Outlet />
          </Container>
        </main>
        {/* // Pied de page */}
        <footer>
          {/* // Texte du pied de page */}
          <div className="text-center">Tous droits réservés</div>
        </footer>
      </div>
    </>
  )
}
// Exportation de l'application
export default App
