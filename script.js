const loginButton = document.querySelector('#button-login');
const loginInput = document.querySelector('#user-email-phone');
const registerButton = document.querySelector('#facebook-register');
const formInputs = document.querySelectorAll('.countInput');
const alertP = document.querySelector('#alertP');
const customGender = document.createElement('input');
const custoInput = document.querySelector('#custom-input')
const registerForm = document.querySelector('#register-form')

let validation = 0;

function showAlert() {
  loginButton.addEventListener('click', function () {
    alert(loginInput.value);
  });
}
showAlert();

function verifyForm() {
  registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    for (let index = 0; index < formInputs.length; index += 1) {
      if (formInputs[index].type === 'radio' && !formInputs[index].checked) {
        validation += 1;
      }
      if (formInputs[index].value === '' || validation > 2) {
        alertP.innerText = ('Campos inválidos');
        break;
      }
    }
  });
}
verifyForm();

function createCustominput() {
  custoInput.addEventListener('click', function () {
    customGender.name = 'gender-custom'
    customGender.placeholder = 'Gênero (opcional)'
    registerForm.insertBefore(customGender,registerForm.children[11])
  });
}

createCustominput();