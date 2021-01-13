const userEmailPhoneInput = document.querySelector('#user-email-phone');
const loginButton = document.querySelector('#button-login');
const registerButton = document.querySelector('#facebook-register');

function showEmailPhoneAlert() {
  const emailPhone = userEmailPhoneInput.value;
  alert(emailPhone);
}

window.onload = function () {
  loginButton.addEventListener('click', showEmailPhoneAlert);
};
