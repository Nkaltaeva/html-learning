// Получаем переменные
let arrowLeft = document.getElementById("arrow-left"),
  arrowRight = document.getElementById("arrow-right"),
  sliderImg = document.getElementById("carousel-window"),
  dotsWrap = document.getElementsByClassName("main_dots-navigation")[0],
  dots = document.getElementsByClassName("dot"),
  left = 0,
  imgWidth = 520;

// Функция перелистывания слайдов
slideTo = (direction) => {
  if (direction == "left") left -= imgWidth;
  if (direction == "right") left += imgWidth;
  if (left < -1040) left = 0;
  if (left > 0) left = -1040;

  for (let item of dots) {
    item.classList.remove("active");
  }
  switch (left) {
    case 0:
      dots[0].classList.add("active");
      break;
    case -520:
      dots[1].classList.add("active");
      break;
    case -1040:
      dots[2].classList.add("active");
      break;
  }
  sliderImg.style.left = left + "px";
};

// Добавляем события клика на кнопки
arrowLeft.addEventListener("click", () => {
  clearInterval(timerId);
  slideTo("left");
});

arrowRight.addEventListener("click", () => {
  clearInterval(timerId);
  slideTo("right");
});

// Добавляем события клика на точки
dotsWrap.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("dot")) {
    for (let item of dots) {
      item.classList.remove("active");
    }
    target.classList.add("active");
    switch (target) {
      case dots[0]:
        left = 0;
        break;
      case dots[1]:
        left = -520;
        break;
      case dots[2]:
        left = -1040;
        break;
      case dots[3]:
        left = -1560;
        break;
      case dots[4]:
        left = -2080;
        break;
    }
    sliderImg.style.left = left + "px";
  }
});
