const loginEmail = document.querySelector('#user-email-phone');
const buttonLogin = document.querySelector('#button-login');

function getLogin() {
  buttonLogin.addEventListener('click', function () {
    window.alert(loginEmail.value);
  });
}

getLogin();
