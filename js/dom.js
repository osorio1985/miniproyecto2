/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $ = (selector) => document.querySelector(selector);

const newE = tag => document.creatElement(tag)

const newCard = (obj) => {
    const div = document.createElement('div')
    div.className = 'card col'
    div.innerHTML = `
        
        <div class="img-card">
            <img class="imagen w-100 rounded-4" src="${obj.photo}" alt="imagen">
            </div>
        <div class="card-body">
        <div class= "d-flex justify-content-between">
        ${obj.superHost ? `<div class="btn">Super Host </div>` : ""}
        <div class= d-flex  >
            <span>${obj.type}</span>
        
            <span>${obj.superHost ? `${obj.beds ? obj.beds  + " beds" : ""}`: ""}
    
            <span class= justify-content-between>${obj.rating}</span>
        </div>
        </div>
        <span>${obj.title}</span>
        </div>
    `
    return div
}




export default {
    newCard,
    $
}