const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const inputPw = document.getElementById('user-password');

function addlistener(obj, func) {
  obj.addEventListener('click', func);
}

function alertMsgLogIn() {
  alert(inputEmail.value);
}

addlistener(btnEntrar, alertMsgLogIn);
