const loginButton = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');
const loginField = document.getElementById('user-email-phone');
const customGender = document.getElementById('custom');
const registerForm = document.querySelector('.new-account');

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert(loginField.value);
});

registerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
});

customGender.addEventListener('click', () => {
  const customGenderInput = document.createElement('input');
  customGenderInput.type = 'text';
  customGenderInput.name = 'gender-custom';
  customGenderInput.placeholder = 'Gênero (opcional)';
  registerForm.insertBefore(customGenderInput, registerButton);
});
