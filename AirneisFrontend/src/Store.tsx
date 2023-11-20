import React from 'react' // Importation: React
import { Cart, CartItem, ShippingAddress } from './types/Cart' // Importation: Panier
import { UserInfo } from './types/UserInfo' // Importation: Utilisateur

type AppState = {
  // Type: État de l'application
  mode: string // Mode: Chaîne de caractères
  cart: Cart // Panier: Panier
  userInfo?: UserInfo
}

const initialState: AppState = {
  userInfo: localStorage.getItem('userInfo') // Utilisateur: Obtenir de la mémoire locale
    ? JSON.parse(localStorage.getItem('userInfo')!) // Si existe: Obtenir de la mémoire locale
    : null, // Sinon: Indéfini
  // État initial: État de l'application
  mode: localStorage.getItem('mode') // Mode: Obtenir de la mémoire locale
    ? localStorage.getItem('mode') // Si existe: Obtenir de la mémoire locale
    : window.matchMedia && // Sinon: Vérifier les préférences du système
      window.matchMedia('(prefers-color-scheme: light)').matches // Si sombre: Vrai
    ? 'dark' // Si vrai: Sombre
    : 'light', // Sinon: Clair
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')!)
      : [], // Panier: Obtenir panier de la mémoire locale
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress')!)
      : {}, // Panier: Obtenir adress de livraison de la mémoire locale
    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')!
      : 'Card', // Panier: Obtenir méthode de paiement de la mémoire locale
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  }, // Panier: Panier vide
}

type Action =
  | { type: 'SWITCH_MODE' }
  | { type: 'CART_ADD_ITEM'; payload: CartItem } // Type: Action
  | { type: 'CART_REMOVE_ITEM'; payload: CartItem } // Type: Action
  | { type: 'USER_SIGNIN'; payload: UserInfo } // Type: Action
  | { type: 'USER_SIGNOUT' } // Type: Action
  | { type: 'SAVE_SHIPPING_ADDRESS'; payload: ShippingAddress } // Type: Action
  | { type: 'SAVE_PAYMENT_METHOD'; payload: string } // Type: Action

function reducer(state: AppState, action: Action): AppState {
  // Fonction: Réducteur
  switch (
    action.type // Selon le type d'action
  ) {
    case 'SWITCH_MODE':
      localStorage.setItem('mode', state.mode === 'light' ? 'dark' : 'light') // Mode: Définir le mode dans la mémoire locale
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' } // Retourner: Nouveau mode de couleur
    case 'CART_ADD_ITEM':
      const newItem = action.payload // Nouvel article: Charge utile
      const existItem = state.cart.cartItems.find(
        (item: CartItem) => item._id === newItem._id
      ) // Article existant: Trouver l'article existant
      const cartItems = existItem
        ? state.cart.cartItems.map((item: CartItem) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem] // Articles du panier: Ajouter le nouvel article

      localStorage.setItem('cartItems', JSON.stringify(cartItems)) // Panier: Définir le panier dans la mémoire locale
      return { ...state, cart: { ...state.cart, cartItems } } // Retourner: Nouveau panier
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item: CartItem) => item._id !== action.payload._id
      ) // Articles du panier: Filtrer les articles du panier
      localStorage.setItem('cartItems', JSON.stringify(cartItems)) // Panier: Définir le panier dans la mémoire locale
      return { ...state, cart: { ...state.cart, cartItems } } // Retourner: Nouveau panier
    }

    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload } // Retourner: Nouvel utilisateur
    case 'USER_SIGNOUT':
      return {
        mode:
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'dark'
            : 'light',
        cart: {
          cartItems: [],
          paymentMethod: 'Card',
          shippingAddress: {
            fullName: '',
            address: '',
            city: '',
            postalCode: '',
            country: '',
          },
          itemsPrice: 0,
          shippingPrice: 0,
          taxPrice: 0,
          totalPrice: 0,
        },
      }
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      }
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      }
    default:
      return state
  }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState // Dispatch par défaut: Retourner l'état initial

const Store = React.createContext({
  // Créer un contexte
  state: initialState, // État: État initial
  dispatch: defaultDispatch, // Dispatch: Dispatch par défaut
})

function StoreProvider(props: React.PropsWithChildren<{}>) {
  // Fonction: Fournisseur de magasin
  const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>( // Utiliser un réducteur
    reducer, // Réducteur
    initialState // État initial
  )

  return <Store.Provider value={{ state, dispatch }} {...props} /> // Retourner: Fournisseur de magasin
}

export { Store, StoreProvider } // Exportation: Magasin, Fournisseur de magasin
