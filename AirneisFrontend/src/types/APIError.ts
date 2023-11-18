// Définition d'erreur API
export declare type ApiError = {
  // Message d'erreur
  message: string
  response: {
    data: {
      message: string
    }
  }
}
