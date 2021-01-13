/* Funcoes */

/* Inicio do codigo */

const inputEmailPhone = document.querySelector('#user-email-phone');
const buttonSender = document.querySelector('#button-login');
const buttonRegister = document.querySelector('#facebook-register');
const formFirstName = document.querySelector('#id-firstname');
const formLastName = document.querySelector('#id-lastname');
const formPhoneEmail = document.querySelector('#id-phone_email');
const formPassword = document.querySelector('#id-password');
/*  const formBirthDate = document.querySelector('#id-birthdate');
const formFemale = document.querySelector('#id-female');
const formMale = document.querySelector('#id-male');
const FormCustom = document.querySelector('#id-custom');  */

/* Exibe e-mail-telefone */
buttonSender.addEventListener('click', function(event) {
  if (inputEmailPhone.value.length > 0) {
    alert(inputEmailPhone.value);
  }
  event.preventDefault();
});

/* Valida dados cadastrais */
buttonRegister.addEventListener('click', function(event) {
  let formValid = true;
  if (formFirstName.value.length < 1) {
    formValid = false;
  }
  if (formLastName.value.length < 1) {
    formValid = false;
  }
  if (formPhoneEmail.value.length < 1 || !formPhoneEmail.value.includes('@')) {
    formValid = false;
  }
  if (formPassword.value.length < 1) {
    formValid = false;
  }
  if (formValid) {
    let teste = 0;
  }
  event.preventDefault();
});
