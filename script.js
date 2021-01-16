const buttonLogin = document.querySelector('#button-login');
const roudePersonl = document.querySelector('.radios');
const inputGenero = document.querySelector('.genero');
const botaoVerifica = document.querySelector('.btn');
const radios = document.querySelectorAll('.radios input');
const data = document.querySelector('.birthdate');
const senha = document.querySelector('.password');
const email = document.querySelector('.phone_email');
const nome = document.querySelector('.firstname');
const sobrenome = document.querySelector('.lastname');

function alertaBotao() {
  buttonLogin.addEventListener('click', function () {
    const inputEmailPhone = document.querySelector('#user-email-phone').value;
    alert(inputEmailPhone);
  });
}
alertaBotao();

function botaoAbreGenero(event) {
  if (event.target.value !== 'Personalizado') {
    inputGenero.style = 'display:none';
  } else {
    inputGenero.style = 'display:block';
  }
}
roudePersonl.addEventListener('click', botaoAbreGenero);

function verificaGenero() {
  const msgAniversario = document.querySelector('.msg-genero');
  if (!radios[0].checked &&
    !radios[1].checked &&
    !radios[2].checked) {
    msgAniversario.innerText = 'Campos inválidos';
    msgAniversario.style.display = 'block';
    return false;
  }
  return true;
}

function validaData() {
  const msgAniversario = document.querySelector('.msg-aniversario');
  if (data.value === '') {
    msgAniversario.innerText = 'Campos inválidos';
    msgAniversario.style.display = 'block';
    data.focus();
    return false;
  }
  if (data.value !== '') {
    msgAniversario.innerText = '';
    msgAniversario.style.display = 'none';
  }
  verificaGenero();
  return true;
}

function validaSenha() {
  const msgSenha = document.querySelector('.msg-senha');
  if (senha.value === '') {
    msgSenha.innerText = 'Campos inválidos';
    msgSenha.style.display = 'block';
    senha.focus();
    return false;
  }
  if (senha.value !== '') {
    msgSenha.innerText = '';
    msgSenha.style.display = 'none';
  }
  validaData();
  return true;
}

function validaEmail() {
  const msgEmail = document.querySelector('.msg-email');
  const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!filtro.test(email.value)) {
    email.placeholder = 'Email incorreto!';
    email.value = '';
    email.focus();
    msgEmail.innerText = 'Campos inválidos';
    msgEmail.style.display = 'block';
    return false;
  }
  if (filtro.test(email.value)) {
    msgEmail.innerText = '';
    msgEmail.style.display = 'none';
  }
  validaSenha();
  return true;
}

function validaSobrenome() {
  const msgSobrenome = document.querySelector('.msg-sobrenome');
  if (sobrenome.value === '') {
    msgSobrenome.innerText = 'Campos inválidos';
    msgSobrenome.style.display = 'block';
    sobrenome.focus();
    return false;
  }
  if (sobrenome.value !== '') {
    msgSobrenome.innerText = '';
    msgSobrenome.style.display = 'none';
  }
  validaEmail();
  return true;
}

function validaNome() {
  const msgNome = document.querySelector('.msg-nome');
  if (nome.value === '') {
    msgNome.innerText = 'Campos inválidos';
    msgNome.style.display = 'block';
    nome.focus();
    return false;
  }
  if (nome.value !== '') {
    msgNome.innerText = '';
    msgNome.style.display = 'none';
  }
  validaSobrenome();
  return true;
}
botaoVerifica.addEventListener('click', validaNomeESobrenome);
