const buttonMenu = document.querySelector(".menu-button")
const nav = document.querySelector("nav")

function handleMenu() {
  nav.classList.toggle("open")
}

buttonMenu.addEventListener("click", handleMenu)
