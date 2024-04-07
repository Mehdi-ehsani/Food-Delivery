const Menu = document.querySelector(".list");
const showMenu = document.querySelector(".hamburger-icon img");
const hideMenu = document.querySelector(".hide");

showMenu.addEventListener("click" , () => {
    console.log("show")
    Menu.classList.add("show-menu")
})
hideMenu.addEventListener("click" , () => {
    console.log("hide")
    Menu.classList.remove("show-menu")
})
