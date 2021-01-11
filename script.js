const btnEntrar = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');
const inputPw = document.getElementById('user-password');

console.log(btnEntrar);
function addlistener(obj, func) {
    obj.addEventListener('click', func);
}

function alertMsgLogIn() {
    alert('Email:'+ inputEmail.value +' | Senha:' + inputPw.value);
}

addlistener(btnEntrar, alertMsgLogIn);