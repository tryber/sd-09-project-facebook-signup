// Selectors
const buttonLogin = document.querySelector('#button-login');
const buttonRegister = document.querySelector('#facebook-register');
const emailInput = document.querySelector('#user-email-phone');
const registerForm = document.querySelector('#register-form');

// Selectors gender
const genderCustomRadio = document.querySelector('#custom');
const femaleRadio = document.querySelector('#female');
const maleRadio = document.querySelector('#male');
const genderCustomInput = document.querySelector('#gender-custom');

// Functions
function alertEmailInput() {
  const valueEmailInput = emailInput.value;
  alert(valueEmailInput);
}

function validateRegister(event) {
  event.preventDefault();
  const errorText = document.querySelector('#error-message');
  const inputs = registerForm.querySelectorAll('[required]');
  for (let index = 0; index < inputs.length; index += 1) {
    if (!inputs[index].checkValidity()) {
      errorText.innerText = 'Campos inválidos';
    } else {
      errorText.innerText = '';
    }
  }
}

function genderCustom() {
  if (genderCustomRadio.checked) {
    genderCustomInput.classList.remove('gender-custom-input');
  }
}

function genderFemale() {
  if (femaleRadio.checked) {
    genderCustomInput.classList.add('gender-custom-input');
  }
}

function genderMale() {
  if (maleRadio.checked) {
    genderCustomInput.classList.add('gender-custom-input');
  }
}

// Events listener
femaleRadio.addEventListener('click', genderFemale);
maleRadio.addEventListener('click', genderMale);
genderCustomRadio.addEventListener('click', genderCustom);
buttonLogin.addEventListener('click', alertEmailInput);
buttonRegister.addEventListener('click', validateRegister);
