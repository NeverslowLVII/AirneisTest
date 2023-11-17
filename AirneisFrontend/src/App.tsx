import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <NavbarBrand>Airneis</NavbarBrand>
            </Container>
            <Nav>
              <a href="/cart" className="nav-link">
                Panier
              </a>
              <a href="/signin" className="nav-link">
                Connexion
              </a>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Outlet />
          </Container>
        </main>
        <footer>
          <div className="text-center">Tous droits réservés</div>
        </footer>
      </div>
    </>
  )
}

export default App
