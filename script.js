/* Funcoes */

/* Valida Ano */
function yearIsValid(year) {
  const nowDate = new Date();
  let returnValue = true;
  if (year < 1900 || year > nowDate.getFullYear()) {
    returnValue = false;
  }
  return returnValue;
}

/* Valida mes */
function mounthIsValid(day, mounth) {
  let returnValue = true;
  if (mounth < 1 || mounth > 12) {
    returnValue = false;
  }
  return returnValue;
}

/* Retorna numero de dias do mês */
function daysOfMounth(mounth, year) {
  const arrayMounth31 = [1, 3, 5, 7, 8, 10, 12];
  const arrayMounth30 = [4, 6, 9, 11];
  let returnValue;
  if (arrayMounth31.includes(mounth)) {
    returnValue = 31;
  } else if (arrayMounth30.includes(mounth)) {
    returnValue = 30;
  } else if ((year % 4) === 0) {
    returnValue = 29;
  } else {
    returnValue = 28;
  }
  return returnValue;
}

/* Valida dia */
function dayIsValid(day, mounth, year) {
  const days = daysOfMounth(mounth, year);
  let returnValue = true;
  if (day < 1 || day > days) {
    returnValue = false;
  }
  return returnValue;
}

/* Validacao da data */
function dateIsValid(date) {
  const arrayDate = date.split('/');
  const numberDay = parseInt(arrayDate[0], 10);
  const numberMounth = parseInt(arrayDate[1], 10);
  const numberYear = parseInt(arrayDate[2], 10);
  let returnValue = true;
  if (isNaN(numberDay) || isNaN(numberMounth) || isNaN(numberYear)) {
    returnValue = false;
  } else if (!yearIsValid(numberYear) || !mounthIsValid(numberMounth) || !dayIsValid(numberDay)) {
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
  const registerForm = document.querySelector('#register-form');
  if (document.querySelector('#invalid-fields') == null) {
    const addMessage = document.createElement('p');
    addMessage.id = 'invalid-fields';
    addMessage.innerText = 'Campos inválidos';
    addMessage.style.color = 'rgb(255, 0, 0)';
    registerForm.insertBefore(addMessage, button);
  }
}

/* Retorna o genero */
function getGender() {
  const nameGender = document.getElementsByName('gender');
  let returnValue;
  for (let index = 0; index < nameGender.length; index += 1) {
    if (nameGender[index].checked) {
      returnValue = nameGender[index].value;
    }
  }
  return returnValue;
}

/* Exibir dados de registro */
function displayRegister(firstName, lastName, phoneEmail, birthDate, gender) {
  const rightContentChild = document.querySelector('.right-content').children;
  for (let index = 0; index <= rightContentChild.length; index += 1) {
    rightContentChild[index].remove();
  }
  document.querySelector('.quick-easy').remove();
  const rightContent = document.querySelector('.right-content');
  let addRegister = document.createElement('p')
  addRegister.innerText = `Olá,  ${firstName} ${lastName}`;
  addRegister.style.fontSize = '25px';
  rightContent.appendChild(addRegister);
  addRegister = document.createElement('p');
  addRegister.innerText = phoneEmail;
  addRegister.style.fontSize = '25px';
  rightContent.appendChild(addRegister);
  addRegister = document.createElement('p');
  addRegister.innerText = birthDate;
  addRegister.style.fontSize = '25px';
  rightContent.appendChild(addRegister);
  addRegister = document.createElement('p');
  addRegister.innerText = gender;
  addRegister.style.fontSize = '25px';
  rightContent.appendChild(addRegister);
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
  if (!dateIsValid(formBirthDate.value)) {
    formValid = false;
  }
  if (!genderIsValid(formFemale.checked, formMale.checked, formCustom.checked)) {
    formValid = false;
  }
  if (!formValid) {
    invalidFields(buttonRegister);
  } else {
    displayRegister(formFirstName.value,formLastName.value, formPhoneEmail.value,
    formBirthDate.value, getGender());
  }
  event.preventDefault();
});

/* Inclui campo para genero personalizado */
formCustom.addEventListener('click', function () {
  if (document.querySelector('#id-gender-custom') == null) {
    const registerForm = document.querySelector('#register-form');
    const addGenderCustom = document.createElement('input');
    addGenderCustom.id = 'id-gender-custom';
    addGenderCustom.name = 'gender-custom';
    addGenderCustom.placeholder = 'Gênero (opcional)';
    addGenderCustom.type = 'text';
    addGenderCustom.style.display = 'block';
    registerForm.insertBefore(addGenderCustom, buttonRegister);
  }
});

/* Inclui campo para genero personalizado */
formFemale.addEventListener('click', function () {
  if (document.querySelector('#id-gender-custom') !== null) {
    document.querySelector('#id-gender-custom').remove();
  }
});

formMale.addEventListener('click', function () {
  if (document.querySelector('#id-gender-custom') !== null) {
    document.querySelector('#id-gender-custom').remove();
  }
});
