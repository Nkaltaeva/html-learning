document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let circleContainer = document.querySelector(".circle");

  // квардаты переключатели
  items.forEach((_, index) => {
    let crl = document.createElement("span");
    crl.classList.add("crl");
    if (index === 0) crl.classList.add("active");
    crl.dataset.index = index;
    circleContainer.appendChild(crl);
  });

  let circle = document.querySelectorAll(".crl");

  // Активный слайд
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      circle[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        circle[idx].classList.add("active");
      }
    });
  }

  // кнопки переключения
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  // действие квадратов переклюсения
  circle.forEach((crl) => {
    crl.addEventListener("click", () => {
      let index = parseInt(crl.dataset.index);
      showItem(index);
    });
  });
});
