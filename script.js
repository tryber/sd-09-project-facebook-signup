const loginBtn = document.querySelector('#button-login');
const emailPhoneValue = document.querySelector('#user-email-phone');

loginBtn.addEventListener('click', function () {
  alert(emailPhoneValue.value);
});

const registerBtn = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('.input');

registerBtn.addEventListener('click', function () {
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      inputs[index].value = 'Campos inválidos';
    }
  }
});
