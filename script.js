function alerta() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

window.onload = function () {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', alerta);
};
