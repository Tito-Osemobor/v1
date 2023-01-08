const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar-links");

const navSlide = () => {
    burger.addEventListener("click", () => {
        nav.classList.toggle("navbar-links-active");
        document.body.classList.toggle("overflow-hidden");
    });
};

window.addEventListener("click", (event) => {
    if (!event.target.closest("nav")) {
        nav.classList.toggle("navbar-links-active", false);
        document.body.classList.toggle("overflow-hidden", false);
    }
});

window.addEventListener("touchstart", (event) => {
    if (!event.target.closest("nav")) {
        nav.classList.toggle("navbar-links-active", false);
        document.body.classList.toggle("overflow-hidden", false);
    }
});

navSlide();
