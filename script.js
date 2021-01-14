const loginButton = document.getElementById('button-login');
// const signupButton = document.getElementById('facebook-register')
// const inputs = document.get
function alertEmail() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
// function checkInputs() {
// }
loginButton.addEventListener('click', alertEmail);
