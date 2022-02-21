export async function fetchItems(){
    return [
      {id:1, content: 'foo', title: 'lol'},
      {id:2, content: 'bar', title: 'zomg'},
    ]
  }

export async function getProducts(){
  let response = []
  for(let i = 0; i < 10; i++){
    const products = {
        id: Date.now() + Math.floor(Math.random() * 55) + i,
        title: 'Gretas Fury',
        price: 999,
        specialEdition: true,
        shortDesc: 'Unisex',
        longDesc: 'Skate ipsum dolor sit amet...',
        imgFile: 'skateboard-greta.png'
    }
    response.push(products)
  }
  return {...response}
}

export async function getUser(){
  return {
    id: 42,
    email: 'johan.kivi@zocom.se',
    password: 'gibberish',
    name: 'Johan Kivi',
    role: 'admin',
    street: 'Tokitokvägen 3',
    zip: '123 45',
    city: 'Tokberga',
  }
}
