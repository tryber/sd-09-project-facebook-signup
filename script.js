function windowAlert() {
  const inputUser = document.querySelector('#user-email-phone');
  alert(`Usuário: ${inputUser.value}`);
}

const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', windowAlert);
