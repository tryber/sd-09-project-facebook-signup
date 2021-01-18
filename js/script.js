const nameField = document.querySelectorAll('.fullname input');
const phoneField = document.getElementById('phone-input');
const passwordField = document.getElementById('password-input');
const birthdateField = document.getElementById('birthdate-input');
const rightForm = document.querySelector('.right-form');

document.querySelector('#button-login').addEventListener('click', function (event) {
  event.preventDefault();
  const userEmailPhone = document.getElementById('user-email-phone').value;
  alert(userEmailPhone);
});

function removeTextArea() {
  const genderContainer = document.querySelector('.gender').children;
  for (let index = 0; index < genderContainer.length; index += 1) {
    if (genderContainer[index].className === 'textarea-gender') {
      const removedItem = genderContainer[index];
      genderContainer.removeChild(removedItem);
    }
  }
}

const binaryGendersArray = document.getElementsByClassName('binary-genders');
for (let index = 0; index < binaryGendersArray; index += 1) {
  binaryGendersArray[index].addEventListener('click', removeTextArea);
}

function createTextArea() {
  const genderContainer = document.querySelector('.gender');
  if (document.querySelector('.gender').lastElementChild.className === 'textarea-gender') {
    const lastElement = document.querySelector('.gender').lastElementChild;
    genderContainer.removeChild(lastElement);
  }
  const textarea = document.createElement('input');
  textarea.type = 'textarea';
  textarea.name = 'gender-custom';
  textarea.className = 'textarea-gender';
  textarea.placeholder = 'Gênero (opcional)';
  textarea.required = true;
  textarea.style.width = '100%';
  genderContainer.appendChild(textarea);
}

const inputOtherGender = document.getElementsByClassName('other-gender')[0];

inputOtherGender.addEventListener('click', createTextArea);

const btnFacebookRegister = document.getElementById('facebook-register');

function checkIfNameIsFilled() {
  for (let index = 0; index < nameField.length; index += 1) {
    if (nameField[index].value !== '') {
      return true;
    }
  }
  return false;
}

function checkIfPhoneIsFilled() {
  if (phoneField.value !== '') {
    return true;
  }
  return false;
}

function checkIfPasswordIsFilled() {
  if (passwordField.value !== '') {
    return true;
  }
  return false;
}
function checkIfBirthdateIsFilled() {
  if (birthdateField.value !== '') {
    return true;
  }
  return false;
}

function checkIfRadioBtnIsChecked() {
  if (document.querySelectorAll('.gender input')[0].checked === false && document.querySelectorAll('.gender input')[1].checked === false && document.querySelectorAll('.gender input')[2].checked === false) {
    return false;
  }
  return true;
}

function addParagraphoToWarn() {
  const validationWarn = document.getElementById('validation-warn');
  if (validationWarn === null) {
    const pToWarn = document.createElement('p');
    pToWarn.innerText = 'Campos inválidos';
    pToWarn.id = 'validation-warn';
    rightForm.appendChild(pToWarn);
  }
}

function removeParagraphWarn() {
  const validationWarn = document.getElementById('validation-warn');
  if (validationWarn !== null) {
    rightForm.removeChild(validationWarn);
  }
}

function allTheChecksOfTheForm(event) {
  event.preventDefault();
  if (checkIfNameIsFilled() === false ||
  checkIfPhoneIsFilled() === false ||
  checkIfPasswordIsFilled() === false ||
  checkIfBirthdateIsFilled() === false ||
  checkIfRadioBtnIsChecked() === false) {
    addParagraphoToWarn();
  }
  removeParagraphWarn();
  return true;
}

btnFacebookRegister.addEventListener('click', allTheChecksOfTheForm);

function addRadioCheckedToAVariable() {
  if (document.querySelectorAll('.gender input')[0].checked === true) {
    return 'Feminino';
  } else if (document.querySelectorAll('.gender input')[1].checked === true) {
    return 'Masculino';
  } else if (document.querySelectorAll('.gender input')[2].checked === true) {
    return 'Personalizado';
  }
  return 'Por favor, selecione uma das opções.';
}

function addInformations() {
  const mainContent = document.querySelector('.main-content');
  const rightContent = document.querySelector('.right-content');
  const rightContentChilds = document.querySelector('.right-content').children;
  const newDiv = document.createElement('div');

  if (allTheChecksOfTheForm(event) === true) {
    newDiv.className = 'div-with-data';
    mainContent.appendChild(newDiv);
    let paragraph = document.createElement('p');
    paragraph.innerText = `Olá, ${document.querySelectorAll('.fullname input')[0].value} ${document.querySelectorAll('.fullname input')[1].value}`;
    newDiv.appendChild(paragraph);
    paragraph = document.createElement('p');
    paragraph.innerText = `Seu número/email é ${phoneField.value}`;
    newDiv.appendChild(paragraph);
    paragraph = document.createElement('p');
    paragraph.innerText = birthdateField.value;
    newDiv.appendChild(paragraph);
    paragraph = document.createElement('p');
    paragraph.innerText = addRadioCheckedToAVariable();
    newDiv.appendChild(paragraph);
    for (let index = 0; index < rightContentChilds.length; index += 1) {
      rightContent.removeChild(rightContentChilds[index]);
      index -= 1;
    }
  }
}
btnFacebookRegister.addEventListener('click', addInformations);
