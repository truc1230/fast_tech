import axiosInstance from '@/service/axiosInstance'
import { FormArticle, FormUser, QueryParams, TypeId } from '@/types'
import { Article, User as TypeUser } from '@prisma/client'
import { URL_ARTICLES } from './api_url'

export const articleService = {
  getAll: async (params?: QueryParams<Article>) =>
    (await axiosInstance.get(URL_ARTICLES, { params })).data,
  get: async (payload: TypeId) => (await axiosInstance.get(URL_ARTICLES + payload)).data,
  create: (payload: FormArticle) => axiosInstance.post(URL_ARTICLES, payload),
  // delete: (payload) => axiosInstance.delete(URL_CATALOG_LIST + payload),
  update: (id: TypeId, payload: FormArticle) => axiosInstance.put(URL_ARTICLES + id, payload)
}
