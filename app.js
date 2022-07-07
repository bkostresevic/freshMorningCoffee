let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').addEventListener('click', function() {
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
})

let searchForm = document.querySelector('.search-form') 
document.querySelector('#search-btn').addEventListener('click', function() {
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
})

let cartItem = document.querySelector('.cart-items-container') 
document.querySelector('#cart-btn').addEventListener('click', function() {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
})

window.onscroll = () => {
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
    cartItem.classList.remove('active')
}
