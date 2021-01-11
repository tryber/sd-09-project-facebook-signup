// Button Alert
const buttonSubmit = document.querySelector('#button-login');
buttonSubmit.addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});