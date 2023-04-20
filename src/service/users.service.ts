import axiosInstance from '@/service/axiosInstance'
import { FormUser, QueryParams, TypeId } from '@/types'
import { User as TypeUser } from '@prisma/client'
import { URL_USERS } from './api_url'

export const userService = {
  getAll: async (params?: QueryParams<TypeUser>) =>
    (await axiosInstance.get(URL_USERS, { params })).data,
  get: async (payload: TypeId) => (await axiosInstance.get(URL_USERS + payload)).data,
  create: (payload: FormUser) => axiosInstance.post(URL_USERS, payload),
  // delete: (payload) => axiosInstance.delete(URL_CATALOG_LIST + payload),
  update: (id: TypeId, payload: FormUser) => axiosInstance.put(URL_USERS + id, payload)
}
