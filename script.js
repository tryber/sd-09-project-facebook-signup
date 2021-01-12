const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', function () {
  const inputEmailPhone = document.querySelector('#user-email-phone').value;
  alert(inputEmailPhone);
});