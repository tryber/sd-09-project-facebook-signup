const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const buttonFacebookRegister = document.querySelector('#facebook-register');
const radioCustom = document.querySelector('#custom');

buttonFacebookRegister.addEventListener('click', () => {
  const completeForm = document.querySelectorAll('#register-form input');
  for (let index = 0; index < completeForm.length; index += 1) {
    if (completeForm[index].value === '') {
      return alert('Campos inválidos');
    }
  }
  return 0;
});

buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  alert(userEmailPhone.value);
});

function createField() {
  const inputText = document.createElement('input');
  inputText.className = 'gender-custom';
  inputText.name = 'gender-custom';
  inputText.placeholder = 'Gênero (opcional)';

  return inputText;
}

radioCustom.addEventListener('click', () => {
  const registerForm = document.querySelector('#register-form');
  const registerSon = document.querySelector('#register-form .gender-custom');

  if (registerSon === null) {
    registerForm.appendChild(createField());
  }
});
