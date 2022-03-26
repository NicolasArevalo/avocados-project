// Web API
const API_URL = "https://platzi-avo.vercel.app/api/avo"
const API_IMAGES = "https://platzi-avo.vercel.app"

const respuesta = await fetch(API_URL)
const { data } = await respuesta.json()
const contenedor = document.querySelector('.contenedor')
const todo = []

const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD"
    }).format(price)
    
    return newPrice
}


data.forEach((e) => {
  const image = document.createElement("img");
  const nombre = document.createElement("h2");
  const precio = document.createElement("label");

  image.src = `${API_IMAGES}${e.image}`
  image.className = 'rounded-full'

  nombre.innerText = e.name
  nombre.className = 'font-bold'

  precio.innerText = formatPrice(e.price)
  precio.className = 'text-gray-500'

  const contenedorPrincipal = document.createElement("div");
  const contenedorSecundario = document.createElement("div");
  contenedorSecundario.append(nombre, precio)

  contenedorPrincipal.className = 
  'xl:flex-row flex flex-col justify-center items-center bg-white transition-all cursor-pointer hover:bg-blue-300 p-4 rounded-lg shadow-xl'

  contenedorSecundario.className = 
  'flex flex-col justify-center items-center gap-4'
  contenedorPrincipal.append(image, contenedorSecundario)
  

  todo.push(contenedorPrincipal)

})

contenedor.append(...todo)

