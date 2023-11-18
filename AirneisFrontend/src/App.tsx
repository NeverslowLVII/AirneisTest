import { Container, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { Store } from './Store'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar expand="lg">
            <Container>
              <NavbarBrand>Airneis</NavbarBrand>
            </Container>
            <Nav>
              <Button variant={mode} onClick={switchModeHandler}>
                <i
                  className={
                    mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'
                  }
                ></i>
              </Button>
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
