function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function () {
    const msg = document.querySelector('#user-email-phone').value;
    alert(msg);
  });
}

window.onload = function () {
  login();
};
