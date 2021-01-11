const info = document.getElementById('user-email-phone');

function alertButton() {
  alert(info.value);
}
const botao = document.getElementById('button-login');
botao.addEventListener('click', alertButton);
