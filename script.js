const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

const facebookRegister = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('input');
facebookRegister.addEventListener('click', function (event) {
  event.preventDefault();
  for (let index = 2; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      inputs[index].value = 'Campos inválidos';
    }
  }
});
