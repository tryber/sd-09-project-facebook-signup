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
    '.right-content input:not([ type = "radio" ])',
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

function showTheInfos() {
  const isTextInputsValid = validateTextInputs();
  const isRadioButtonsValid = validateRadioButtons();
  const infosToBeShown = document.querySelectorAll(
    '.info, input[ type = "radio"]:checked',
  );
  const greetingsDiv = document.querySelector('#greetings');
  const formInfosDiv = document.querySelector('#form-infos');
  const formSignupForm = document.querySelector('#form-signup');
  const mainHeader = document.querySelector('main h1');
  const quickEasy = document.querySelector('.quick-easy');

  if (isTextInputsValid === true && isRadioButtonsValid === true) {
    greetingsDiv.innerText = `Olá, ${infosToBeShown[0].value} ${infosToBeShown[1].value}.`;
    formInfosDiv.innerHTML = `<p>Celular ou e-mail: ${infosToBeShown[2].value}.</p><p>Data de nascimento: ${infosToBeShown[3].value}.</p>`;

    formSignupForm.style.display = 'none';
    mainHeader.style.display = 'none';
    quickEasy.style.display = 'none';
  }
}

function listenToFacebookRegisterButton() {
  const facebookRegisterButton = document.querySelector('#facebook-register');

  facebookRegisterButton.addEventListener('click', validateInputs);
  facebookRegisterButton.addEventListener('click', showTheInfos);
}

listenToFacebookRegisterButton();

function clearCustonGenderInputDiv() {
  const custonGenderInputDivChildNodeList = document.querySelector(
    '.custom-gender-input *',
  );
  const custonGenderInputDiv = document.querySelector('.custom-gender-input');
  const textInput = document.querySelector('#gender-custom');

  if (custonGenderInputDivChildNodeList) {
    custonGenderInputDiv.removeChild(textInput);
  }
}

function listenToGenderButtons() {
  const maleRadioButton = document.querySelector('#male');
  const femaleRadioButton = document.querySelector('#female');

  maleRadioButton.addEventListener('click', clearCustonGenderInputDiv);
  femaleRadioButton.addEventListener('click', clearCustonGenderInputDiv);
}

listenToGenderButtons();

function createGenderInputField() {
  const custonGenderInputDivChildNodeList = document.querySelectorAll(
    '.custom-gender-input *',
  );
  const custonGenderInputDiv = document.querySelector('.custom-gender-input');
  const textInput = document.createElement('input');

  textInput.name = 'gender-custom';
  textInput.id = 'gender-custom';
  textInput.placeholder = 'Gênero (opcional)';

  if (custonGenderInputDivChildNodeList.length === 0) {
    custonGenderInputDiv.appendChild(textInput);
  }
}

function listenToCustomRadioButton() {
  const customRadioButton = document.querySelector('#custom');

  customRadioButton.addEventListener('click', createGenderInputField);
}

listenToCustomRadioButton();
