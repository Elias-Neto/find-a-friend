const buttonMenu = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")

function handleMenu() {
  menu.classList.toggle("open")
}

buttonMenu.addEventListener("click", handleMenu)
