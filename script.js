const loginButton = document.querySelector('#button-login');
const loginInput = document.querySelector('#user-email-phone');

function showAlert() {
  loginButton.addEventListener('click', function () {
    alert(loginInput.value);
  });
}
showAlert();
