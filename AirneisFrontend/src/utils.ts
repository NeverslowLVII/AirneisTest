import { ApiError } from './types/ApiError' // Importation: Erreur API

export const getError = (error: ApiError) => {
  // Fonction: Obtenir Erreur
  return error.response && error.response.data.message // Condition: Réponse et Message
    ? error.response.data.message // Résultat: Message de la Réponse
    : error.message // Résultat: Message de l'Erreur
}
