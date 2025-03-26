// slider

function openNav() {
  document.getElementById("bigSliderBar-content").style.display = "block";
  document.getElementById("smallSliderBar-content").style.display = "none";
}

function closeNav() {
  document.getElementById("bigSliderBar-content").style.display = "none";
  document.getElementById("smallSliderBar-content").style.display = "block";
}

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
