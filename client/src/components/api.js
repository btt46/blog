import axios from 'axios'

axios.defaults.xsrfHeaderName = 'x-csrftoken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true

let djangoURL = 'http://127.0.0.1:8005'
let defaultTimeout = 30000

axios.defaults.baseURL = djangoURL
axios.defaults.timeout = defaultTimeout

const api = axios.create()
export default api 