const primaryHeader = document.querySelector(".primary-header");
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav-links");
const expButtons = document.querySelectorAll(".buttons");
const companyPill = document.querySelector(".company-pill");
const company = document.querySelector(".company");
const detailContainer = document.querySelector(".details");
const details = document.querySelectorAll(".details-content");

var prevScrollPos = window.scrollY;
var threshold = window.innerWidth > 768 ? 30 : 50;

window.onscroll = () => {
    var currentScrollPos = window.scrollY;
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
    });
};

window.addEventListener("click", (event) => {
    if (
        !primaryNav.contains(event.target) &&
        !navToggle.contains(event.target)
    ) {
        navToggle.classList.remove("is-active");
        primaryNav.classList.remove("is-active");
        document.body.classList.remove("overflow-hidden");
        document.querySelector("main").classList.remove("blur");
    }
});

window.addEventListener("touchstart", (event) => {
    if (
        !primaryNav.contains(event.target) &&
        !navToggle.contains(event.target)
    ) {
        navToggle.classList.remove("is-active");
        primaryNav.classList.remove("is-active");
        document.body.classList.remove("overflow-hidden");
        document.querySelector("main").classList.remove("blur");
    }
});

navLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        document.querySelector(target).scrollIntoView({
            behavior: "smooth",
        });
        navToggle.classList.remove("is-active");
        primaryNav.classList.remove("is-active");
        document.body.classList.remove("overflow-hidden");
        document.querySelector("main").classList.remove("blur");
    });
});

setTimeout(() => {
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
            const detailsId = button.dataset.details;
            const currentDetails = document.querySelector(`#${detailsId}`);

            details.forEach((detail) => {
                detail.classList.remove("active");
            });

            currentDetails.classList.add("active");
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
