import axios from 'axios'

let baseUrl = 'http://127.0.0.1:8888'
const get = (url, params) => {
  return axios.get(baseUrl + url, { params: params, withCredentials: true }).catch((e) => {
    alert(e.message)
  })
}

export default {
  get
}
