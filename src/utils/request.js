import axios from 'axios'
import {  Message } from 'element-ui'

// create an axios instance
const service = axios.create({
  baseURL: "https://mock.presstime.cn/mock/61c2ff3990bfb20016179405/example", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
      return response
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
