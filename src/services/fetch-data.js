
import qs from "qs"
import axios from "axios"
import "./config"

const fetchData  = {
  get(url,params){
    return axios.get(url+"?"+qs.stringify(params))
  },
  post(url,params,options={}){
    return axios.post(url,qs.stringify(params),options)
  }
}

export default  fetchData


























// import axios from 'axios'
// import qs from 'qs'
// import "./config"

// const fetchData = {
//   get(url,params={},options={}) {
//     return axios.get(url+'?'+qs.stringify(params),options).catch(err=>{throw err})
//   },
//   post(url,params={},options={}){
//     return axios.post(url,qs.stringify(params),options).catch(err=>{throw err})
//   },
//   axios
// }

// export default fetchData
