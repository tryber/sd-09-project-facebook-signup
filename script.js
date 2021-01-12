/* Variaveis e constantes */
const inputEmailPhone = document.querySelector('#user-email-phone');
const buttonSender = document.querySelector('#button-login');
//const custom = document.querySelector('#custom');

/* Funcoes */

/* Inicio do codigo */

/* Exibe e-mail-telefone */
buttonSender.addEventListener('click', function () {
  if (inputEmailPhone.value !== '') {
    alert(inputEmailPhone.value);
  }
});
