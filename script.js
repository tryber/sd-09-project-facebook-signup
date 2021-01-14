const button = document.querySelector('#button-login');
const inputName = document.querySelector('#user-email-phone');
button.addEventListener('click', () => alert(inputName.value));

function validateTextInputs() {
  const inputText = document.querySelectorAll('input');
  let isTextValid = true;
  for (let index = 0; index < inputText.length; index += 1) {
    if (!inputText[index].value) {
      isTextValid = false;
    }
  }
  return isTextValid;
}

function validateRadioInput() {
  const radioInput = document.querySelectorAll('input[type=radio]');
  let isRadioValid = false;
  for (let index = 0; index < radioInput.length; index += 1) {
    if (radioInput[index].checked) {
      isRadioValid = true;
    }
  }
  return isRadioValid;
}

function validateForm(event) {
  event.preventDefault();
  const invalidField = document.querySelector('#invalid-fields');
  const isValidText = validateTextInputs();
  const isValidRadio = validateRadioInput();
  if (!isValidText || !isValidRadio) {
    invalidField.innerText = 'Campos inválidos';
  } else {
    invalidField.innerText = '';
  }
}

function getUserFormText() {
  const inputs = document.querySelectorAll('.right-content input[type=text]');
  const newUserInfos = [];
  for (let index = 0; index < inputs.length; index += 1) {
    newUserInfos.push(inputs[index].value);
    // if(index === 5){
    //   continue;
    // }
  }
  return newUserInfos;
}

const customGender = document.querySelector('#unique');
const custom = document.querySelector('#custom-gender');

function openCustomGenderInput() {
  if (customGender.classList.contains('checked')) {
    return;
  }
  const newGender = document.createElement('input');
  newGender.type = 'text';
  newGender.id = 'new-gender';
  newGender.name = 'gender-custom';
  newGender.placeholder = 'Gênero (opcional)';
  newGender.required = true;
  custom.appendChild(newGender);
  customGender.classList = 'checked';
  customGender.classList.add('form-info');
}

customGender.addEventListener('click', openCustomGenderInput);

function getUserGender() {
  const genderInput = document.querySelectorAll('input[type=radio]');
  let userGenderInfo = '';
  for (let index = 0; index < genderInput.length; index += 1) {
    if (genderInput[index].checked) {
      userGenderInfo = genderInput[index].value;
    }
  }
  return userGenderInfo;
}

function newUserInfo(array, string) {
  const rightContent = document.querySelector('.right-content');
  const greetings = document.createElement('p');
  greetings.innerText = `Olá, ${array[0]} ${array[1]}`;
  rightContent.appendChild(greetings);
  for (let index = 2; index < array.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = array[index];
    rightContent.appendChild(p);
  }
  const gender = document.createElement('p');
  gender.innerText = string;
  rightContent.appendChild(gender);
}

function clearRightContent() {
  const rightContent = document.querySelector('.right-content');
  const rightLength = rightContent.children.length;
  for (let index = 0; index < rightLength; index += 1) {
    rightContent.firstElementChild.remove();
  }
}

const submitForm = document.querySelector('#facebook-register');
submitForm.addEventListener('click', function (event) {
  validateForm(event);
  const userInfo = getUserFormText();
  const userGender = getUserGender();
  if (validateTextInputs() && validateRadioInput()) {
    clearRightContent();
    newUserInfo(userInfo, userGender);
  }
});
