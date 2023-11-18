import React from 'react' // Importation: React

type AppState = {
  // Type: État de l'application
  mode: string // Mode: Chaîne de caractères
}

const initialState: AppState = {
  // État initial: État de l'application
  mode: localStorage.getItem('mode') // Mode: Obtenir de la mémoire locale
    ? localStorage.getItem('mode') // Si existe: Obtenir de la mémoire locale
    : window.matchMedia && // Sinon: Vérifier les préférences du système
      window.matchMedia('(prefers-color-scheme: dark)').matches // Si sombre: Vrai
    ? 'dark' // Si vrai: Sombre
    : 'light', // Sinon: Clair
}

type Action = { type: 'SWITCH_MODE' } // Type: Action

function reducer(state: AppState, action: Action): AppState {
  // Fonction: Réducteur
  switch (
    action.type // Selon le type d'action
  ) {
    case 'SWITCH_MODE': // Si 'SWITCH_MODE'
      return { mode: state.mode === 'light' ? 'dark' : 'light' } // Retourner: Nouveau mode
    default: // Par défaut
      return state // Retourner: État actuel
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
