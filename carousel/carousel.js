const carousel = document.querySelector(".carousel");
const slide = document.querySelector(".carousel-watch-photo");

function handleCarouselMove(positive = true) {
  const slideWidth = slide.clientWidth;
  carousel.scrollLeft = positive
    ? carousel.scrollLeft + slideWidth
    : carousel.scrollLeft - slideWidth;
}
