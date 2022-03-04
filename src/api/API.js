import axios from "axios"

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL + "/api"
const skateboardQuery = "/items?category=skateboard"
const apparelQuery = "/items?category=hoodie&category=tshirt"
const accessoriesQuery =
  "/items?category=cap&category=totebag&category=socks&category=wheel"
const accessoriesQueryPageTwo =
  "/items?category=cap&category=totebag&category=socks&category=wheel&page=2"

  export async function getUserAdmin(id){
    return await axios.get(`/users/${id}`)
  }

  export async function uploadImg(formData){
    return await axios.post('/images/', formData)
  }

  export async function addProduct({title, category, price, specialEdition, shortDesc, longDesc, imgFile}){
    try{
      return await axios.post(`/items/`, {title, category, price, specialEdition, shortDesc, longDesc, imgFile})
    }
    catch(error){
      return {error: 'Nånting gick fel. Produkt ej tillagd.'}
    }
  }

export async function updateProduct({
  id,
  title,
  category,
  price,
  specialEdition,
  shortDesc,
  longDesc,
  imgFile,
}) {
  try{
    return await axios.patch(`/items/${id}`, {
      title,
      category,
      price,
      specialEdition,
      shortDesc,
      longDesc,
      imgFile,
    })
  }
  catch{
    return {error: 'Nånting gick fel. Produkten har ej ändrats.'}
  }
}

export async function removeProduct(id) {
  try{
    return await axios.delete(`/items/${id}`)
  }
  catch{
    return {error: 'Nånting gick fel. Produkten har ej tagits bort.'}
  }
}

export async function updateOrder({ id, status }) {
  try{
    return await axios.patch(`/orders/${id}`, { status: status })
  }
  catch{
    return {error: 'Nånting gick fel. Ordern har ej uppdaterats.'}
  }
}

export async function markusSearch(searchWord) {
  return await axios.get(`/items?search=${searchWord}`)
}
export async function categorySearch(searchWord) {
  return await axios.get(`/items?category=${searchWord}`)
}

export async function getCategory(query) {
  try{
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
  catch{
    return {error: 'Hittade inga produkter.'}
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
export async function getOneProduct(id) {
  return await axios.get(`/items/${id}`)
}

export async function logIn({ email, password }) {
  try{
    return await axios
      .post("/auth/", {
        email,
        password,
      })
  }
  catch { 
    return {error: 'Kunde ej logga in. Försök igen'}
  }
}

export async function getMe() {
  return await axios.get("/me/")
}

export async function createUser({ email, password, name, address }) {
  try{
    return await axios.post("/register/", {
      email,
      password,
      name,
      address,
    })
  }catch{
    return {error: 'Kunde inte skapa användare'}
  }
}

export async function saveOrder({ items, shippingAddress }) {
  try{
    return await axios.post("/orders/", {
      items,
      shippingAddress,
    })
  }
  catch{
    return {error: 'Nånting blev fel. Kunde inte skicka order'}
  }
}
export async function saveCustomerOrder(items) {
  try{
    return await axios.post("/orders/", {
      items,
    })
  }catch{
    return {error: 'Kunde inte skicka order'}
  }
}

export async function getAllOrders() {
  try{
    return await axios.get("/orders/")
  }catch{
    return {error: 'Kunde inte hämta ordrar'}
  }
}

export async function searchItems(searchString) {
  return await axios.get(`/items?search=${searchString}`)
}
export async function getItem(id) {
  return await axios.get(`/items/${id}`)
}

export async function updateUserInfo(userInfo) {
  try{
    return await axios.patch("/me", userInfo)
  }catch{
    return {error: 'Uppdateringen slutfördes inte korrekt, försök igen.'}
  }
}
