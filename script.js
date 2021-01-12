function alertLogin() {
  const buttonLogin = document.getElementById('button-login');
  const inputLogin = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', function () {
    const loginValue = inputLogin.value;
    alert(loginValue);
  });
}

function stopDefault(event) {
  event.preventDefault();
}

const validateCamps = document.querySelectorAll('.cadastro input');
function registerValidate() {
  for (let index = 0; index < validateCamps.length; index += 1) {
    if (validateCamps[index].value === '') {
      const div = document.createElement('div');
      div.innerHTML = 'Campos inválidos';
      document.querySelector('form.cadastro').appendChild(div);
    }
  }
}

function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', stopDefault);
  registerButton.addEventListener('click', registerValidate);
}

// function checkEmail() {
//   const email = document.querySelector('.input-login');
//   let insertedEmail = email.value;
//   const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
//   if (!emailFormat && insertedEmail.length) {
//     email.value = '';
//     alert('email inválido');
//     return false;
//   }
//   return emailFormat
// }

window.onload = function () {
  alertLogin();
  listeners();
};
