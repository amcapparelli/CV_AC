export class Form {
    constructor(){
        this.options = document.querySelector('#options')
        this.otherHidden = document.querySelector('.hidden-field')
        
    }

    eventListeners(){
        this.options = addEventListener('change', (e) => {
            if(e.target.value == 'other'){
                this.otherHidden.style.display = 'block'; 
            } else{
                this.otherHidden.style.display = 'none'; 
            }
    })
    }
};