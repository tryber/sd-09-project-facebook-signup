const userEmailPhoneInput = document.querySelector('#user-email-phone');
const buttonLogin = document.querySelector('#button-login');

function showEmailPhoneAlert() {
  const emailPhone = userEmailPhoneInput.value;
  alert(emailPhone);
}

window.onload = function () {
  buttonLogin.addEventListener('click', showEmailPhoneAlert);
};
