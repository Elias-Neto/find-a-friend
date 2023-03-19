const buttonMenu = document.querySelector(".menu-button")
const nav = document.querySelector("nav")
const iconOpenMenu = document.querySelector(".menu-button .icon-openMenu")
const iconCloseMenu = document.querySelector(".menu-button .icon-closeMenu")

function handleMenu() {
  nav.classList.toggle("open")
  iconCloseMenu.classList.toggle("hidden")
  iconOpenMenu.classList.toggle("hidden")
}

buttonMenu.addEventListener("click", handleMenu)
