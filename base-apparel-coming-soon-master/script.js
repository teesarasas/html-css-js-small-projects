const email = document.getElementById("email")
const form = document.getElementById("form")

function error() {
  const formControl = input.parentElement;
  setTimeout(() => {
    formControl.classList.add(error);
  }, 5000);

}

function validateEmail(email) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(regEx.test(email.value)) {
    return
  } else {
    error()
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateEmail(email)
})







