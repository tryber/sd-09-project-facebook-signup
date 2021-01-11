const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');

buttonLogin.addEventListener('click', () => {
  alert(userEmailPhone.value);
});
