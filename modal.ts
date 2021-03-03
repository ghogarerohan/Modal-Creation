class modal{
    modalBtn: HTMLButtonElement;
    modalbg : HTMLElement
    modalClose: HTMLElement

    constructor(){
        this.modalBtn = document.querySelector('.modal-btn')! as HTMLButtonElement;
        this.modalbg = document.querySelector('.modal-bg')! as HTMLButtonElement;
        this.modalClose = document.querySelector('.modal-close')! as HTMLElement

        this.modalBtn.addEventListener('click', () =>{

            this.modalbg.classList.add('bg-active');
        }
        
        )

        this.modalClose.addEventListener('click',()=>{
            this.modalbg.classList.remove('bg-active');
        })
    }

} 

const modall = new modal();