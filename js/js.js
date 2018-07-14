import { Main } from './main.js'

function load () {
    window.addEventListener("load", 
    () => {new Main().eventListeners()})
}
load ();