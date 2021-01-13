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

function isGenderValid() {
  const radiosButtons = document.querySelectorAll('#radio-buttons-form > input');
  for (let index = 0; radiosButtons.length > index; index += 1) {
    if (radiosButtons[index].checked === true) {
      return true;
    }
  }
  return false;
}

function isTextInputValid() {
  const formData = document.querySelectorAll('#new-account-form > input');
  for (let index = 0; formData.length > index; index += 1) {
    if (formData[index].value === '') {
      return false;
    }
  }
  return true;
}

function writeNewUserData() {
  const contentField = document.querySelector('#right-content');
  const formData = document.querySelectorAll('#new-account-form input');
  const name = formData[0].value;
  const lastName = formData[1].value;
  const celphoneOrEmail = formData[2].value;
  const gender = document.querySelector('#new-account-form input:checked').value;
  const birthday = formData[4].value;
  const wellcomeText = document.createElement('p');
  wellcomeText.textContent = `Olá, ${name} ${lastName}`;
  const celphoneOrEmailText = document.createElement('p');
  celphoneOrEmailText.textContent = `${celphoneOrEmail}`;
  const genderText = document.createElement('p');
  genderText.textContent = `${gender}`;
  const birthdayText = document.createElement('p');
  birthdayText.textContent = `${birthday}`;
  contentField.innerHTML = '';
  contentField.appendChild(wellcomeText);
  contentField.appendChild(celphoneOrEmailText);
  contentField.appendChild(birthdayText);
  contentField.appendChild(genderText);
}

function validateRegistration() {
  if (isTextInputValid() === false || isGenderValid() === false) {
    showFieldsAreInvalid();
    return;
  }
  writeNewUserData();
}


function addListeners() {
  const personalizadoButton = document.querySelector('#personalizado-button');
  personalizadoButton.addEventListener('click', showTextInput);
  const registrationButton = document.querySelector('#facebook-register');
  registrationButton.addEventListener('click', validateRegistration);
}

addListeners();
alertEmailOrPhone();
