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
    gender.innerHTML = '<input placeholder="Gênero (opcional)" name="gender-custom">';
  });
}
checkPersonalizado();
