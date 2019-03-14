import axios from 'axios'
import store from '@/store'
import Vue from 'vue'

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
    // response.headers = { 'authorization': '' }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    if (!error.response) {
      Vue.prototype.$message.error(error, 5 * 1000)
    } else {
      if (error.response.data && error.response.data.message) {
        Vue.prototype.$message.error(error.response.data.message, 5 * 1000)
      } else {
        Vue.prototype.$message.error(error.message, 5 * 1000
        )
      }
    }

    return Promise.reject(error)
  }
)

export default service
