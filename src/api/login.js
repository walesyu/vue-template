import request from '@/services/request'

export function login(formData) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: formData,
    config: { headers: { 'Content-Type': 'multipart/form-data' }}
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'get'
  })
}
