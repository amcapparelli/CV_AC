import { Form } from './form.js'

function load () {
    window.addEventListener("load", 
    () => {new Form().eventListeners()})
}
load ();