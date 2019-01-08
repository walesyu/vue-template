import { login, logout } from '@/api/login'
import { setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    userId: '',
    loginId: '',
    token: '',
    name: '',
    avatar: '',
    permissions: [],
    status: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },
  actions: {
    // 登入
    LoginByUsername({ commit }, formData) {
      return new Promise((resolve, reject) => {
        login(formData).then(response => {
          const authorization = response.headers.authorization

          if (typeof authorization === 'undefined') {
            reject('password error')
            return false
          }
          const jwtToken = authorization.split('.')
          if (jwtToken.length !== 3) {
            reject('get user info error !')
          }

          const data = JSON.parse(window.atob(jwtToken[1]))
          commit('SET_TOKEN', authorization)
          setToken(data.roles[0])
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          // 寫入Login Id
          commit('SET_USER_ID', data.sub)
          commit('SET_LOGIN_ID', data.account)
          commit('SET_STATUS', (data.status === 1) ? 'Active' : 'Inactive')

          if (data.permissions && data.permissions.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_PERMISSIONS', data.permissions)
          } else {
            reject('getInfo: permissions must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_PERMISSIONS', [])
          commit('SET_USER_ID', '')
          commit('SET_LOGIN_ID', '')
          commit('SET_NAME', '')
          commit('SET_AVATAR', '')
          commit('SET_STATUS', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
