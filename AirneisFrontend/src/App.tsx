import { Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import logoWhite from '../public/images/airneis (4).svg'
import logoBlack from '../public/images/airneis (4) copy.svg'
import SearchBar from '../src/components/SearchBar'

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
        {/* // En-tête
        <header style={{ backgroundColor: '#005fba' }}>
           // Barre de navigation 
          <Navbar expand="lg" className="align-items-center">
             // Conteneur de la marque 
            <Container>
               // Marque 
              <LinkContainer to="/">
                <NavbarBrand>
                  <img
                    src={logo}
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                  AIRNEIS
                </NavbarBrand>
              </LinkContainer>
              <div className="ml-auto d-flex align-items-center">
                 // Bouton pour changer de mode 
                <Button
                  variant={mode}
                  onClick={switchModeHandler}
                  style={{ borderRadius: '100px' }}
                >
                   // Icône du bouton 
                  <i
                    className={
                      mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
                    }
                  ></i>
                </Button>
                 // Lien vers le panier 
                <div style={{ position: 'relative' }}>
                  <Link to="/cart" className="nav-link">
                    <Button variant={mode} style={{ borderRadius: '100px' }}>
                      <i
                        className={
                          mode === 'light'
                            ? 'fa-solid fa-basket-shopping'
                            : 'fa-solid fa-basket-shopping'
                        }
                      />
                    </Button>

                    {cart.cartItems.length > 0 && (
                      <Badge
                        pill
                        bg="danger"
                        style={{ position: 'absolute', top: 0, right: 0 }}
                      >
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </div>
              </div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Container>
             // Navigation 
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-end"
            >
              <Nav
                className="align-items-center"
                style={{ paddingRight: '30px', paddingLeft: '30px' }}
              >
                {userInfo ? ( //si unserInfo existe
                  // affiche le nom de l'utilisateur dans le dropdown
                  <Button variant={mode} style={{ borderRadius: '100px' }}>
                    <NavDropdown
                      title={
                        <>
                          <i className="fa-solid fa-user"></i>
                          {` Halò ! ${userInfo.name}`}
                        </>
                      }
                      id="basic-nav-dropdown"
                      className="dropdown-menu-start align-self-center"
                    >
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  </Button>
                ) : (
                  // sinon affiche le lien vers la page de connexion
                  <Link className="nav-link" to="/signin">
                    Halò ! Sign In or Sign Up
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header> */}
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand
              href="/"
              style={{
                fontSize: '20px',
                color: mode === 'light' ? '#005fba' : '#FFFFFF',
              }}
            >
              <img
                src={mode === 'light' ? logoBlack : logoWhite}
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{ marginRight: '10px', marginLeft: '10px' }}
              />
              AIRNEIS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item>
                  <SearchBar />
                </Nav.Item>
                <Nav.Link href="/categories">Categories</Nav.Link>
              </Nav>
              <Nav>
                {userInfo ? (
                  <NavDropdown title={`Halò ! ${userInfo.name}`}>
                    <NavDropdown.Item href="/orderhistory">
                      Order History
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={signoutHandler}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <NavDropdown title="Halò ! Sign In or Sign Up">
                    <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
                  </NavDropdown>
                )}
                <Button variant="link" onClick={switchModeHandler}>
                  <i
                    className={
                      mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
                    }
                  ></i>
                </Button>
                <div style={{ position: 'relative' }}>
                  <Button variant="link" href="/cart">
                    <i
                      className={
                        mode === 'light'
                          ? 'fa-solid fa-basket-shopping'
                          : 'fa-solid fa-basket-shopping'
                      }
                    />
                  </Button>
                  {cart.cartItems.length > 0 && (
                    <Badge
                      pill
                      bg="danger"
                      style={{ position: 'absolute', top: 0, right: 0 }}
                    >
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* // Contenu principal */}
        <main>
          {/* // Conteneur du contenu */}
          <Container className="mt-3">
            {/* // Sortie du routeur */}
            <Outlet />
          </Container>
        </main>
        {/* // Pied de page */}
        <footer className="footer mt-auto py-3">
          <Container>
            <div className="d-flex justify-content-between">
              <div>
                <Link to="/contact" className="px-2">
                  Contact
                </Link>
                <Link to="/legal-notice" className="px-2">
                  Legal Notice
                </Link>
                <Link to="/terms-and-conditions" className="px-2">
                  Terms and Conditions
                </Link>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/airneis"
                  className="px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.twitter.com/airneis"
                  className="px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/airneis"
                  className="px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="text-center">
              <span className="text-muted">
                © 2023 AIRNEIS. Tous droits réservés.
              </span>
            </div>
          </Container>
        </footer>
      </div>
    </>
  )
}
// Exportation de l'application
export default App
