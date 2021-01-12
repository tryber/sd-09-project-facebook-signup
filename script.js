let errorMsg = 0;
function windowAlert() {
  const inputUser = document.querySelector('#user-email-phone');
  alert(inputUser.value);
}

const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', windowAlert);

function errorChecker() {
  const input = document.querySelectorAll('.form-register input');
  for (let index = 0; index < input.length - 3; index += 1) {
    if (input[index].value === '') {
      errorMsg += 1;
    }
  }
}

function validate(event) {
  event.preventDefault();
  const input = document.querySelectorAll('.form-register input');
  errorChecker();
  if (!input[5].checked && !input[6].checked && !input[7].checked) {
    errorMsg += 1;
  }
  if (errorMsg > 0) {
    alert('Campos inválidos');
    errorMsg = 0;
  }
}

const btnRegister = document.querySelector('#facebook-register');
btnRegister.addEventListener('click', validate);
