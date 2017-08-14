import axios from 'axios'

let baseUrl = 'http://127.0.0.1:8888'
const get = (url, params) => {
  console.log(baseUrl + url)
  return axios.get(baseUrl + url, { params: params })
}

export default {
  get
}
