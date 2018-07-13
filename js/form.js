export class Form {
    constructor () {
        this.options = document.querySelector('#options')
        this.otherHidden = document.querySelector('.hidden-field')
        this.textArea = document.querySelector('#textarea')
        this.counter = document.querySelector('#counter')
        this.sections = document.querySelectorAll('section')
        this.aNav = document.querySelectorAll('[href*="#"]')
        this.buttonMenuMobile = document.querySelector('#btn-MenuMobile')
        this.menuMobile = document.querySelector ('.wrapper-nav')
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
        this.textArea.addEventListener('keydown', (e) => {
            if (e.key !== 'Backspace'){
                string = string.concat(e.key)
            } else {
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
            let sectionChange = (window.innerHeight/100)*80
            this.sections.forEach (item => {
                //let id = item.id
                let position = (item.offsetTop - sectionChange)
                positions.push(position)
                //let aActive = document.querySelector( `a[href="#${id}"]`)
            })
            window.addEventListener('scroll', () => {
                let scrollPosition = window.pageYOffset
                this.aNav.forEach(
                    (item) => item.classList.remove('navActive')
                )
                if (scrollPosition < positions[2] && scrollPosition > positions[1]){
                    this.aNav[0].classList = 'navActive'
                } else if (scrollPosition < positions[3] && scrollPosition > positions[2]){
                    this.aNav[1].classList = 'navActive'
                } else if (scrollPosition < positions[4] && scrollPosition > positions[3]){
                    this.aNav[2].classList = 'navActive'
                } else if (scrollPosition < positions[5] && scrollPosition > positions[4]){
                    this.aNav[3].classList = 'navActive'
                } else if (scrollPosition > positions[5]) {
                    this.aNav[4].classList = 'navActive'
                }
        })

        /* Smooth Scroll */
            this.aNav.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault()
                    let hash = e.target.hash
                    let uriPosition = document.querySelector(`${hash}`).offsetTop
                    let intervals = (uriPosition/100)
                    /* Hacia abajo */
                    let sS = setInterval (function () {
                        let newCurrentPosition = window.pageYOffset
                        window.scroll(0, (newCurrentPosition + intervals))
                        if (newCurrentPosition >= (uriPosition-200)){
                            clearInterval(sS)
                            
                            /* hacia arriba */
                            let sSBack = setInterval (function(){
                                let positionToGoBack = window.pageYOffset
                                window.scroll(0, (positionToGoBack - intervals))
                                if (positionToGoBack < (uriPosition-200)){
                                    clearInterval(sSBack)
                                }
                            },10)
                        } 
                    }, 10)
                })
            })
            
        /* mostrar menu en moviles */
                this.buttonMenuMobile.addEventListener('click', () => {
                    if (this.menuMobile.style.visibility == 'hidden' || 
                        this.menuMobile.style.visibility == ''){
                            this.menuMobile.style.visibility = 'visible'
                        } else {
                            this.menuMobile.style.visibility = 'hidden'
                    }
                })
            
    }
}
