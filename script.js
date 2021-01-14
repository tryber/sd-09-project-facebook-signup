const buttonLogin = document.querySelector('#button-login');
const roudePersonl = document.querySelector('.radios');
const inputGenero = document.querySelector('.genero');
const botaoVerifica = document.querySelector('.btn');
const containerDireito = document.querySelectorAll('.form-control');
// const radiosOpcoes = document.querySelectorAll('.radios input');
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
  if (contador > 0) {
    alert('Campos inválidos');
  }
}

// function verificaGeneroVazios() {
//   for (let index = 0; index < radiosOpcoes.length; index =+ 1) {
//     const elementos = radiosOpcoes[index];
//     elementos.addEventListener('click', function (event) {

//     });
//   }
// }
// verificaGeneroVazios();

function verificandoVazios() {
  for (let index = 0; index < containerDireito.length; index += 1) {
    const elemento = containerDireito[index];
    if (elemento.value === '') {
      contador += 1;
      msgDeCampoVazio();
      break;
    }
    // else {
    //   verificaGeneroVazios();
    // }
  }
}
botaoVerifica.addEventListener('click', verificandoVazios);
