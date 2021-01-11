function alertButton() {
  alert(info.value);
}
const botao = document.getElementById('button-login');
botao.addEventListener('click', alertButton);

const info = document.getElementById('user-email-phone');
