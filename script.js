function alertEmailOrPhone() {
  const inputEmailPhone = document.querySelector('#button-login');
  const inputUserName = document.querySelector('#user-email-phone');
  inputEmailPhone.addEventListener('click', function () {
    alert(inputUserName.value);
  });
}

function showTextInput() {
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.name = 'gender-custom';
  inputField.placeholder = 'Gênero (opcional)';

  var inputFieldDiv = document.querySelector('#custom-gender-text');
  inputFieldDiv.appendChild(inputField)
}

function addListeners() {
  var personalizadoButton = document.querySelector('#personalizado-button');
  personalizadoButton.addEventListener('click',showTextInput);
}

addListeners();
alertEmailOrPhone();
