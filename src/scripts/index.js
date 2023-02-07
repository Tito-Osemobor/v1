const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

const navSlide = () => {
    navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-active");
        primaryNav.classList.toggle("is-active");
        document.body.classList.toggle("overflow-hidden");
        document.querySelector("main").classList.toggle("blur");
        document.querySelector("main").style.pointerEvents =
            document.querySelector("main").style.pointerEvents === "none"
                ? "auto"
                : "none";
    });
};

window.addEventListener("click", function (event) {
    if (
        !primaryNav.contains(event.target) &&
        !navToggle.contains(event.target)
    ) {
        navToggle.classList.remove("is-active");
        primaryNav.classList.remove("is-active");
        document.body.classList.remove("overflow-hidden");
        document.querySelector("main").classList.remove("blur");
        document.querySelector("main").style.pointerEvents = 'auto';
    }
});

window.addEventListener("touchstart", function (event) {
    if (
        !primaryNav.contains(event.target) &&
        !navToggle.contains(event.target)
    ) {
        navToggle.classList.remove("is-active");
        primaryNav.classList.remove("is-active");
        document.body.classList.remove("overflow-hidden");
        document.querySelector("main").classList.remove("blur");
        document.querySelector("main").style.pointerEvents = 'auto';
    }
});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

navSlide();
