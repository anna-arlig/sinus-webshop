import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL+'/api'





export function saveToken(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export async function getProducts(){
  return await axios.get('/items/')
}

export async function getUser({email, password}){
  return await axios.post('/auth/', {
    email,
    password
  })
}

export async function createUser({email, password, name, address}){
  return await axios.post('/register/', {
    email, 
    password, 
    name, 
    address
  })
}