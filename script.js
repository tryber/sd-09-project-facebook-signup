function windowAlert() {
  const inputUser = document.querySelector('#user-email-phone');
  const inputPassword = document.querySelector('#user-password');
  alert(`Usuário: ${inputUser.value}, Senha: ${inputPassword.value}`);
}

const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', windowAlert);
