import { URL_ARTICLES } from '@/service/api_url'
import axiosInstance from '@/service/axiosInstance'
import { FormArticle, TContentEmail } from '@/types'

export const emailService = {
  send: (payload: TContentEmail) => axiosInstance.post('/sendMail', payload)
  // delete: (payload) => axiosInstance.delete(URL_CATALOG_LIST + payload),
}
