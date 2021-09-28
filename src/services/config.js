
import axios from "axios"

const mock = false
const serverUrl = 'http://localhost:3000/api'
const mockUrl = '/static/mock'
const baseUrl = mock?mockUrl:serverUrl

axios.defaults.baseURL = baseUrl; //"http://localhost:8000/admin"+"/product/getListData"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //form-data













// import axios from 'axios'
// const mock = false //是否使用模拟数据
// const serverUrl = 'http://localhost:8000/admin'
// const mockUrl = '/static/mock'
// const baseUrl = mock?mockUrl:serverUrl

// axios.defaults.baseURL = baseUrl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';