let btnEntrar = document.getElementById('button-login');
let inputEmail = document.getElementById('user-email-phone');
let inputPw = document.getElementById('user-password');

console.log(btnEntrar);
function addlistener(obj, func) {
    obj.addEventListener('click', func);
}

function alertMsgLogIn() {
    alert('Email:'+ inputEmail.value +' | Senha:' + inputPw.value);
}

addlistener(btnEntrar, alertMsgLogIn);