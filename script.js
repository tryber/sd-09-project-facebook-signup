const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email');
const inputPw = document.getElementById('user-password');

function addlistener(obj, func) {
  obj.addEventListener('click', func);
}

function alertMsgLogIn() {
  alert(`Email: ${inputEmail.value} | Senha: ${inputPw.value}`);
}

addlistener(btnEntrar, alertMsgLogIn);
