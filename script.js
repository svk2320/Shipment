"use strict"; // Enforces strict mode, which helps catch common coding mistakes

// Selecting elements using data attributes
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");


// NAVBAR TOGGLE

// Adding click event listeners to navToggler elements
for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    // Toggles the "active" class on navbar and overlay
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Adding click event listeners to navLinks elements
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    // Removes the "active" class from navbar and overlay
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}


// HEADER

// Adding a scroll event listener to the window
window.addEventListener("scroll", function () {
  // When the user scrolls down at least 100 pixels
  if (window.scrollY >= 100) {
    // Add the "active" class to the header and backTopBtn
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    // If the user scrolls back to the top, remove the "active" class
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
