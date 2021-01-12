const loginButton = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');
const loginField = document.getElementById('user-email-phone');
const customGenderInput = document.getElementById('other-gender');
const customGender = document.getElementById('custom');
const registerForm = document.querySelector('.new-account');
const maleGender = document.getElementById('male');
const femaleGender = document.getElementById('female');

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert(loginField.value);
});

registerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
});

customGender.addEventListener('click', () => {
  customGenderInput.style.display = 'block';
});

femaleGender.addEventListener('click', () => {
  customGenderInput.style.display = 'none';
});

maleGender.addEventListener('click', () => {
  customGenderInput.style.display = 'none';
})
