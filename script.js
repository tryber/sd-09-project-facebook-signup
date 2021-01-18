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
const userFirstName = document.querySelector('.fullname input:nth-child(1)');
const userLastName = document.querySelector('.fullname input:nth-child(2)');
const userPhoneEmail = document.querySelector('.personal-data input:nth-child(1)');
const userBirthdate = document.querySelector('.personal-data input:nth-child(4)');


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
  const newContent = document.createElement('div');
  newContent.className = 'right-content';
  newContent.innerText = `Olá, ${userFirstName.value} ${userLastName.value}
  ${userPhoneEmail.value}
  ${userBirthdate.value}
  ${findGender()}`;
  mainContent.appendChild(newContent);
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
submitButton.addEventListener('click', checkInputs);

// Masks for forms inputs
function mask(i) {
  const v = i.value;
  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }
  i.setAttribute('maxlength', '10');
  if (v.length === 2 || v.length === 5) i.value += '/';
}
document.querySelector('#input-birthdate').oninput = function() { mask (this); };
