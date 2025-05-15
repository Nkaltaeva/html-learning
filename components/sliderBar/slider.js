//новый
// const closeBtnBig = document.querySelector(".sliderBar .sliderBar-button");
// closeBtnBig.addEventListener("click", function () {
//   document.getElementById("closeBtnNav").style.display = "none";
//   document.getElementById("openBtnNav").style.display = "block";
// });

// const openBtnSmall = document.querySelector(".sliderBar .sliderBar-button-ope");
// openBtnSmall.addEventListener("click", function () {
//   document.getElementById("closeBtnNav").style.display = "block";
//   document.getElementById("openBtnNav").style.display = "none";
// });

const closeBtnNav = document.getElementById("closeBtnNav");
closeBtnNav.addEventListener("click", closeNav);

const openBtnNav = document.getElementById("openBtnNav");
openBtnNav.addEventListener("click", openNav);

function openNav() {
  document.getElementById("bigCloseBtnNav").style.display = "block";
  document.getElementById("openBtnNav").style.display = "none";
}
function closeNav() {
  document.getElementById("bigCloseBtnNav").style.display = "none";
  document.getElementById("openBtnNav").style.display = "block";
}
