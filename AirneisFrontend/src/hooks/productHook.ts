import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Product } from '../types/Product'

// Récupération des produits
export const useGetProductsQuery = () =>
  useQuery({
    // Clé de requête
    queryKey: ['products'],
    // Fonction de requête
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  })

// Récupération des détails du produit par slug
export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    // Clé de requête
    queryKey: ['products', slug],
    // Fonction de requête
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/slug/${slug}`)).data,
  })

export const useGetCategoryDetailsQuery = (slug: string) =>
  useQuery({
    // Clé de requête
    queryKey: ['products', slug],
    // Fonction de requête
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/category/${slug}`)).data,
  })

export const useGetProductsByCategoryQuery = (slug: string) =>
  useQuery({
    // Clé de requête
    queryKey: ['products', slug],
    // Fonction de requête
    queryFn: async () =>
      (await apiClient.get<Product[]>(`api/products/category/${slug}`)).data,
  })
