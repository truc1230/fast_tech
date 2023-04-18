import axiosInstance from '@/service/axiosInstance'
import { QueryParams } from '@/types'
import { User as TypeUser } from '@prisma/client'
import { URL_USERS } from './api_url'

export const userService = {
  getAll: async (params?: QueryParams<TypeUser>) => axiosInstance.get(URL_USERS, { params }),
  create: (payload: TypeUser) => axiosInstance.post(URL_USERS, payload)
  // delete: (payload) => axiosInstance.delete(URL_CATALOG_LIST + payload),
  // update: (payload) => axiosInstance.put(URL_CATALOG_LIST + payload.id + '/', payload.data)
}
