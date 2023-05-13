import axiosInstance from '@/service/axiosInstance'
import { FormSolution, FormUser, QueryParams, TypeId } from '@/types'
import { Solution } from '@prisma/client'
import { URL_SOLUTION } from './api_url'

export const solutionService = {
  getAll: async (params?: QueryParams<Solution>) =>
    (await axiosInstance.get(URL_SOLUTION, { params })).data,
  get: async (payload: TypeId) => (await axiosInstance.get(URL_SOLUTION + payload)).data,
  create: (payload: FormSolution) => axiosInstance.post(URL_SOLUTION, payload),
  delete: (payload: TypeId) => axiosInstance.delete(URL_SOLUTION + payload),
  update: (id: TypeId, payload: FormSolution) => axiosInstance.put(URL_SOLUTION + id, payload)
}
