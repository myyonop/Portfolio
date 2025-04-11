const btn = document.querySelector(".navbar_btn");
const menu = document.querySelector(".navbar_menu");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
});