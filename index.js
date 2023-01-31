const open = document.getElementById("menu-btn");
const close = document.getElementById("close-btn");
const nav = document.getElementById("nav");


open.addEventListener("click", () => {
    nav.classList.add('open-nav')
    open.classList.add('hide-btn')
    close.classList.add('show-btn')
})

close.addEventListener("click", () => {
    nav.classList.remove('open-nav')
    open.classList.remove('hide-btn')
    close.classList.remove('show-btn')
})
