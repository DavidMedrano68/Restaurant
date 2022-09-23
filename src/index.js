import './styles.css'
import createHeading,{createNav,createMain,mainHome} from './home.js'
import{library, dom} from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
library.add(faHouse);
library.add(faPhone)
dom.watch()

const website = ()=>{
    const content = document.createElement('div')
    content.id= 'content'
    content.appendChild(createHeading())
    content.appendChild(createNav())
    content.appendChild(createMain())
    document.body.appendChild(content)
}
website()
window.onload(mainHome())