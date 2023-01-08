const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar-links");
    let currentColor = "6c757d";

    burger.addEventListener("click", () => {
        nav.classList.toggle("navbar-links-active");
        document.body.classList.toggle("overflow-hidden");
        if (currentColor === "6c757d") {
            currentColor = "495057";
        } else {
            currentColor = "6c757d";
        }
        document.body.classList.add('transition');
        document.body.classList.toggle("overflow-hidden");
        document
            .querySelector('meta[name="theme-color"]')
            .setAttribute("content", currentColor);
    });
};

navSlide();
