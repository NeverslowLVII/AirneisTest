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
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage.tsx'
import ShippingAdressPage from './pages/ShippingAdressPage.tsx'
import PaymentMethodPage from './pages/PaymentMethodPage.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import PlaceOrderPage from './pages/PlaceOrderPage.tsx'
import OrderPage from './pages/OrderPage.tsx'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

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
      <Route path="cart" element={<CartPage />} />
      {/*// ajout de connexion dans la liste de routes (/signin) */}
      <Route path="signin" element={<SigninPage />} />{' '}
      {/*// ajout de register dans la liste de routes (/signup) */}
      <Route path="signup" element={<SignupPage />} />{' '}
      {/*// ajout de routes secrètes invisibles à l'utilisateur */}
      <Route path="" element={<ProtectedRoute />}>
        {/*// ajout de l'adress dans la liste de routes (/shipping) */}
        <Route path="shipping" element={<ShippingAdressPage />} />
        {/*// ajout de la méthode de paiement dans la liste de routes (/payment) */}
        <Route path="payment" element={<PaymentMethodPage />} />
        {/*// ajout de la commande dans la liste de routes (/placeorder) */}
        <Route path="placeorder" element={<PlaceOrderPage />} />
        {/*// ajout du récapitulatif de la commande dans la liste de routes (/order/:id) */}
        <Route path="order/:id" element={<OrderPage />} />
      </Route>
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
      <PayPalScriptProvider options={{ 'client-id': 'sb' }} deferLoading={true}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </HelmetProvider>
      </PayPalScriptProvider>
    </StoreProvider>
  </React.StrictMode>
)
