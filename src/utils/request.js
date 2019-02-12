import axios from 'axios'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Authorization'] = 'Bearer ' + store.getters.token
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  function(response) {
    // response.headers = { 'authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJyb290QWdlbnRJZCI6bnVsbCwic3ViIjoiMWNhZDZiMjQtYWQ3NC00MjFjLWJiOTYtYWFmOTRiZjE1Njc1IiwicGVybWlzc2lvbnMiOlsxLDIsMyw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNV0sInJvbGVzIjpbIlJvb3QiXSwibmFtZSI6IlN1cGVyIiwicGFyZW50QWdlbnRJZCI6bnVsbCwiZXhwIjoxNTQ0NTE4Mzc0LCJzdXJyb2dhdGVGb3IiOm51bGwsImlhdCI6MTU0NDQzMTk3NCwiZW1haWwiOm51bGwsImFnZW50TGV2ZWwiOjAsInN0YXR1cyI6MX0.ZPnGa9vhKuXOHZ0zPdQ30yIzhRrEmfvLViBqT184Ozrd-FTFrvKwUBVvkJ3erbctRO8F9GSYn1AePn3K-E_9Iw' }
    return response
  },
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  error => {
    console.log('err' + error) // for debug
    if (error.response.data && error.response.data.message) {
      Message({
        message: error.response.data.message,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }

    return Promise.reject(error)
  }
)

export default service
