function buttonAlertLogin() {
  const buttonLogin = document.querySelector('#button-login');
  const valueEmail = document.querySelector('#user-email-phone');
  buttonLogin.addEventListener('click', function () {
    alert(valueEmail.value);
  });
}
buttonAlertLogin();

function checkPersonalizado() {
  const outers = document.querySelector('#personalizado');
  const gender = document.querySelector('.radio-buttons');
  outers.addEventListener('click', function () {
    const newInput = document.createElement('input');
    gender.appendChild(newInput);
  });
}
checkPersonalizado();
