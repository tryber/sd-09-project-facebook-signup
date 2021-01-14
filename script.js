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

function checkRadioButtons(inputs, index) {
  switch (true) {
    case (inputs[index].id === 'female' && (inputs[index].checked === false && inputs[index + 1].checked === false && inputs[index + 2].checked === false)):
      break;
    case (inputs[index].id === 'male' && (inputs[index].checked === false && inputs[index - 1].checked === false && inputs[index + 1].checked === false)):
      break;
    case (inputs[index].id === 'other' && (inputs[index].checked === false && inputs[index - 1].checked === false && inputs[index - 2].checked === false)):
      break;
    default:
      return 0;
  }
  showMessage('error', `The field ${inputs[index].name} must have one option checked at least.`);
  return 1;
}

function checkInputedData(inputs, index) {
  switch (true) {
    case (inputs[index].id === 'first-name' && inputs[index].value === ''):
      showMessage('error', `The field ${inputs[index].id} must be filled.`);
      break;
    case (inputs[index].id === 'last-name' && inputs[index].value === ''):
      showMessage('error', `The field ${inputs[index].id} must be filled.`);
      break;
    case (inputs[index].id === 'user-email-phone-apply' && inputs[index].value === ''):
      showMessage('error', `The field ${inputs[index].id} must be filled.`);
      break;
      case (inputs[index].id === 'password' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        break;
      case (checkRadioButtons(inputs, index)):
        break;
    case (inputs[index].id === 'otherGender' && inputs[index].value === ''):
      showMessage('error', `The field ${inputs[index].id} must be filled.`);
      break;
    case (inputs[index].id === 'birthdate' && inputs[index].value === ''):
      showMessage('error', `The field ${inputs[index].id} must be filled.`);
      break;
    default:
      showMessage('success', 'All ok!');
  }
  return 1;
}

function showUserData(inputs) {
  inputs.querySelector('.password');
}

function validateInputs(evt) {
  evt.preventDefault();
  const inputs = document.querySelector('.main-form');
  inputs.querySelectorAll('.main-form > input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (checkInputedData(inputs, index)) {
      break;
    }
  }
  showUserData(inputs);
  /** Genadi, chame a sua funcao para mostrar os dados aqui! */
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);
const GenderRadio = document.getElementById('radios');
GenderRadio.addEventListener('click', createInputField);
const btnApply = document.getElementById('facebook-register');
btnApply.addEventListener('click', validateInputs);
