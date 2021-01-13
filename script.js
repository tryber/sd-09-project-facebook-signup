function login() {
  const btn = document.querySelector('#button-login');
  const msg = document.querySelector('#user-email-phone-label');
  btn.addEventListener('click', function () {
    alert(msg.value);
    e.preventDefault();
  });
}

window.onload = function () {
  login();
};
