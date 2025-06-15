// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// 헤더 메뉴 설정
const btn = document.querySelector(".navbar_btn");
const menu = document.querySelector(".navbar_menu");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
});

// 창 크기 변경 시 드롭다운 접기
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("active");
  }
});

// ------------------------------------

//fade-in
document.addEventListener("DOMContentLoaded", function () {
  const fadeEls = document.querySelectorAll("#aboutme .fade-in, #contact .fade-in, #work .fade-in, #team .fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // 다시 사라지게 함
      }
    });
  }, {
    threshold: 0.1,
  });

  fadeEls.forEach((el) => observer.observe(el));
});



// ------------------------------------

//modal
const $btnOpen = document.querySelectorAll(".btn-open");
const $modalBg = document.querySelectorAll(".modal-background");
const $btnClose = document.querySelectorAll(".btn-close");

$btnOpen.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    $modalBg[i].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

$btnClose.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    $modalBg[i].style.display = "none";
    document.body.style.overflow = "unset";
  });
});


//modal - musical slide
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 300;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 6) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 5) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

