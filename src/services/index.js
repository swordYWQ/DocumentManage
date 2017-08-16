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
  return http.get('/doc/list', params)
}
/**
 * 新增文档
 * @param {*} params
 */
const addDoc = (params) => {
  return http.get('/doc/add', params)
}
/**
 * 修改文档
 * @param {*} params
 */
const editDoc = (params) => {
  return http.get('/doc/edit', params)
}
/**
 * 删除文档
 * @param {*} params
 */
const delDoc = (params) => {
  return http.get('/doc/del', params)
}

export default {
  loginSystem,
  logout,
  getDocList,
  addDoc,
  editDoc,
  delDoc
}
