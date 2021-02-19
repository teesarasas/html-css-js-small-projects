const email = document.getElementById("email")
const form = document.getElementById("form")
const formControl = document.querySelector(".form__control")
const errorMessage = document.getElementsByTagName("small")

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInput();
})

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === '' || !validateEmail(emailValue)) {
    setError()
  } else {
    email.value = '';
  }
  setTimeout(removeError, 3000);
}

function setError() {
  formControl.classList.add("error")
}

function removeError() {
  formControl.classList.remove("error")
}







