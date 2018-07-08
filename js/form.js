export class Form {
    constructor(){
        this.options = document.querySelector('#options')
        this.otherHidden = document.querySelector('.hidden-field')
        this.textArea = document.querySelector('#textarea')
        this.counter = document.querySelector('#counter')
    }

    eventListeners(){
        this.options.addEventListener('change', (e) => {
            if(e.target.value == 'other'){
                this.otherHidden.style.display = 'block'; 
            } else{
                this.otherHidden.style.display = 'none'; 
            }
    })
        var counter = 0;
        
        this.textArea.addEventListener('keypress', (e) => {
            if(e.keyCode == 32){
                counter++;
                this.counter.innerHTML = 'Palabras restantes: ' + (150 - counter) 
                if (counter == 150){
                    this.textArea.setAttribute("maxlength", 150);
                }
                console.log(counter)
            }
        })
    }
};