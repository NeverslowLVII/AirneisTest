import { useMutation } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { UserInfo } from '../types/UserInfo'

//hook pour requête connexion d'un utilisateur
export const userSigninMutation = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string
      password: string
    }) =>
      (await apiClient.post<UserInfo>(`api/users/signin`, { email, password }))
        .data,
  })
