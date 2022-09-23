import cookingCape from "./images/bob's99.jpeg"
import menu from './menu.js'
import contact from './contact.js'
export default function createHeading(){
    const header = document.createElement('div')
    header.classList = 'heading'
    const heading = document.createElement('h1')
    heading.textContent = "Bob's restaurant"
    header.appendChild(heading)
    return header
}
export function createNav(){
    const navContainer = document.createElement('div')
    navContainer.classList = 'nav'
    const navCell1 = document.createElement('div')
    navCell1.textContent = 'home'
    navCell1.value = 'home'
    navContainer.appendChild(navCell1)
    const navCell2 = document.createElement('div')
    navCell2.textContent = 'menu'
    navCell2.value = 'menu'
    navContainer.appendChild(navCell2)
    const navCell3 = document.createElement('div')
    navCell3.textContent = 'contact'
    navCell3.value = 'contact'
    navContainer.appendChild(navCell3)
    const navArr = [navCell1,navCell2,navCell3]
    navArr.forEach(navCell=>{
        navCell.addEventListener('click',(e)=>{
            manageNavclass(e.target.value)}
            )
    })
    return navContainer
}
export function createMain(){
    const mainContainer = document.createElement('div')
    mainContainer.classList='main'
    const mainContent = document.createElement('div')
    mainContent.classList = 'mainContent'
    mainContainer.appendChild(mainContent)
    return mainContainer
}
export function mainHome(){
    const main = document.querySelector('.mainContent')
    main.classList.add('home')
    const homeImg = document.createElement('img')
    homeImg.src= cookingCape
    main.appendChild(homeImg)
    const paragraph = document.createElement('p')
    paragraph.textContent = "in Honor of Bob's 99 Cooking cape he decided on making some of his best meals"
    main.appendChild(paragraph)
}
function manageNavclass(set){
    const main = document.querySelector('.mainContent')
    if(main.classList.contains(set)){
        return
    }
    if(main.classList.length == 2){
        const oldClass = main.classList.value.split(' ')
        oldClass.pop()
        const newClass = `${oldClass} ${set}`
        main.classList = newClass
        clearMain()
        changeMain(set)
    }
    if(main.classList.length == 1){
        main.classList.add(set)
        changeMain(set)
    }

}
function changeMain(module){
    if(module == 'home'){
        mainHome()
    }
    if(module == 'contact'){
        contact()
    }
    if(module=='menu'){
        menu()
    }


}
function clearMain(){
    const main = document.querySelector('.mainContent')
    main.innerHTML = ''
}