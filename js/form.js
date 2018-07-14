export class Form {
    constructor (){
        this.name = document.querySelector('#name')
        this.email = document.querySelector('#email')
        this.phone = document.querySelector('#phone')
        this.message = document.querySelector('#textarea')
        this.where = document.querySelector('#options')
        this.otros = document.querySelector('#otros')
    }

    saveData(){
        this.data = {
            nombre: this.name.value,
            email: this.email.value,
            movil: this.phone.value,
            mensaje: this.message.value,
            donde: this.where.options[this.where.selectedIndex].value,
            otros: this.otros.value
        }
        
        
    }
    
}