import axiosInstance from '@/service/axiosInstance'
import { FormRecruitment, QueryParams, TypeId } from '@/types'
import { Recruitment } from '@prisma/client'
import { URL_RECRUITMENTS } from './api_url'

export const recruitmentService = {
  getAll: async (params?: QueryParams<Recruitment>) =>
    (await axiosInstance.get(URL_RECRUITMENTS, { params })).data,
  get: async (payload: TypeId) => (await axiosInstance.get(URL_RECRUITMENTS + payload)).data,
  create: (payload: FormRecruitment) => axiosInstance.post(URL_RECRUITMENTS, payload),
  delete: (payload: TypeId) => axiosInstance.delete(URL_RECRUITMENTS + payload),
  update: (id: TypeId, payload: FormRecruitment) =>
    axiosInstance.put(URL_RECRUITMENTS + id, payload)
}
