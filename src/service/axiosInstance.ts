import axios, { AxiosResponse } from 'axios'
import { loadAccessToken } from '@/utils/storage'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    // Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    Accept: 'application/json'
    // credentials: "include",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "*",
    // "Access-Control-Allow-Headers": "*",
    // "Access-Control-Allow-Credentials": true,
  }
  // withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    if (config.method === 'get') {
      config.timeout = 10000
    }
    // Do something before request is sent
    const accessToken = loadAccessToken()
    if (accessToken) {
      config.headers.Authorization = `Token ${accessToken}`
    }
    return config
  },
  function (error) {
    // Do something with request error

    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse<any>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    const status = error.response?.status
    if (status === 401) {
      // handle unauthorized
    } else if (status === 403) {
      // handle forbidden
    } else if (status === 419 || status === 440) {
      // handle session timeout
    } else if (status === 500) {
      // handle server error
    } else if (error.toString().includes('timeout')) {
      // handle request cancelation
    } else {
      // handle unknown error
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
