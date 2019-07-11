import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
// import { api } from './api'
// 创建axios实例
const service = axios.create({
  // baseURL: api(), // api 的 base_url
  // baseURL: 'http://localhost:9000',
  baseURL: origin,
  timeout: 120000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    if (error.indexOf('timeout of') !== -1) {
      Message.error('请求超时')
    } else {
      Promise.reject(error)
    }
    // Do something with request error
    console.log(error) // for debug
  })
// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(response, '错误信息')
    if (!res.success) {
      console.log(res, '错误信息')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)
export default service
