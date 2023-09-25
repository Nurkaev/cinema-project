const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let totalPrice = 0;
let cost = 800;

const menu_button = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const video = document.querySelector(".film-trailer");

schemeSVG.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        totalPrice = cost;

        totalPriceTag.textContent = (totalPrice * schemeSVG.querySelectorAll(".active").length);
    }
});

menu_button.addEventListener("click", (event) => {
    menu.classList.toggle("is-open");
});

video.addEventListener("click", (event) => {
    Fancybox.show([
        {
          src: "https://www.youtube.com/watch?v=tDCH7-lteAc&pp=ygU20LzRgdGC0LjRgtC10LvQuCDQstC-0LnQvdCwINCx0LXRgdC60L7QvdC10YfQvdC-0YHRgtC4",
          type: "video",
          ratio: 16 / 10,
          width: 1280,
          height: 720,
        },
      ]);
});