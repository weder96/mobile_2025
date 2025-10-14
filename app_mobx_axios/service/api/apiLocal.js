import axios from 'axios'

const apiLocal = axios.create({  
  //baseURL: 'http://10.0.2.2:4000'
  baseURL: 'http://localhost:4000'
})

apiLocal.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    console.log('error request :', error)
    return Promise.reject(error)
  }
)

apiLocal.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log('error response :', error)
    if (error.response && error.response.status === 403) {
    }
    return Promise.reject(error)
  }
)

export default apiLocal