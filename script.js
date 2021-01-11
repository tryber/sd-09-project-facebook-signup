const buttonLogin = document.querySelector('#button-login');
const userEmailPhoneInput = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', function () {
  const userEmailPhoneInputValue = userEmailPhoneInput.value;
  alert(userEmailPhoneInputValue);
});
