const buttonMenu = document.querySelector(".menu-button")
const nav = document.querySelector("nav.mobile")
const iconOpenMenu = document.querySelector(".menu-button .icon-openMenu")
const iconCloseMenu = document.querySelector(".menu-button .icon-closeMenu")

function handleMenu() {
  console.log(nav)
  nav.classList.toggle("open")
  iconCloseMenu.classList.toggle("hidden")
  iconOpenMenu.classList.toggle("hidden")
}

buttonMenu.addEventListener("click", handleMenu)

// Swiper Slides

const manyFriendsSectionSwiper = new Swiper(".many-friends .mySwiper", {
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
    768: {
      // centeredSlides: true,
      slidesPerView: 1,
      centerInsufficientSlides: true,
      centeredSlides: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    },
  },
})

const aboutCompanySectionSwiper = new Swiper(".about-company .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
})
