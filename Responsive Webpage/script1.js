// Custom JavaScript goes here
// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("a.nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        const offset = 60; // Adjust this value to set the offset from the top
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth"
        });
      });
    });
  });

// Initialize Bootstrap Carousel
$(".carousel").carousel();

// Disable default form submission for login and registration forms
$("form").on("submit", function (event) {
  event.preventDefault();
  // Add your login and registration logic here
});
