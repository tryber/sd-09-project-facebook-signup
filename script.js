const buttonLogin = document.querySelector('#button-login');
const emailOrPhone = document.querySelector('#user-email-phone');
const maleRadio = document.querySelector('#male');
const femaleRadio = document.querySelector('#female');
const customGenderRadio = document.querySelector('#gender-custom');
const customGenderInput = document.querySelector('#custom-gender-input');

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
