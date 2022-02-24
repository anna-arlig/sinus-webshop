import axios from "axios"
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL + "/api"
const skateboardQuery = "/items?category=skateboard"
const apparelQuery = "/items?category=hoodie&category=tshirt"
const accessoriesQuery =
  "/items?category=cap&category=totebag&category=socks&category=wheel"
const accessoriesQueryPageTwo =
  "/items?category=cap&category=totebag&category=socks&category=wheel&page=2"

export async function markusSearch(searchWord) {
  return await axios.get(`/items?search=${searchWord}`)
}

export async function getCategory(query) {
  if (query === "Skateboards") {
    return await axios.get(skateboardQuery)
  } else if (query === "Apparel") {
    return await axios.get(apparelQuery)
  } else if (query === "Accessories") {
    return (
      (await axios.get(accessoriesQuery)) &&
      (await axios.get(accessoriesQueryPageTwo))
    )
  }
}
export function saveToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}
export function clearToken() {
  delete axios.defaults.headers.common["Authorization"]
}

export async function getProducts() {
  return await axios.get("/items/")
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
export async function searchItems(searchString) {
  return await axios.get(`/items?search=${searchString}`)
}
