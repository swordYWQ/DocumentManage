import http from './http'
/**
 * 登录系统
 * @param {*} params
 */
const loginSystem = (params) => {
  return http.get('/user/login', params)
}
/**
 * 登出系统
 * @param {*} params
 */
const logout = (params) => {
  return http.get('/user/logout', params)
}
/**
 * 获取文档列表
 * @param {*} params
 */
const getDocList = (params) => {
  return http.get('/doc/getDocList', params)
}

export default {
  loginSystem,
  logout,
  getDocList
}
