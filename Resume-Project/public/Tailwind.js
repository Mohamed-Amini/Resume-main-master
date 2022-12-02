// Hamburger menu 
const btn = document.querySelector(".Mobile-menu-button");
const Menu = document.querySelector(".Mobile-menu");

btn.addEventListener("click", () => {
    Menu.classList.toggle("hidden");
});