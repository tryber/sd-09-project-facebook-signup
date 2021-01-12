const button = document.querySelector('#button-login');
const inputName = document.querySelector('#user-email-phone');

button.addEventListener('click', () => alert(inputName.value));
