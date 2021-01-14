/* Funcoes */

/* Valida Ano */
function yearIsValid(year) {
  const nowDate = new Date();
  let returnValue = true;
  console.log(parseInt(year));
  if (isNaN(parseInt(year)) || parseInt(year) < 1990 || parseInt(year) > nowDate.getFullYear()) {
    returnValue = false;
  }
  return returnValue;
}

/* Valida mes */
function mounthIsValid(mounth) {
  let returnValue = true;
  if (isNaN(parseInt(mounth) || parseInt(mounth) < 1 || parseInt(mounth) > 12)) {
    returnValue = false;
  }
  return returnValue;
}

/* Validacao da data */
function dateIsValid(date) {
  const arrayDate = date.split('/');
  let returnValue = true;
  if (!yearIsValid(arrayDate[2])) {
    returnValue = false;
  }
  if (!mounthIsValid(arrayDate[1])) {
    returnValue = false;
  }
  return returnValue;
}

/* Validacao do genero */
function genderIsValid(gFemale, gMale, gCustom) {
  return gFemale || gMale || gCustom;
}

/* Funcao para exibir mensagem - Registos inválidos */
function invalidFields(button) {
  const formMessage = document.querySelector('#message-item');
  const registerForm = document.querySelector('#register-form');
  if (document.querySelector('#invalid-fields') == null) {
    const addMessage = document.createElement('p');
    addMessage.id = 'invalid-fields';
    addMessage.innerText = 'Campos inválidos';
    addMessage.style.color = 'rgb(255, 0, 0)';
    registerForm.insertBefore(addMessage, button);
  }
}

/* Inicio do codigo */

const inputEmailPhone = document.querySelector('#user-email-phone');
const buttonSender = document.querySelector('#button-login');
const buttonRegister = document.querySelector('#facebook-register');
const formFirstName = document.querySelector('#id-firstname');
const formLastName = document.querySelector('#id-lastname');
const formPhoneEmail = document.querySelector('#id-phone_email');
const formPassword = document.querySelector('#id-password');
const formBirthDate = document.querySelector('#id-birthdate');
const formFemale = document.querySelector('#id-female');
const formMale = document.querySelector('#id-male');
const formCustom = document.querySelector('#id-custom');

/* Exibe e-mail-telefone */
buttonSender.addEventListener('click', function (event) {
  if (inputEmailPhone.value.length > 0) {
    alert(inputEmailPhone.value);
  }
  event.preventDefault();
});

/* Valida dados cadastrais */
buttonRegister.addEventListener('click', function (event) {
  let formValid = true;
  if (formFirstName.value.length < 1) {
    formValid = false;
  }
  if (formLastName.value.length < 1) {
    formValid = false;
  }
  if (formPhoneEmail.value.length < 1 || !formPhoneEmail.value.includes('@')) {
    formValid = false;
  }
  if (formPassword.value.length < 1) {
    formValid = false;
  }
  if (dateIsValid(formBirthDate.value)) {
    formValid = false;
  }
  if (!genderIsValid(formFemale.checked, formMale.checked, formCustom.checked)) {
    formValid = false;
  }
  if (!formValid) {
    invalidFields(buttonRegister);
  }
  event.preventDefault();
});
