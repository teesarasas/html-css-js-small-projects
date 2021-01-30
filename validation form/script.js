const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cfPassword = document.getElementById('cfPassword')


//show input error message
function error(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function success(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//validation email
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email.value)) {
    success(email)
  } else {
    error(email, 'email is not valid')
  }
}

//get filed name 
const getFieldName = (field) => {
  return field.id.charAt(0).toUpperCase() + field.id.slice(1);
}

//check required function
const checkRequired = inputArr => {
  inputArr.forEach(input => {
    if (input.value.trim() === '') {
      error(input, `${getFieldName(input)} is required`)
    } else {
      success(input)
    }
  })
}

const checkLength = (input, min, max) => {
  if(input.value.length < min) {
    error(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    error(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    success(input);
  }
}

//check if password matches 
const passwordMatch = (password, cfPassword) => {
  if(password !== cfPassword) return error(cfPassword, 'password do not match')
  
}

form.addEventListener('submit', function(e) {
  e.preventDefault()

  checkRequired([username, password, email, cfPassword])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  validateEmail(email)
})