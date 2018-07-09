export class Form {
    constructor () {
        this.options = document.querySelector('#options')
        this.otherHidden = document.querySelector('.hidden-field')
        this.textArea = document.querySelector('#textarea')
        this.counter = document.querySelector('#counter')
        this.sections = document.querySelectorAll('section')
        this.aNav = document.querySelectorAll('[href*="#"]')
    }

    eventListeners(){
        /* Mostrar campo Otros en Formulario */
        this.options.addEventListener('change', (e) => {
            if(e.target.value == 'other'){
                this.otherHidden.style.display = 'block'; 
            } else{
                this.otherHidden.style.display = 'none'; 
            }
    })
        /* Controlar un máximo de 150 palabras en TextArea */
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
                this.textArea.removeAttribute("maxlength")
            }
        })
        /* Modificar elementos del Nav según scroll */
            let positions = []
            this.sections.forEach (item => {
                //let id = item.id
                let position = item.offsetTop
                positions.push(position)
                //let aActive = document.querySelector( `a[href="#${id}"]`)
            })

            window.addEventListener('scroll', () => {
                let scrollPosition = window.pageYOffset
                if (scrollPosition < positions[0]){
                    this.aNav[0].classList = 'navActive'
                } else if (scrollPosition > positions[0] < positions[1]){
                    this.aNav[1].classList = 'navActive'
            }
        })
            
        }
}
