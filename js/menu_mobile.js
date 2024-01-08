const btnOpen = document.getElementById('menu-mobile');
const btnHamburger = document.getElementById ('btn-hamb');

btnHamburger.addEventListener ('click', () => {
    btnHamburger.classList.toggle("close");
    btnOpen.classList.toggle("open");
});