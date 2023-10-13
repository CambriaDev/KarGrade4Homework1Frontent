import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://kar.sylu.asia/api/',
  timeout: 5000
})

service.interceptors.request.use((config) => {
  return config
})

service.interceptors.response.use((response) => {
  const res = response.data
  return res
})

export default service
