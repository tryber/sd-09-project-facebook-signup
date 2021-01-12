btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);

function showLoginData(evt) {
  evt.preventDefault();
  const loginEmailPhone = document.getElementById('user-email-phone').value;
  alert(loginEmailPhone);
}
