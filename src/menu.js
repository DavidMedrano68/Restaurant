import beer from './images/beer.png'
import cocktail from './images/cocktail.png'
import lobster from './images/lobster.png'
import shark from './images/shark.png'
import tunap from './images/tunap.png'
import pizza from './images/pizza.png'
import cake from './images/cake.png'
import sweets from './images/sweets.png'
export default function menuDiv(){
    const main = document.querySelector('.mainContent')
    for(let i= 0;i< 8;i++){
        const itemContainer = document.createElement('div')
        itemContainer.classList = `menuItem${i}`
        itemContainer.id = 'menuItem'
        main.appendChild(itemContainer);
    }
    const menuItem = document.querySelectorAll('#menuItem')
    menuItem.forEach(item=>{
        const title = document.createElement('p')
        const image = document.createElement('img')
        item.appendChild(title)
        item.appendChild(image)
    })
    const item0Img = document.querySelector('.menuItem0 img')
    item0Img.src = beer
    const item0P = document.querySelector('.menuItem0 p')
    item0P.textContent = 'beer'
    const item1Img = document.querySelector('.menuItem1 img')
    item1Img.src = cocktail
    const item1P = document.querySelector('.menuItem1 p')
    item1P.textContent = 'cocktail'
    const item2Img = document.querySelector('.menuItem2 img')
    item2Img.src = lobster
    const item2P = document.querySelector('.menuItem2 p')
    item2P.textContent = 'lobster'
    const item3Img = document.querySelector('.menuItem3 img')
    item3Img.src = tunap
    const item3P = document.querySelector('.menuItem3 p')
    item3P.textContent = 'tuna potato'
    const item4Img = document.querySelector('.menuItem4 img')
    item4Img.src = shark
    const item4P = document.querySelector('.menuItem4 p')
    item4P.textContent = 'shark'
    const item5Img = document.querySelector('.menuItem5 img')
    item5Img.src = pizza
    const item5P = document.querySelector('.menuItem5 p')
    item5P.textContent = 'pizza'
    const item6Img = document.querySelector('.menuItem6 img')
    item6Img.src = cake
    const item6P = document.querySelector('.menuItem6 p')
    item6P.textContent = 'cake'
    const item7Img = document.querySelector('.menuItem7 img')
    item7Img.src = sweets
    const item7P = document.querySelector('.menuItem7 p')
    item7P.textContent = 'purple sweets'
    
    


    
}