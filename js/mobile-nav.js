const xIcon = document.querySelector(".x_icon")
const barsIcon = document.querySelector(".bars_icon")
const mobileNav = document.querySelector("nav.mobile_nav");

const toggleHidden = (event) => {
  event.stopPropagation();

  // Toggle mobile nav and icons
  xIcon.classList.toggle("hidden")
  barsIcon.classList.toggle("hidden")
  mobileNav.classList.toggle("show_mobile_nav")


  // Hide mobile nav when the user clicks outside of it.
  const hideMobileNav = () => {
    xIcon.classList.add("hidden")
    barsIcon.classList.remove("hidden")
    mobileNav.classList.remove("show_mobile_nav")
  }
  if (event.currentTarget === barsIcon) {
    document.addEventListener("click", hideMobileNav)
  } else document.removeEventListener("click", hideMobileNav)
}
xIcon.addEventListener("click", toggleHidden)
barsIcon.addEventListener("click", toggleHidden)

// Stop click event from bubbling so hideMobileNav
// works as expected (see lines 15-23)
mobileNav.addEventListener("click", e => e.stopPropagation());
