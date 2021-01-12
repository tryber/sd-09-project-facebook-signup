function buttonAlert() {
  const getInputEmail = document.querySelector('#user-email-phone');
  alert(getInputEmail.value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', buttonAlert);
