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
let contador = 0;

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

function msgDeCampoVazio() {
  if (contador === 1) {
    contador -= 1;
    alert('Campos inválidos');
  }
}

function verificaGenero() {
  if (!radios[0].checked &&
    !radios[1].checked &&
    !radios[2].checked) {
    contador += 1;
    msgDeCampoVazio();
    return false;
  }
}

function validaData() {
  if (data.value === '') {
    contador += 1;
    msgDeCampoVazio();
    data.focus();
    return false;
  }
  verificaGenero();
  return true;
}

function validaSenha() {
  if (senha.value === '') {
    contador += 1;
    msgDeCampoVazio();
    senha.focus();
    return false;
  }
  validaData();
  return true;
}

function validaEmail() {
  const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!filtro.test(email.value)) {
    contador += 1;
    msgDeCampoVazio();
    email.focus();
    email.placeholder = 'Email incorreto!';
    email.value = '';
    return false;
  }
  validaSenha();
  return true;
}

function validaNomeESobrenome() {
  if (nome.value === '') {
    contador += 1;
    msgDeCampoVazio();
    nome.focus();
    return false;
  }
  if (sobrenome.value === '') {
    contador += 1;
    msgDeCampoVazio();
    sobrenome.focus();
    return false;
  }
  validaEmail();
  return true;
}
botaoVerifica.addEventListener('click', validaNomeESobrenome);
