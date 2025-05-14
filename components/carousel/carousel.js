function safetyGetNode(rootNode, selector) {
  const result = rootNode.querySelector(selector);
  if (!result)
    throw new Error(
      `In rootNode ${rootNode} threr is no existing node for selector ${selector}`
    );

  return result;
}

function initCarousel(carouselRootNode) {
  const carouselTrackNode = safetyGetNode(carouselRootNode, ".carousel");

  const carouselArrowButton = {
    left: carouselRootNode.querySelector(
      ".carousel-arrow button.carousel-arrow-left"
    ),
    right: carouselRootNode.querySelector(
      ".carousel-arrow button.carousel-arrow-right"
    ),
  };

  // 1. это можно задавать вручную или брать из ноды, как у меня - как лучше делать зависит от задачи, проще писать вручную, но от этого меньше гибкости
  const slideWidth = carouselRootNode
    .querySelector(".carousel .carousel-watch-photo")
    .getBoundingClientRect().width;

  // тоже самое, что для 1.
  const GAP = 20;
  let shift = slideWidth + GAP;
  let leftSlideIndex = 0;

  // тоже самое, что для 1.
  const slidedAmount = carouselTrackNode.querySelectorAll(
    ".carousel-watch-photo"
  ).length;
  const VISIBILE_SLIDES = 2;

  function moveSlide(direction) {
    console.log(leftSlideIndex);
    if (direction === "carousel-arrow-left") {
      leftSlideIndex -= 1;
      if (leftSlideIndex < 0) {
        leftSlideIndex = slidedAmount - VISIBILE_SLIDES;
      }
    } else {
      leftSlideIndex += 1;
      if (leftSlideIndex + VISIBILE_SLIDES > slidedAmount) {
        leftSlideIndex = 0;
      }
    }

    carouselTrackNode.style = `transform: translateX(${
      -leftSlideIndex * shift
    }px)`;
  }

  carouselArrowButton.left.addEventListener("click", () => {
    moveSlide("carousel-arrow-left");
  });
  carouselArrowButton.right.addEventListener("click", () => {
    moveSlide("carousel-arrow-right");
  });
  window.addEventListener("resize", (event) => {
    // 1. это можно задавать вручную или брать из ноды, как у меня - как лучше делать зависит от задачи, проще писать вручную, но от этого меньше гибкости
    const slideWidth = carouselRootNode
      .querySelector(".carousel .carousel-watch-photo")
      .getBoundingClientRect().width;
    shift = slideWidth + GAP;

    console.log({ shift });
    carouselTrackNode.style = `transform: translateX(${
      -leftSlideIndex * shift
    }px)`;
  });
}
const carouselNode = safetyGetNode(document, ".carousel-watch");

initCarousel(carouselNode);
