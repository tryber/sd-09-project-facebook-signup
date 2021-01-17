const buttonLogin = document.querySelector('#button-login');
const loginName = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', () => alert(loginName.value));
