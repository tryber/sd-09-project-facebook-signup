const buttonLogin = document.getElementById('button-login');
// const buttonRegister = document.getElementById('facebook-register');


buttonLogin.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone');
  window.alert(userEmail.value);
});
