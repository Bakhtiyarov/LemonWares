const navBurger = document.querySelector('.nav__burger')
const navBurgerLine = document.querySelector('.nav__burger-line')
const navMenu = document.querySelector('.nav__menu')

navBurger.addEventListener('click', () => {
    navBurgerLine.classList.toggle('active')
    navMenu.classList.toggle('active')
})

let modal = document.getElementById('myModal');
let btn = document.getElementById('openModal');
let span = document.getElementsByClassName('close')[0];
let modalContent = document.getElementById('modalContent');

btn.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function () {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
