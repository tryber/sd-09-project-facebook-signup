function alertEmailOrPhone() {
  const inputEmailPhone = document.querySelector('#button-login');
  const inputUserName = document.querySelector('#user-email-phone');
  inputEmailPhone.addEventListener('click', function () {
    alert(inputUserName.value);
  });
}

function showTextInput() {
  const inputFieldDiv = document.querySelector('#custom-gender-text');
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.name = 'gender-custom';
  inputField.placeholder = 'Gênero (opcional)';

  inputFieldDiv.appendChild(inputField);
}

function showFieldsAreInvalid() {
  const formData = document.querySelector('#new-account-form');
  const div = document.createElement('div');
  div.textContent = 'Campos inválidos';
  formData.appendChild(div);
}

function validateGender() {
  const radiosButtons = document.querySelectorAll('#radio-buttons-form > input');
  for (let index = 0; radiosButtons.length > index; index += 1) {
    if (radiosButtons[index].checked === true) {
      return true;
    }
  }
  showFieldsAreInvalid();
  return false;
}

function validateRegistration() {
  const formData = document.querySelectorAll('#new-account-form > input');
  for (let index = 0; formData.length > index; index += 1) {
    if (formData[index].value === '') {
      showFieldsAreInvalid();
      return;
    }
  }
  validateGender();
}

function addListeners() {
  const personalizadoButton = document.querySelector('#personalizado-button');
  personalizadoButton.addEventListener('click', showTextInput);
  const registrationButton = document.querySelector('#facebook-register');
  registrationButton.addEventListener('click', validateRegistration);
}

addListeners();
alertEmailOrPhone();
