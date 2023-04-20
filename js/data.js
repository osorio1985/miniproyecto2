/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;
}

const filterCity = (data, lugar) =>{
  let filtro = data.filter(ciudad => ciudad.city == lugar)
  return filtro
}


const  filterGuests = ( data, guests) =>{
  let filtro = data.filter(invitados => invitados.maxGuests >= guests )
  return filtro
}

const filtroCombinacion =(data,lugar, guests) =>{
  let filtro = data.filter(fil => fil.maxGuests >= guests && fil.city == lugar)
  return filtro
}




export default {
  getData,
  filterCity,
  filterGuests,
  filtroCombinacion
}