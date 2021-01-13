/* Funcoes */

/* Inicio do codigo */

const inputEmailPhone = document.querySelector('#user-email-phone');
const buttonSender = document.querySelector('#button-login');
const buttonRegister = document.querySelector('#facebook-register');
const firstName = document.querySelector('#id-firstname');
const lastName = document.querySelector('#id-lastname');
const phoneEmail = document.querySelector('#id-phone_email');
const password = document.querySelector('#id-password');
const birthDate = document.querySelector('#id-birthdate');
const female = document.querySelector('#id-female');
const male = document.querySelector('#id-male');
const custom = document.querySelector('#id-custom');

/* Exibe e-mail-telefone */
buttonSender.addEventListener('click', function (event) {
  if (inputEmailPhone.value.length > 0) {
    alert(inputEmailPhone.value);
  }
  event.preventDefault();
});

/* Valida dados cadastrais */
buttonRegister.addEventListener('click', function(event) {
  let formValid = true;
   if (firstName.value.length < 1) {
     formValid = false;
   }
  if (lastName.value.length < 1) {
    formValid = false;
  }
  if (phoneEmail.value.length < 1 || !phoneEmail.value.includes('@')) {
    formValid = false;
  }
  if (password.value.length < 1) {
    formValid = false;
  }
 
  console.log(formValid);

  event.preventDefault();

});