const loginButton = document.querySelector('#button-login');
const loginInput = document.querySelector('#user-email-phone');
// const registerButton = document.querySelector('#facebook-register');
// const formInputs = document.querySelectorAll('countInput');

function showAlert() {
  loginButton.addEventListener('click', function () {
    alert(loginInput.value);
  });
}
showAlert();

// function verifyForm () {
//   registerButton.addEventListener('click', function () {
//     for (let index = 0; index < formInputs.length; index += 1) {
//       if (formInputs[index].value = indefined) {
//         alert('Campos inválidos');
//       }
//     }
//   )};
// }
// verifyForm();