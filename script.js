// Button Alert
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});

const buttonSubmit = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('.validation');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(inputs)
});