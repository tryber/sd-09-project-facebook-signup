// Selectors
const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');

// Function

function alertEmailInput() {
  const valueEmailInput = emailInput.value;
  alert(valueEmailInput);
}

// Events listener

buttonLogin.addEventListener('click', alertEmailInput);
