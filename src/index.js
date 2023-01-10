const burger = document.querySelector(".burger");
const nav = document.querySelector(".navbar-links");

const navSlide = () => {
    burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        nav.classList.toggle("navbar-links-active");
        document.querySelector("main").classList.toggle("blur");
    });
};

window.addEventListener("click", (event) => {
    if (!event.target.closest("nav")) {
        burger.classList.toggle("is-active", false);
        nav.classList.toggle("navbar-links-active", false);
        document.querySelector("main").classList.toggle("blur", false);
        if (nav.classList.contains("transition")) {
            setTimeout(function () {
                nav.classList.remove("transition");
            }, 500);
        } else {
            nav.classList.add("transition");
        }
    }
});

window.addEventListener("touchstart", (event) => {
    if (!event.target.closest("nav")) {
        burger.classList.toggle("is-active", false);
        nav.classList.toggle("navbar-links-active", false);
        document.querySelector("main").classList.toggle("blur", false);
        if (nav.classList.contains("transition")) {
            setTimeout(function () {
                nav.classList.remove("transition");
            }, 500);
        } else {
            nav.classList.add("transition");
        }
    }
});

navSlide();
