const loginButton = document.getElementById('button-login');
function alertEmail() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
loginButton.addEventListener('click', alertEmail);
