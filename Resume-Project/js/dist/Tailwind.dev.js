"use strict";

// Hamburger menu 
var btn = document.querySelector(".Mobile-menu-button");
var Menu = document.querySelector(".Mobile-menu");
btn.addEventListener("click", function () {
  Menu.classList.toggle("hidden");
});