const loader = document.querySelector(".loader-wrapper");

setTimeout(function () {
    // loader.style.display = "none";
    document.body.style.overflowY = "scroll";
    AOS.init();
}, 4000);

var fadeInInterval, fadeOutInterval;

window.addEventListener("load", function () {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    loader.fadeIn = function (timing) {
        var newValue = 0;
        loader.style.display = "block";
        loader.style.opacity = 0;
        fadeInInterval = setInterval(function () {
            if (newValue < 1) {
                newValue += 0.01;
            } else if (newValue === 1) {
                clearInterval(fadeInInterval);
            }
            loader.style.opacity = newValue;
        }, timing);
    };
    loader.fadeIn(6);
});

setTimeout (function () {
    clearInterval(fadeInInterval);
    clearInterval(fadeOutInterval);
    loader.fadeOut = function (timing) {
        var newValue = 1;
        loader.style.opacity = 1;
        fadeOutInterval = setInterval(function () {
            if (newValue > 0) {
                newValue -= 0.01;
            } else if (newValue < 0) {
                loader.style.opacity = 0;
                loader.style.display = "none";
                clearInterval(fadeOutInterval);
            }
            loader.style.opacity = newValue;
        }, timing);
    };
    loader.fadeOut(6);
    loader.style.display = "none";
}, 4000);
