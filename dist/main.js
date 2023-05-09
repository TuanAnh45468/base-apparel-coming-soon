const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const iconError = document.getElementById("errorIcon");

function checkEmail(event) {
  event.preventDefault();
  const emailValue = emailInput.value;

  if (!validator.isEmail(emailValue)) {
    emailError.classList.remove("hidden");
    iconError.classList.remove("hidden");
    emailInput.classList.add("border-soft-red");
    emailInput.classList.add("border-[2px]");
    return;
  }
  alert("Submitted");
  location.reload();
}
