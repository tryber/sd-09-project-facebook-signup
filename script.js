const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const buttonFacebookRegister = document.querySelector('#facebook-register');
const radioCustom = document.querySelector('#custom');
const registerForm = document.querySelector('#register-form');
// Faz a mensagem de erro caso os campos não estejam preenchidos
buttonFacebookRegister.addEventListener('click', () => {
  const completeForm = document.querySelectorAll('#register-form input');
  for (let index = 0; index < completeForm.length; index += 1) {
    if (completeForm[index].value === '') {
      const erroMensage = document.createElement('p');
      erroMensage.innerText = 'Campos Inválidos';
      erroMensage.style.color = 'red';
      erroMensage.style.fontSize = '15px';
      return registerForm.appendChild(erroMensage);
    }
  }
  return 0;
});
// Faz o alert do email
buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  alert(userEmailPhone.value);
});

// faz o campo caso o gênero seja Personalizado

function createField() {
  const inputText = document.createElement('input');
  inputText.className = 'gender-custom';
  inputText.name = 'gender-custom';
  inputText.placeholder = 'Gênero (opcional)';

  return inputText;
}

radioCustom.addEventListener('click', () => {
  const customOptionGenre = document.querySelector('#register-form .gender-custom');

  if (customOptionGenre === null) {
    registerForm.appendChild(createField());
  }
});
