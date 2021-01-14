const loginButton = document.getElementById('button-login');
const signupButton = document.getElementById('facebook-register');
const inputs = document.getElementById('register');
const input = inputs.getElementsByTagName('input');
function alertEmail() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
// function checkInputs() {
//   for(index = 0; i < )
// }
loginButton.addEventListener('click', alertEmail);
signupButton.addEventListener('click', checkInputs);
