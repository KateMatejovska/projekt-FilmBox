const menuButton = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const menuIcon = document.querySelector('#menu-tlacitko i')

menuButton.addEventListener('click', () => {
    menuPolozky.classList.toggle('show');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
})
