// Selectors
const buttonLogin = document.querySelector('#button-login');
const buttonRegister = document.querySelector('#facebook-register');
const emailInput = document.querySelector('#user-email-phone');
const registerForm = document.querySelector('#register-form');
// Function

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

// Events listener

buttonLogin.addEventListener('click', alertEmailInput);
buttonRegister.addEventListener('click', validateRegister);
