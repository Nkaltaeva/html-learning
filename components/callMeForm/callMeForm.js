function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(input_str);
}

function validateForm(event) {
  var phone = document.querySelector(
    ".feedback-form .feedback-phone-input"
  ).value;
  if (!validatePhoneNumber(phone)) {
    document.getElementById("phone_error").classList.remove("hidden");
  } else {
    document.getElementById("phone_error").classList.add("hidden");
    alert("Спасибо! Ожидайте звонка от менеджара.");
  }
  event.preventDefault();
}

document
  .querySelector(".feedback-block .feedback-form")
  .addEventListener("submit", validateForm);
