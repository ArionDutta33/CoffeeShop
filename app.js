const navbar = document.querySelector(".navbar")

const menuBtn = document.querySelector("#menu-btn")


menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active")
    searchForm.classList.remove("active")
    cartItem.classList.remove("active")

})

const cartItem = document.querySelector(".cart-items-container")


const cartBtn = document.querySelector("#cart-btn")

cartBtn.addEventListener("click", () => {
    cartItem.classList.toggle("active")
    searchForm.classList.remove("active")
    navbar.classList.remove("active")


})


const searchForm = document.querySelector(".search-form")
const searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
    cartItem.classList.remove("active")



})

console.log(searchBtn)
console.log(searchForm)