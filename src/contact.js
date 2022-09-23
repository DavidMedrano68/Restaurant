import mapImg from './images/falador.png'
export default function contactDiv(){
    const main = document.querySelector('.mainContent')
    main.classList.add('contact')
    const phoneDiv = document.createElement('div')
    const phoneIcon = document.createElement('i');
    phoneIcon.classList = 'fa-solid fa-phone fa-3x'
    phoneDiv.appendChild(phoneIcon)
    const phoneNumber = document.createElement('span')
    phoneNumber.textContent = '123-456-9765'
    phoneDiv.appendChild(phoneNumber)
    const addressDiv = document.createElement('div')
    const addressIcon = document.createElement('i');
    addressIcon.classList = 'fa-solid fa-house fa-3x'
    addressDiv.appendChild(addressIcon)
    const address = document.createElement('span')
    address.textContent = '4584 Falador Dr'
    addressDiv.appendChild(address)
    const Map = document.createElement('img')
    Map.src = mapImg
    main.appendChild(phoneDiv)
    main.appendChild(addressDiv)
    main.appendChild(Map)


}