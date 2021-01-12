const buttonLogin = document.getElementById('button-login');
// const buttonRegister = document.getElementById('facebook-register');
const genderCustom = document.getElementById('other');
const formGroup = document.querySelector('.right-content .form-group');

buttonLogin.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone');
  window.alert(userEmail.value);
});

function createInputText() {
  const createInput = document.createElement('input');
  createInput.className = 'gender-custom';
  createInput.name = 'gender-custom';
  createInput.placeholder = 'Gênero (opcional)';

  return createInput;
}

genderCustom.addEventListener('click', function () {
  const register = document.querySelector('.form-group .gender-custom');
  if (register === null) {
    formGroup.appendChild(createInputText());
  }
});
