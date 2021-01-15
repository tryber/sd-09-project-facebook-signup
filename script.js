const buttonLogin = document.querySelector('#button-login');
const roudePersonl = document.querySelector('.radios');
const inputGenero = document.querySelector('.genero');
const botaoVerifica = document.querySelector('.btn');
const containerDireito = document.querySelectorAll('.form-control');
const radiosOpcoes = document.querySelectorAll('.radios input');
let contador = 0;
let controlador = 0;

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
  if (contador > 0) {
    alert('Campos inválidos');
  }
}

function verificaGeneroVazios() {
  for (let index = 0; index < radiosOpcoes.length; index += 1) {
    const elementos = radiosOpcoes[index];
    if (elementos.checked === false) {
      contador += 1;
      controlador += 1;
      contadorDeVazios();
    } else {
      break;
    }
  }
  // if (radiosOpcoes[0].checked === false) {
  //   if (radiosOpcoes[1].checked === false) {
  //     if (radiosOpcoes[2].checked === false) {
  //       contador += 1;
  //       msgDeCampoVazio();
  //     }
  //   }
  // }
}

function contadorDeVazios() {
  if (controlador === 3) {
    msgDeCampoVazio();
  }
}

function verificandoVazios() {
  for (let index = 0; index < containerDireito.length; index += 1) {
    const elemento = containerDireito[index];
    if (elemento.value === '') {
      contador += 1;
      msgDeCampoVazio();
      break;
    } else {
      verificaGeneroVazios();
      break;
    }
  }
}
botaoVerifica.addEventListener('click', verificandoVazios);
