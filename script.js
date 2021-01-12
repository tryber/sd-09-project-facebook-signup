const submitBtn = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');
const registerBtn = document.getElementById('facebook-register');
const formInputs = document.querySelectorAll('.right-content input');

function loginAlert() {
  alert(userData.value);
}

function notNullRegisterValidation() {
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].type === 'text' && formInputs[index].value === '') {
      alert('Campos inválidos');
      return;
    }
  }
}

submitBtn.addEventListener('click', loginAlert);
registerBtn.addEventListener('click', notNullRegisterValidation);
