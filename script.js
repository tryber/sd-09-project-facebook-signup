const userEmailPhoneInput = document.querySelector('#user-email-phone');
const loginButton = document.querySelector('#button-login');
const registerForm = document.querySelector('.right-content form');
const registerButton = document.querySelector('#facebook-register');

function showEmailPhoneAlert() {
  const emailPhone = userEmailPhoneInput.value;
  alert(emailPhone);
}

function pushIfUniqueIn(item, targetArray) {
  const invalidNames = ['', 'gender-custom'];
  const isValid = !targetArray.includes(item) && !invalidNames.includes(item);
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
  message: 'Campos inválidos',
  class: 'fail',
  hide() {
    this.element.innerHTML = '';
    this.element.classList.remove(this.class);
  },
  show() {
    this.element.innerHTML = alertMessage.message;
    this.element.classList.add(this.class);
  },
};

function checkRegisterFields(event) {
  event.preventDefault();
  alertMessage.hide();
  const fieldsNames = getFieldNamesFrom(registerForm.elements);
  const formValuesObject = getValuesFromForm(fieldsNames, registerForm);
  const hasEmptyValues = checkForEmptyValuesIn(formValuesObject);
  if (hasEmptyValues) {
    alertMessage.show();
  } else {
    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = '';
    const greetingsMessage = document.createElement('h1');
    greetingsMessage.innerText = `Olá, ${formValuesObject.firstname} ${formValuesObject.lastname}`;
    rightContent.appendChild(greetingsMessage);
    // Adiciona email ou telefone
    const emailOrPhoneEl = document.createElement('p');
    emailOrPhoneEl.innerText = formValuesObject.phone_email;
    rightContent.appendChild(emailOrPhoneEl);
    // Adiciona data de aniversario
    const birthdateEl = document.createElement('p');
    birthdateEl.innerText = formValuesObject.birthdate;
    rightContent.appendChild(birthdateEl);
  }
}

function setLoginButtonEvent() {
  loginButton.addEventListener('click', showEmailPhoneAlert);
}

function setRegisterButtonEvent() {
  registerButton.addEventListener('click', checkRegisterFields);
}

function setCustomGenderField() {
  const customGenderRadio = document.querySelector('#gender-container');
  const customGenderInput = document.querySelector('#gender-custom');
  customGenderRadio.addEventListener('change', (event) => {
    if (event.target.id === 'gender-personalized') {
      customGenderInput.classList.remove('hide');
    } else {
      customGenderInput.classList.add('hide');
    }
  });
}

window.onload = function () {
  setCustomGenderField();
  setLoginButtonEvent();
  setRegisterButtonEvent();
};
