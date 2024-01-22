const openModalSubscription = document.querySelector('.btn-subscription');
const iconCloseModal = document.querySelector('.fa-circle-xmark');
const modalElement = document.querySelector('.modal-subscription');

openModalSubscription.addEventListener ('click', () => {
    btnHamburger.classList.toggle("close");
    btnOpen.classList.toggle("open");
    modalElement.classList.add("show");
    
});
iconCloseModal.addEventListener ('click', () => {
    modalElement.classList.remove("show");
})