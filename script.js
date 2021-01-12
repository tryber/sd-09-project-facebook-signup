const loginButton = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');
const loginField = document.getElementById('user-email-phone');

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert(loginField.value);
});

registerButton.addEventListener('click', (evt) => {

});
