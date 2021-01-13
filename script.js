const userEmailPhoneInput = document.querySelector('#user-email-phone');
const loginButton = document.querySelector('#button-login');
const registerForm = document.querySelector('.right-content form');
const registerButton = document.querySelector('#facebook-register');

function showEmailPhoneAlert() {
  const emailPhone = userEmailPhoneInput.value;
  alert(emailPhone);
}

function pushIfUniqueIn(item, targetArray) {
  const isValid = !targetArray.includes(item) && item !== ''
  if (isValid) {
    targetArray.push(item);
  }
}

function getFieldNamesFrom(elements) {
  const fieldsNames = [];
  for (let index = 0; index < elements.length; index += 1) {
    const fieldName = elements[index].name;
    pushIfUniqueIn(fieldName, fieldsNames);
  }
  return fieldsNames;
}

function getValuesFromForm(arrayOfNames, form) {
  const outputObject = {};
  const formCollectionElements = form.elements;
  for (let index = 0; index < arrayOfNames.length; index += 1) {
    const fieldName = arrayOfNames[index];
    const fieldValue = formCollectionElements.namedItem(fieldName).value;
    outputObject[fieldName] = fieldValue;
  }
  return outputObject;
}

function checkForEmptyValuesIn(formValuesObject) {
  const values = Object.values(formValuesObject);
  for (let index = 0; index < values.length; index += 1) {
    if (values[index] === '') {
      return true;
    }
  }
  return false;
}

const alertMessage = {
  element: document.querySelector('#alert-msg'),
  hide: () => {
    alertMessage.element.innerHTML = '';
    alertMessage.element.classList.remove('fail');
  },
  show: () => {
    alertMessage.element.innerHTML = 'Campos inválidos';
    alertMessage.element.classList.add('fail');
  },
}

function checkRegisterFields(event) {
  event.preventDefault();
  alertMessage.hide();
  const fieldsNames = getFieldNamesFrom(registerForm.elements);
  const formValuesObject = getValuesFromForm(fieldsNames, registerForm);
  const hasEmptyValues = checkForEmptyValuesIn(formValuesObject);
  if (hasEmptyValues) {
    alertMessage.show();
  }
}

window.onload = function () {
  loginButton.addEventListener('click', showEmailPhoneAlert);
  registerButton.addEventListener('click', checkRegisterFields);
};
