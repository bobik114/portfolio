document.addEventListener("DOMContentLoaded", function () {
    
    const burgerBtn = document.querySelector('.navbar__burger-icon')
    const navbarList = document.querySelector('.navbar__list')
    const navbar = document.querySelector('.navbar')

    burgerBtn.addEventListener("click", function() {
        navbarList.classList.toggle("navbar__list--collapse")
        navbar.classList.toggle("navbar--collapse")
    })


 })