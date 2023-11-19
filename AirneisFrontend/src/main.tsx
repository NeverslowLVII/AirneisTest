import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './Store'
import CartPage from './pages/CartPage'

const router = createBrowserRouter(
  // Création: Router
  createRoutesFromElements(
    // Route: App
    <Route path="/" element={<App />}>
      {' '}
      {/*// Route: HomePage */}
      <Route index={true} path="/" element={<HomePage />} />{' '}
      {/*// Route:ProductPage*/}
      <Route path="product/:slug" element={<ProductPage />} />{' '}
      {/*// Route:CartPage*/}
      <Route path="cart" element={<CartPage />} />{' '}
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
)

const queryClient = new QueryClient() // Création: QueryClient

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Rendu: Root
  <React.StrictMode>
    {' '}
    {/* // Mode: Strict */}
    <StoreProvider>
      {' '}
      {/* // Fournisseur: Store */}
      <HelmetProvider>
        {' '}
        {/* // Fournisseur: Helmet */}
        <QueryClientProvider client={queryClient}>
          {' '}
          {/* // Fournisseur: QueryClient */}
          <RouterProvider router={router} /> {/* // Fournisseur: Router */}
          <ReactQueryDevtools initialIsOpen={false} />{' '}
          {/* // Devtools: ReactQuery */}
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
)
