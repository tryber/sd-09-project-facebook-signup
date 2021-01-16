const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const maleRadio = document.querySelector('#male');
const femaleRadio = document.querySelector('#female');
const customGenderRadio = document.querySelector('#gender-custom');
const customGenderInput = document.querySelector('#custom-gender-input');
const userName = document.querySelector('.fullname');
const personalData = document.querySelector('.personal-data');
const genderRadioButtons = document.querySelectorAll('.radio');
const submitButton = document.querySelector('#facebook-register');
const invalidMessage = document.querySelector('.invalid-message');
const rightContent = document.querySelector('.right-content');
const mainContent = document.querySelector('.main-content');
let userFirstName = document.querySelector('.fullname input:nth-child(1)');
let userLastName = document.querySelector('.fullname input:nth-child(2)');
let userPhoneEmail = document.querySelector('.personal-data input:nth-child(1)');
let userBirthdate = document.querySelector('.personal-data input:nth-child(3)');


buttonLogin.addEventListener('click', function () {
  alert(emailOrPhone.value);
});

maleRadio.addEventListener('click', function () {
  customGenderInput.classList.add('isVisible');
});

femaleRadio.addEventListener('click', function () {
  customGenderInput.classList.add('isVisible');
});

customGenderRadio.addEventListener('click', function () {
  customGenderInput.classList.remove('isVisible');
});

function checkGender() {
  if (genderRadioButtons[2].checked && document.getElementById('custom-gender-input').value.length !== '') return true;
  if (genderRadioButtons[0].checked || genderRadioButtons[1].checked) return true;

  return false;
}

function informInvalidField() {
  invalidMessage.classList.remove('isVisible');
}

function checkUserName() {
  for (let i = 0; i < userName.length; i += 1) {
    if (userName[i].value === '') return false;
  }
  return true;
}

function checkPersonalData() {
  for (let i = 0; i < personalData.length; i += 1) {
    if (personalData[i].value === '') return false;
  }
  return true;
}
function checkInputs(event) {
  if (checkUserName() && checkPersonalData() && checkGender()) {
    event.preventDefault();
    replaceRightContent();
  } else {
    event.preventDefault();
    informInvalidField();
  }
}

function findGender() {
  const female = document.querySelector('#female');
  const male = document.querySelector('#male');
  const genderCustom = document.querySelector('#gender-custom');
  let gender = '';

  if (female.checked) gender = female.value;
  if (male.checked) gender = male.value;
  if (genderCustom.checked) gender = genderCustom.value;
  return gender;
}

function replaceRightContent() {
  rightContent.classList.add('isVisible');
  let newContent = document.createElement('div');
  newContent.innerText = `Olá, ${userFirstName.value} ${userLastName.value}
  ${userPhoneEmail.value}
  ${userBirthdate.value}  
  ${findGender()}`;
  mainContent.appendChild(newContent);
}

submitButton.addEventListener('click', checkInputs);
