function showFacebookLoginFormValue() {
  const userEmailPhoneInput = document.querySelector('#user-email-phone');

  window.alert(userEmailPhoneInput.value);
}

function listenToButtonLoginButton() {
  const buttonLoginButton = document.querySelector('#button-login');

  buttonLoginButton.addEventListener('click', showFacebookLoginFormValue);
}

listenToButtonLoginButton();

function validateTextInputs() {
  const textInputsNodeList = document.querySelectorAll(
    '.right-content input:not([type="radio"])',
  );
  let isValid = true;

  for (let i = 0; i < textInputsNodeList.length; i += 1) {
    if (!textInputsNodeList[i].value) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

function validateRadioButtons() {
  const checkedRadioButtonsNodeList = document.querySelectorAll(
    '.right-content input[ type = "radio" ]:checked',
  );
  let isValid = true;

  if (checkedRadioButtonsNodeList.length === 0) {
    isValid = false;
  }

  return isValid;
}
function validateInputs(event) {
  const isTextInputsValid = validateTextInputs();
  const isRadioButtonsValid = validateRadioButtons();
  const invalidMessageContainerDiv = document.querySelector(
    '.invalid-message-container',
  );

  if (isTextInputsValid === false || isRadioButtonsValid === false) {
    // window.alert('Campos inválidos');
    invalidMessageContainerDiv.style.visibility = 'visible';
  }

  if (isTextInputsValid === true && isRadioButtonsValid === true) {
    invalidMessageContainerDiv.style.visibility = 'hidden';
  }

  event.preventDefault();
}

function listenToFacebookRegisterButton() {
  const facebookRegisterButton = document.querySelector('#facebook-register');

  facebookRegisterButton.addEventListener('click', validateInputs);
}

listenToFacebookRegisterButton();

function listenToCustomRadioButton() {
  const customRadioButton = document.querySelector('#custom');

  customRadioButton.addEventListener('click', createGenderInputField);
}

function clearCustonGenderInputDiv() {
  const maleRadioButton = document.querySelector('#male');
  const femaleRadioButton = document.querySelector('#female');
  const custonGenderInputDiv = document.querySelector('.custom-gender-input');
  const textInput = document.querySelector('#gender-custom');

  custonGenderInputDiv.removeChild(textInput);

  maleRadioButton.removeEventListener('click', clearCustonGenderInputDiv);
  femaleRadioButton.removeEventListener('click', clearCustonGenderInputDiv);
  listenToCustomRadioButton();
}

function listenToGenderButtons() {
  const maleRadioButton = document.querySelector('#male');
  const femaleRadioButton = document.querySelector('#female');

  maleRadioButton.addEventListener('click', clearCustonGenderInputDiv);
  femaleRadioButton.addEventListener('click', clearCustonGenderInputDiv);
}

function createGenderInputField() {
  const custonGenderInputDiv = document.querySelector('.custom-gender-input');
  const textInput = document.createElement('input');
  const customRadioButton = document.querySelector('#custom');

  textInput.name = 'gender-custom';
  textInput.id = 'gender-custom';
  textInput.placeholder = 'Gênero (opcional)';

  custonGenderInputDiv.appendChild(textInput);

  customRadioButton.removeEventListener('click', createGenderInputField);
  listenToGenderButtons();
}

listenToCustomRadioButton();
