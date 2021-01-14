function showLoginData(evt) {
  evt.preventDefault();
  const loginEmailPhone = document.getElementById('user-email-phone').value;
  alert(loginEmailPhone);
}

function createInputField(evt) {
  let radioColumn = document.getElementById('radios-father');
  let otherGenderInput = document.getElementById('otherGender');
  if(evt.target.id === 'other' && otherGenderInput === null) {
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'otherGender';
    newInput.placeholder = 'Gênero (opcional)';
    newInput.name = 'gender-custom';
    radioColumn.appendChild(newInput);
  }
  
  if(evt.target.id != 'other' && otherGenderInput != null) {
    radioColumn.removeChild(otherGenderInput);
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

function removeMessage(messageElement, messageElementFather) {
  if(messageElement != null){
    messageElementFather.removeChild(messageElement);
  }
}

function validateInputs(evt) {
  evt.preventDefault();
  const inputs = document.querySelector('.main-form');
  inputs.querySelectorAll('.main-form > input');
  const condition = true;
  for (let index = 0; index < inputs.length; index += 1) {
    switch (condition) {
      case (inputs[index].id === 'first-name' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        return 1;
      case (inputs[index].id === 'last-name' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        return 1;
      case (inputs[index].id === 'user-email-phone-apply' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        return 1;
      case (inputs[index].id === 'password' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        return 1;
      case (inputs[index].id === 'female' && (inputs[index].checked === false && inputs[index + 1].checked === false && inputs[index + 2].checked === false)):
        showMessage('error', `The field ${inputs[index].name} must have one option checked at least.`);
        return 1;
      case (inputs[index].id === 'male' && (inputs[index].checked === false && inputs[index - 1].checked === false && inputs[index + 1].checked === false)):
        showMessage('error', `The field ${inputs[index].name} must have one option checked at least.`);
        return 1;
      case (inputs[index].id === 'other' && (inputs[index].checked === false && inputs[index - 1].checked === false && inputs[index - 2].checked === false)):
        showMessage('error', `The field ${inputs[index].name} must have one option checked at least.`);
        return 1;
      case (inputs[index].id === 'otherGender' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        return 1;
      case (inputs[index].id === 'birthdate' && inputs[index].value === ''):
        showMessage('error', `The field ${inputs[index].id} must be filled.`);
        return 1;
      default:
        break;
    }
  }

  showMessage('success', 'All ok!');
  return 0;

}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);
const GenderRadio = document.getElementById('radios');
GenderRadio.addEventListener('click', createInputField);
const btnApply = document.getElementById('facebook-register');
btnApply.addEventListener('click', validateInputs);