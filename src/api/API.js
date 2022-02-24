
import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL+'/api'



export async function markusSearch(searchWord){
  return await axios.get(`/items?search=${searchWord}`)
}


export async function getCategory(query) {
  return await axios.get(query)
}
export function saveToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}
export function clearToken(){
  axios.defaults.headers.common["Authorization"] = `Bearer`
}


export async function getProducts(){
  return await axios.get('/items/')
}

export async function getUser({ email, password }) {
  return await axios.post("/auth/", {
    email,
    password,
  })
}

export async function createUser({ email, password, name, address }) {
  return await axios.post("/register/", {
    email,
    password,
    name,
    address,
  })
}
export async function searchItems(searchString){
  return await axios.get(`/items?search=${searchString}`)
}
