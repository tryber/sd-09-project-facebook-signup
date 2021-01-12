const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

// const facebookRegister = document.querySelector('#facebook-register');
// const inputs = document.querySelectorAll('input');
// facebookRegister.addEventListener('click', function (event) {
//   event.preventDefault();
//   for (let index = 2; index < inputs.length; index += 1) {
//     if (inputs[index].value === '') {
//       inputs[index].value = 'Campos inválidos';
//     }
//   }
// });

const customGender = document.querySelector('#custom-gender');
const personalizado = document.querySelector('#personalizado');
personalizado.addEventListener('click', function () {
  const input = document.createElement('input');
  input.name = 'gender-custom';
  input.placeholder = 'Gênero (opcional)';
  customGender.appendChild(input);
})
