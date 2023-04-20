import  data from "./data.js"
import dom from "./dom.js"

let lugar = "Turku"
let guest = 7
const datos = await data.getData()
const filtro = data.filterCity(datos,lugar)
const filtroGuest = data.filterGuests(datos,guest)
const filtroMaxguest = data.filtroCombinacion( datos,lugar,guest)

console.log(filtroMaxguest)

datos.forEach(obj => {
    const card = dom.newCard(obj)
    const div_card = dom.$("#div_card")
    div_card.appendChild(card)
    

})



