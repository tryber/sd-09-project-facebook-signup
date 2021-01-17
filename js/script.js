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
  const nameField = document.querySelectorAll('.fullname input');
  for (let index = 0; index < nameField.length; index += 1) {
    if (nameField[index].value !== '') {
      return true
    } return false
  }
}

function checkIfPhoneIsFilled() {
  const phoneField = document.getElementById('phone-input');
  if (phoneField.value !== '') {
    return true
  } return false
}

function checkIfPasswordIsFilled() {
  const passwordField = document.getElementById('password-input');
  if (passwordField.value !== '') {
    return true
  } return false
}
function checkIfBirthdateIsFilled() {
  const birthdateField = document.getElementById('birthdate-input');
  if (birthdateField.value !== '') {
    return true
  } return false
}

function checkIfRadioBtnIsChecked() {
  if (document.querySelectorAll('.gender input')[0].checked === false && document.querySelectorAll('.gender input')[1].checked === false && document.querySelectorAll('.gender input')[2].checked === false) {
    return false
  } return true
}

function addParagraphoToWarn() {
  const rightForm = document.querySelector('.right-form');
  const validationWarn = document.getElementById('validation-warn');
  if (validationWarn === null) {
    const pToWarn = document.createElement('p');
    pToWarn.innerText = 'Campos inválidos';
    pToWarn.id = 'validation-warn';
    rightForm.appendChild(pToWarn);
  }
}

function removeParagraphWarn() {
  const rightForm = document.querySelector('.right-form');
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
  } else {
    removeParagraphWarn();
  }
}

btnFacebookRegister.addEventListener('click', allTheChecksOfTheForm);
