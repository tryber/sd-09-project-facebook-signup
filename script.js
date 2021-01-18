
const loginButton = document.getElementById('button-login');
const loginInput = document.querySelector('#user-email-phone');
const registerButton = document.querySelector('#facebook-register');
const formInputs = document.querySelectorAll('.countInput');
const alertP = document.querySelector('#alertP');
const customGender = document.createElement('input');
const custoInput = document.querySelector('#custom-input');
const registerForm = document.querySelector('#register-form');
const rightForm = document.querySelector('.right-content');
let validation = 0;

function showAlert() {
  loginButton.addEventListener('click', function () {
    alert(loginInput.value);
  });
}
showAlert();

function greetUser() {
  if (alertP.innerText === '') {
    const fullName = document.createElement('h1');
    fullName.innerText = `Olá, ${formInputs[0].value} ${formInputs[1].value}`;
    const emailPhone = document.createElement('p');
    emailPhone.innerText = formInputs[2].value;
    const birthday = document.createElement('p');
    birthday.innerText = formInputs[4].value;
    const genderUser = document.createElement('p');
    genderUser.innerText = document.querySelector('input[type="radio"]:checked').value;
    rightForm.innerHTML = '';
    rightForm.appendChild(fullName);
    rightForm.appendChild(emailPhone);
    rightForm.appendChild(birthday);
    rightForm.appendChild(genderUser);
  }
}

function verifyForm() {
  registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    alertP.innerText = '';
    for (let index = 0; index < formInputs.length; index += 1) {
      if (formInputs[index].type === 'radio' && !formInputs[index].checked) {
        validation += 1;
      }
      if (formInputs[index].value === '' || validation > 2) {
        alertP.innerText = ('Campos inválidos');
      }
    }
    validation = 0;
    greetUser();
  });
}
verifyForm();

function createCustominput() {
  custoInput.addEventListener('click', function () {
    customGender.name = 'gender-custom';
    customGender.placeholder = 'Gênero (opcional)';
    registerForm.insertBefore(customGender, registerForm.children[10]);
  });
}
createCustominput();
