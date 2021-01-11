// Selectors
const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const customOption = document.querySelector('#custom-option');
const inputsLabels = document.querySelector('.inputs-labels');
// Function

function alertEmailInput() {
  const valueEmailInput = emailInput.value;
  alert(valueEmailInput);
}

// Events listener

buttonLogin.addEventListener('click', alertEmailInput);

function plusOption() {
  const optionCustom = document.createElement('input');
  optionCustom.type = 'text';
  optionCustom.name = 'gender-custom';
  optionCustom.placeholder = 'Gênero (opcional)';
  inputsLabels.appendChild(optionCustom);
}
customOption.addEventListener('click', plusOption);
