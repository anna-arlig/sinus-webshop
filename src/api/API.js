import axios from "axios"

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL + "/api"
const skateboardQuery = "/items?category=skateboard"
const apparelQuery = "/items?category=hoodie&category=tshirt"
const accessoriesQuery =
  "/items?category=cap&category=totebag&category=socks&category=wheel"
const accessoriesQueryPageTwo =
  "/items?category=cap&category=totebag&category=socks&category=wheel&page=2"

  export async function addProduct({title, category, price, specialEdition, shortDesc, longDesc, imgFile}){
    return await axios.post(`/items/`, {title, category, price, specialEdition, shortDesc, longDesc, imgFile})
  }

  export async function updateProduct({id, title, category, price, specialEdition, shortDesc, longDesc, imgFile})
{
  return await axios.patch(`/items/${id}`, {title, category, price, specialEdition, shortDesc, longDesc, imgFile})
}

  export async function removeProduct(id){
    return await axios.delete(`/items/${id}`)
  }

  export async function updateOrder({id, status}){
    return await axios.patch(`/orders/${id}`, { "status": status})
  }

export async function markusSearch(searchWord) {
  return await axios.get(`/items?search=${searchWord}`)
}
export async function categorySearch(searchWord) {
  return await axios.get(`/items?category=${searchWord}`)
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
export function clearToken(emptyString) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${emptyString}`
}

export async function getProducts() {
  return await axios.get("/items/")
}

export async function logIn({ email, password }) {
  return await axios.post("/auth/", {
    email,
    password,
  })
  .catch(function (error){
    if(error.response){
     return error.response
    }
  })
}

export async function getMe() {
  return await axios.get("/me/")
}

export async function createUser({ email, password, name, address }) {
  return await axios.post("/register/", {
    email,
    password,
    name,
    address,
  })
}

export async function saveOrder(items) {
  return await axios.post("/orders/", {
    items,
  })
}

export async function getAllOrders() {
  return await axios.get("/orders/")
}

export async function searchItems(searchString) {
  return await axios.get(`/items?search=${searchString}`)
}

export async function updateUserInfo(userInfo) {
  console.log(userInfo)
  return await axios.patch("/me", userInfo)
}


