const menuButton = document.getElementById("menu-button")
const navbar = doucment.querySelector("nav")
const closeMenu = doucmnet.querySelector(".close")
const openMenu = doucmnet.querySelector(".menu")

menuButton.addEventListener("click", () => {
    if (navbar.classList.contains("open")) {
        navbar.classList.toggle("open")
        closeMenu.style.display = "block"
        openMenu.style.display = "none"
    } else {
        navbar.classList.add("open")
        closeMenu.style.display = "block"
        openMenu.style.display = "none"
    }
})
