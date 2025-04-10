// scrollbar
const scrollTopBtnBig = document.getElementById("scroll-topBtnBig");
const scrollTopBtnSmall = document.getElementById("scroll-topBtnSmall");
const scrollElementDOM = document.documentElement;

scrollTopBtnBig.addEventListener("click", scrollBtn);
scrollTopBtnSmall.addEventListener("click", scrollBtn);
function scrollBtn() {
  scrollElementDOM.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
