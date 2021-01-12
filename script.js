const loginButton = document.querySelector('#button-login');
const loginInput = document.querySelector('#user-email-phone');
const registerButton = document.querySelector('#facebook-register');
const formInputs = document.querySelectorAll('.countInput');
const alertP = document.querySelector('#alertP');
let validation = 0;

function showAlert() {
  loginButton.addEventListener('click', function () {
    alert(loginInput.value);
  });
}
showAlert();

function verifyForm () {
  registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    for (let index = 0; index < formInputs.length; index += 1) {
      if (formInputs[index].type === 'radio' && !formInputs[index].checked) {
        validation = validation +1;
      }
      if (formInputs[index].value === '' || validation > 2) {
        alertP.innerText = ('Campos inválidos');
        break;
      }
    }
  });
}
verifyForm();
