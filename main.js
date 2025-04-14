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


// 자격증란
const tabs = document.querySelectorAll('.year-tabs span');
const certLists = document.querySelectorAll('.cert-list');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
  
      const year = tab.dataset.year;
  
      // 모든 자격증 리스트 숨기기
      certLists.forEach(list => {
        list.style.display = 'none';
        list.classList.remove('active');
      });
  
      // 선택된 연도만 보여주기기
      const activeList = document.getElementById(`cert-${year}`);
      if (activeList) {
        activeList.style.display = 'flex';
        setTimeout(() => {
          activeList.classList.add('active');
        }, 10);
      }
    });
  });