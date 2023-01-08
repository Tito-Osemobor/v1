const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar-links");

const navSlide = () => {
    burger.addEventListener("click", () => {
        nav.classList.toggle("navbar-links-active");
        document.body.classList.toggle("overflow-hidden");
        document.querySelector('main').classList.toggle("blur");
    });
};

window.addEventListener("click", (event) => {
    if (!event.target.closest("nav")) {
        nav.classList.toggle("navbar-links-active", false);
        document.body.classList.toggle("overflow-hidden", false);
        document.querySelector('main').classList.toggle("blur", false);
    }
});

window.addEventListener("touchstart", (event) => {
    if (!event.target.closest("nav")) {
        nav.classList.toggle("navbar-links-active", false);
        document.body.classList.toggle("overflow-hidden", false);
        document.querySelector('main').classList.toggle("blur", false);
    }
});

navSlide();
