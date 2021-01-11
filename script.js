const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function () {
  const typedEmail = document.getElementById('user-email-phone').value;
  alert(typedEmail);
});
