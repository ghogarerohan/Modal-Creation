"use strict";
class modal {
    constructor() {
        this.modalBtn = document.querySelector('.modal-btn');
        this.modalbg = document.querySelector('.modal-bg');
        this.modalClose = document.querySelector('.modal-close');
        this.modalBtn.addEventListener('click', () => {
            this.modalbg.classList.add('bg-active');
        });
        this.modalClose.addEventListener('click', () => {
            this.modalbg.classList.remove('bg-active');
        });
    }
}
const modall = new modal();
//# sourceMappingURL=modal.js.map