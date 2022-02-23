import axios from "axios"
axios.defaults.baseURL = "http://localhost:5000/api"

export async function getProducts() {
  return await axios.get("/items")
}
export async function getCategory(query) {
  return await axios.get(query)
}
