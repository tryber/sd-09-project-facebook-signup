const submitBtn = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');
const registerBtn = document.getElementById('facebook-register');
const formInputs = document.querySelectorAll('.right-content input');
const formAlert = document.querySelector('.right-content form p');
const uniqueGender = document.getElementById('unique');

function loginAlert() {
  alert(userData.value);
}

function inputTextValidation() {
  let isTextValid = true;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (!formInputs[index].value) {
      isTextValid = false;
    }
  }
  return isTextValid;
}

function inputGenderValidation() {
  let isGenderValid = false;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].checked) {
      isGenderValid = true;
    }
  }
  return isGenderValid;
}

function notNullRegisterValidation(event) {
  let isTextValid = true;
  let isGenderValid = false;
  isTextValid = inputTextValidation();
  isGenderValid = inputGenderValidation();
  if (!isTextValid || !isGenderValid) {
    event.preventDefault();
    formAlert.innerText = 'Campos inválidos';
  }
}

function customGender() {
  const genderInput = document.querySelector('.gender-input');
  const checkGender = document.getElementsByClassName('gender-custom');
  if (uniqueGender.checked) {
    if (checkGender.length > 0) {
      return;
    }
    const newGender = document.createElement('input');
    newGender.type = 'text';
    newGender.name = 'gender-custom';
    newGender.placeholder = 'Gênero (opcional)';
    newGender.className = 'gender-custom';
    genderInput.appendChild(newGender);
  }
}

submitBtn.addEventListener('click', loginAlert);
registerBtn.addEventListener('click', notNullRegisterValidation);
uniqueGender.addEventListener('change', customGender);
