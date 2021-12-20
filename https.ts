import axios, {AxiosRequestConfig, AxiosResponse} from "axios"

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {

  return config
})

// 相应拦截
axios.interceptors.response.use((response: AxiosResponse<any>) => {

  return response
}, error => {
  // 错误提醒
  return Promise.reject(error)
})

export default axios