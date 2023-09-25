const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let totalPrice = 0;
let cost = 800;

schemeSVG.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        totalPrice = cost;

        totalPriceTag.textContent = (totalPrice * schemeSVG.querySelectorAll(".active").length);
    }
});
