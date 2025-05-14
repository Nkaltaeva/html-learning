// slider
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
