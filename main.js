const btn = document.querySelector(".navbar_btn");
const menu = document.querySelector(".navbar_menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});