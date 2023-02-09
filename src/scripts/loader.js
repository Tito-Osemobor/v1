const loader = document.querySelector(".loader-wrapper");
const content = document.querySelector(".content");
const brick = document.querySelector(".hex-brick");

setTimeout(function () {
  loader.style.display = "none";
  content.style.display = "block";
  document.body.classList.remove("overflow-hidden");
}, 4000);