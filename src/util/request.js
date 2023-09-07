import axios from 'axios'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: 'http://192.168.128.2:8080/',
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
