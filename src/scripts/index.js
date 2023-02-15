const primaryHeader = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav-links");
const expButtons = document.querySelectorAll(".buttons");
const companyPill = document.querySelector(".company-pill");
const company = document.querySelector(".company");

var prevScrollPos = window.pageYOffset;
var threshold = window.innerWidth > 768 ? 30 : 50;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos && currentScrollPos > threshold) {
        primaryHeader.classList.remove("hidden");
        primaryHeader.classList.add("show");
    } else if (
        prevScrollPos < currentScrollPos &&
        currentScrollPos > threshold
    ) {
        primaryHeader.classList.remove("show");
        primaryHeader.classList.add("hidden");
    } else {
        primaryHeader.classList.remove("show");
        primaryHeader.classList.remove("hidden");
    }
    prevScrollPos = currentScrollPos;
};

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
        document.querySelector("main").style.pointerEvents = "auto";
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
        document.querySelector("main").style.pointerEvents = "auto";
    }
});

navLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
        navToggle.classList.remove("is-active");
        primaryNav.classList.remove("is-active");
        document.body.classList.remove("overflow-hidden");
        document.querySelector("main").classList.remove("blur");
        document.querySelector("main").style.pointerEvents = "auto";
    });
});

setTimeout(function () {
    var typed = new Typed(".typing", {
        strings: ["Student.", "Learner.", "Developer."],
        typeSpeed: 80,
        backSpeed: 80,
        loop: true,
    });
}, 855);

setTimeout(() => {
    expButtons.forEach((button) => {
        button.addEventListener("click", () => {
            expButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            const width = button.offsetWidth;
            companyPill.style.width = `${width}px`;
            const rect = button.getBoundingClientRect();
            const offsetLeft = rect.left - company.getBoundingClientRect().left;
            companyPill.style.left = `${offsetLeft}px`;
        });
    });
    expButtons[0].click();
}, 4250);

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

navSlide();
