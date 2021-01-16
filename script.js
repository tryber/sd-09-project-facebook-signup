const buttonLogin = document.querySelector('#button-login');
const roudePersonl = document.querySelector('.radios');
const inputGenero = document.querySelector('.genero');
const botaoVerifica = document.querySelector('.btn');
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
  const radios = document.querySelectorAll('.radios input');
  if (!radios[0].checked &&
    !radios[1].checked &&
    !radios[2].checked) {
    contador += 1;
    msgDeCampoVazio();
    return;
  }
}

function validaData() {
  const data = formulario.birthdate;
  if (data.value === '') {
    contador += 1;
    msgDeCampoVazio();
    data.focus();
    return;
  }
  verificaGenero();
  return;
}

function validaSenha() {
  const senha = formulario.password;
  if (senha.value === '') {
    contador += 1;
    msgDeCampoVazio();
    senha.focus();
    return;
  }
  validaData();
  return;
}

function validaEmail() {
  const email = formulario.phone_email;
  const filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (!filtro.test(email.value)) {
    contador += 1;
    msgDeCampoVazio();
    email.focus();
    email.placeholder = 'Email incorreto!';
    email.value = '';
    return;
  }
  validaSenha();
  return;
}

function validaNomeESobrenome() {
  const nome = document.querySelector('.firstname');
  const sobrenome = document.querySelector('.lastname');
  if (nome.value === '') {
    contador += 1;
    msgDeCampoVazio();
    nome.focus();
    return;
  }
  if (sobrenome.value === '') {
    contador += 1;
    msgDeCampoVazio();
    sobrenome.focus();
    return;
  }
  validaEmail();
  return;
}
botaoVerifica.addEventListener('click', validaNomeESobrenome);
