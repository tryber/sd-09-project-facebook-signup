function alerta() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
  console.log('oi');
}

window.onload = function () {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', alerta);
};