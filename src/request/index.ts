// 2023/6/28 16:23 --fcg

import axios, { InternalAxiosRequestConfig } from 'axios'
import { HttpResponse } from './type'
import { AxiosResponse } from 'axios/index'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000,
  withCredentials: true
})

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

instance.interceptors.response.use((response: AxiosResponse) => {
  const data = response.data
  return data
})

export default {
  get<T>(url: string, data?: object): Promise<HttpResponse<T>> {
    return instance.get(url, { params: data })
  },
  post<T>(url: string, data?: object, headers?: object): Promise<HttpResponse<T>> {
    return instance.post(url, data, { headers })
  }
}
