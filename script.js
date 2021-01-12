function alerta() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

function removeInputGender() {
  const div = document.querySelector('#genero');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function validacaoInput() {
  let status = false;
  const input = document.querySelectorAll('.input');
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].value === '') {
      status = true;
    }
  }
  return status;
}

function validacaoRadio() {
  let status = false;
  const radio = document.querySelectorAll('.radio');
  for (let index = 0; index < radio.length; index += 1) {
    if (radio[index].checked) {
      status = true;
    }
  }
  return status;
}

function validacao(event) {
  const status1 = validacaoInput();
  const status2 = validacaoRadio();
  if (status1 === true || status2 === false) {
    alert('Campos inválidos');
    event.preventDefault();
  }
}

function generoPersonaliza() {
  removeInputGender();
  const input = document.createElement('input');
  input.placeholder = 'Gênero (opcional)';
  input.name = 'gender-custom';
  input.className = 'genero-personalizado';
  const genero = document.querySelector('#genero');
  genero.appendChild(input);
}

window.onload = function () {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', alerta);
  const btnCadastro = document.querySelector('#facebook-register');
  btnCadastro.addEventListener('click', validacao);
  const radioPerso = document.querySelector('#perso');
  radioPerso.addEventListener('click', generoPersonaliza);
  const radioFem = document.querySelector('#fem');
  radioFem.addEventListener('click', removeInputGender);
  const radioMasc = document.querySelector('#masc');
  radioMasc.addEventListener('click', removeInputGender);
};
