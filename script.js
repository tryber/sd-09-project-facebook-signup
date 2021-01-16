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
submitButton.addEventListener('click', checkInputs);

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

function checkInputs(event) {
  if (checkUserName() && checkPersonalData() && checkGender());
  else {
    event.preventDefault();
    informInvalidField();
  };
}
function checkGender() {
  if (genderRadioButtons[2].checked && document.getElementById('custom-gender-input').value.length !== '') {
    return true;
  }
  if(genderRadioButtons[0].checked || genderRadioButtons[1].checked) {
    return true;
  }
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
s