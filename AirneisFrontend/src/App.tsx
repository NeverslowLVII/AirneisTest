import './App.css'
import { sampleProducts } from './data'

function App() {
  return (
    <>
      <div>
        <header>Airneis</header>
      </div>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li>
              <h2>{product.name}</h2>
            </li>
          ))}
        </ul>
      </main>
      <footer>Tous droits réservés</footer>
    </>
  )
}

export default App
