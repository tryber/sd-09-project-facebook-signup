const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const maleRadio = document.querySelector('#male');
const femaleRadio = document.querySelector('#female');
const customGenderRadio = document.querySelector('#gender-custom');
const customGenderInput = document.querySelector('#custom-gender-input');
const inputFields = document.querySelectorAll('input');
const genderRadioButtons = document.querySelectorAll('.radio');
const submitButton = document.querySelector('#facebook-register');
submitButton.addEventListener('click', validateForm);

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

function checkInputs() {
  for (let i = 2; i < inputFields.length; i += 1) {
    if (inputFields[i].value.length === 0) {
      return false;
    }
  }
}
function checkGender() {
  if (genderRadioButtons[2].checked && document.getElementById('custom-gender-input').value.length != 0) {
    return true;
  }
  if(genderRadioButtons[0].checked || genderRadioButtons[1].checked) {
    return true;
  }
}

function validateForm() {
  if(checkInputs === false || checkGender === false) {
    
  }

}
