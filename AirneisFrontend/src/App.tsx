import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  Badge,
  NavDropdown,
} from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { LinkContainer } from 'react-router-bootstrap'

// Définition de l'application
function App() {
  // Utilisation du contexte du magasin
  const {
    state: { mode, cart, userInfo },
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
  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }
  // Rendu de l'application
  return (
    <>
      {/* // Conteneur principal */}
      <div className="d-flex flex-column vh-100">
        {/* // Conteneur des notifications */}
        <ToastContainer position="bottom-center" limit={1} />
        {/* // En-tête */}
        <header>
          {/* // Barre de navigation */}
          <Navbar expand="lg">
            {/* // Conteneur de la marque */}
            <Container>
              {/* // Marque */}
              <LinkContainer to="/">
                <NavbarBrand>Airneis</NavbarBrand>
              </LinkContainer>
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
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              {userInfo ? ( //si unserInfo existe
                // affiche le nom de l'utilisateur dans le dropdown
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                // sinon affiche le lien vers la page de connexion
                <Link className="nav-link" to="/signin">
                  Sign In
                </Link>
              )}
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
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </>
  )
}
// Exportation de l'application
export default App
