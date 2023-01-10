const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

const navSlide = () => {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-active");
        primaryNav.classList.toggle("is-active");
    });
};

// window.addEventListener("click", (event) => {
//     if (!event.target.closest("primaryNav")) {
//         navToggle.classList.toggle("is-active", false);
//         primaryNav.classList.toggle("is-active", false);
//         document.querySelector("main").classList.toggle("blur", false);
//     }
// });

// window.addEventListener("touchstart", (event) => {
//     if (!event.target.closest("primaryNav")) {
//         navToggle.classList.toggle("is-active", false);
//         primaryNav.classList.remove("is-active", false);
//         document.querySelector("main").classList.toggle("blur", false);
//     }
// });

navSlide();
