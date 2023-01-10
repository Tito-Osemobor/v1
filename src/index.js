const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

const navSlide = () => {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-active");
        primaryNav.classList.toggle("is-active");
        document.body.classList.toggle("overflow-hidden");    
        document.querySelector("main").classList.toggle("blur");
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

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

navSlide();
