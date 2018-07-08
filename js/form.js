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
        let counter = 0;
        let string = '';
        
        this.textArea.addEventListener('input', (e) => {
            if (e.inputType === 'insertText'){
                string = string.concat(e.data)
            }else if (e.inputType === 'deleteContentBackward') {
                string = string.slice(0, -1)
            }
            let wordsCounter = string.split(' ').length
            this.counter.innerHTML = 'Palabras restantes: ' + (151 - wordsCounter) 
            if (wordsCounter == 151){
                this.textArea.setAttribute("maxlength", 151);
            } else if (wordsCounter < 151){
                this.textArea.setAttribute("maxlength", ' ')
            }
        })
    }
};