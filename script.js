const buttonLogin = document.getElementById('button-login');
// const buttonRegister = document.getElementById('facebook-register');
const genderCustom = document.getElementById('other');
const formGroup = document.querySelector('.right-content .form-group');

buttonLogin.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone');
  window.alert(userEmail.value);
});

function createInputText () {
  const createInputText = document.createElement('input');
  createInputText.className = 'gender-custom';
  createInputText.name = 'gender-custom';
  createInputText.placeholder = 'Gênero (opcional)';

  return createInputText
}

genderCustom.addEventListener('click', function () {
  const register = document.querySelector('.form-group .gender-custom')
  if (register === null){
    formGroup.appendChild(createInputText());
  }
});
