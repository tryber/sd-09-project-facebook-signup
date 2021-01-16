const submitBtn = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');
const registerBtn = document.getElementById('facebook-register');
const formInputs = document.querySelectorAll('.right-content input');
const formAlert = document.querySelector('.right-content form p');
const uniqueGender = document.getElementById('unique');
const rightContent = document.querySelector('.right-content');

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
  event.preventDefault();
  let isTextValid = true;
  let isGenderValid = false;
  isTextValid = inputTextValidation();
  isGenderValid = inputGenderValidation();
  if (!isTextValid || !isGenderValid) {
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

function readNewContent() {
  const newContent = [];
  for (let index = 0; index < formInputs.length; index += 1) {
    if (index < 3) {
      newContent[index] = formInputs[index].value;
    } else if (index === 4) {
      newContent[3] = formInputs[index].value;
    } else if (formInputs[index].checked) {
      newContent[4] = formInputs[index].value;
    }
  }
  return newContent;
}

function createNewContent(newContent) {
  let newSection = document.createElement('p');
  newSection.innerText = `Olá, ${newContent[0]} ${newContent[1]}`;
  rightContent.appendChild(newSection);
  for (let index = 2; index < newContent.length; index += 1) {
    newSection = document.createElement('p');
    newSection.innerText = newContent[index];
    rightContent.appendChild(newSection);
  }
}

function replaceRightContent(event) {
  notNullRegisterValidation(event);
  if (formAlert.innerText === 'Campos inválidos') {
    return;
  }
  const newContent = readNewContent();
  while (rightContent.children.length > 0) {
    rightContent.removeChild(rightContent.children[rightContent.children.length - 1]);
  }
  createNewContent(newContent);
}

submitBtn.addEventListener('click', loginAlert);
uniqueGender.addEventListener('change', customGender);
registerBtn.addEventListener('click', replaceRightContent);
