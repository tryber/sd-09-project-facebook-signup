function showLoginData(evt) {
  evt.preventDefault();
  const loginEmailPhone = document.getElementById('user-email-phone').value;
  alert(loginEmailPhone);
}

function createInputField(evt) {
  const radioColumn = document.getElementById('radios-father');
  const otherGenderInput = document.getElementById('otherGender');
  if (evt.target.id === 'other' && otherGenderInput === null) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'otherGender';
    newInput.placeholder = 'Gênero (opcional)';
    newInput.name = 'gender-custom';
    newInput.required = true;
    radioColumn.appendChild(newInput);
  }

  if (evt.target.id !== 'other' && otherGenderInput !== null) {
    radioColumn.removeChild(otherGenderInput);
  }
}

function removeMessage(messageElement, messageElementFather) {
  if (messageElement != null) {
    messageElementFather.removeChild(messageElement);
  }
}

function showMessage(messageType, message) {
  const mainForm = document.querySelector('.main-form');
  const newMessage = document.createElement('div');
  const previousErrorMessage = document.getElementById('error-message');
  removeMessage(previousErrorMessage, mainForm);
  const previousSuccessMessage = document.getElementById('success-message');
  removeMessage(previousSuccessMessage, mainForm);
  newMessage.classList.add('message');
  newMessage.classList.add(messageType);
  newMessage.id = `${messageType}-message`;
  newMessage.innerText = message;
  mainForm.insertBefore(newMessage, mainForm.firstChild);
}

function checkRadioButtons(input) {
  switch (true) {
    case (input[0].id === 'female' && (input[0].checked === false && input[1].checked === false && input[2].checked === false)):
      break;
    case (input[1].id === 'male' && (input[1].checked === false && input[0].checked === false && input[2].checked === false)):
      break;
    case (input[2].id === 'other' && (input[2].checked === false && input[1].checked === false && input[0].checked === false)):
      break;
    default:
      return 0;
  }
  return 1;
}

function checkInputedData(input) {
  switch (true) {
    case (input.id === 'first-name' && input.value === ''):
      input.focus();
      break;
    case (input.id === 'last-name' && input.value === ''):
      input.focus();
      break;
    case (input.id === 'user-email-phone-apply' && input.value === ''):
      input.focus();
      break;
    case (input.id === 'password' && input.value === ''):
      input.focus();
      break;
    case (input.id === 'otherGender' && input.value === ''):
      input.focus();
      break;
    case (input.id === 'birthdate' && input.value === ''):
      input.focus();
      break;
    default:
      return 0;
  }
  return 1;
}

function setDataIntoDiv(childElement, fatherElement) {
  fatherElement.appendChild(childElement);
}

function showUserData(inputs) {
  const rightContent = document.querySelector('.right-content');
  const nameElement = document.createElement('p');
  rightContent.innerText = '';
  nameElement.innerText = `Olá, ${inputs[0].value} ${inputs[1].value}`;
  setDataIntoDiv(nameElement, rightContent);
  for (let index = 2; index < inputs.length; index += 1) {
    const elementCreator = document.createElement('p');
    elementCreator.innerText = `${inputs[index].name}: ${inputs[index].value} `;
    if (inputs[index].name !== 'gender' && inputs[index].name !== 'password') {
      setDataIntoDiv(elementCreator, rightContent);
    } else if (inputs[index].checked === true) {
      setDataIntoDiv(elementCreator, rightContent);
    }
  }
}

function validateInputs(evt) {
  evt.preventDefault();
  const mainForm = document.querySelector('.main-form');
  const inputs = mainForm.querySelectorAll('input');
  const radios = mainForm.querySelectorAll('.radios');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].className !== 'radios' && checkInputedData(inputs[index])) {
      showMessage('error', 'Campos inválidos');
      return `Erro no campo ${inputs[index].id}.`;
    } else if (inputs[index].className === 'radios' && checkRadioButtons(radios)) {
      showMessage('error', 'Campos inválidos');
      radios[0].focus();
      return 'Erro no campo Gênero.';
    }
  }
  showMessage('success', 'Tudo certo');
  showUserData(inputs);
  return 'Sucesso';
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);
const GenderRadio = document.getElementById('radios');
GenderRadio.addEventListener('click', createInputField);
const btnApply = document.getElementById('facebook-register');
btnApply.addEventListener('click', validateInputs);
