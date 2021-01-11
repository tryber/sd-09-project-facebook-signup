let btnEntrar = document.getElementById('button-login');
let inputEmail = document.getElementById('user-email');
let inputPw = document.getElementById('user-password');

function addlistener(obj, func) {
  obj.addEventListener('click', func);
}

function alertMsgLogIn() {
  alert('Email: ' + inputEmail.value + '\nSenha: ' + inputPw.value);
}

addlistener(btnEntrar, alertMsgLogIn);
