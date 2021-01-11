const loginEmail = document.querySelector('#user-email-phone');
const loginSenha = document.querySelector('#user-password');
const buttonLogin = document.querySelector('#button-login');

function getLogin() {
  buttonLogin.addEventListener('click', function() {
    window.alert(loginEmail.value);
  })
}

getLogin();
