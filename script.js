const getFormNewAccount = document.querySelector('#register-form');
const customGenderInput = document.querySelector('#gender-custom');
const rightContentBox = document.querySelector('.right-content');
const buttonEnterFacebook = document.querySelector('#button-login');

document.querySelector('#female').addEventListener('click', function () { customGenderInput.classList.add('hidden'); });
document.querySelector('#male').addEventListener('click', function () { customGenderInput.classList.add('hidden'); });
document.querySelector('#custom').addEventListener('click', function () { customGenderInput.classList.remove('hidden'); });

buttonEnterFacebook.addEventListener('click', function () {
  const urserMailOrPhone = document.querySelector('#user-email-phone').value;
  alert(urserMailOrPhone);
});

function createP(text) {
  const newP = document.createElement('p');
  newP.innerHTML = text;
  rightContentBox.appendChild(newP);
}

function createNewUserInfo() {
  const helloText = document.createElement('h1');
  helloText.innerHTML = `Olá, ${document.querySelector('#firstname').value} ${document.querySelector('#lastname').value}`;
  rightContentBox.appendChild(helloText);
  createP(document.querySelector('#phone_email').value);
  createP(document.querySelector('#birthdate').value);
  createP(document.querySelector('input[type="radio"]:checked').value);
  rightContentBox.removeChild(getFormNewAccount);
  rightContentBox.removeChild(rightContentBox.querySelector('h1'));
  rightContentBox.removeChild(rightContentBox.querySelector('p'));
}

function validateForm() {
  const requiredInputs = getFormNewAccount.querySelectorAll('[required]');
  for (let index = 0; index < requiredInputs.length; index += 1) {
    const currentInput = requiredInputs[index];
    if (!currentInput.checkValidity()) {
      document.querySelector('#error-message').innerHTML = 'Campos inválidos';
      return;
    }
  }
  createNewUserInfo();
}

document.querySelector('#facebook-register').addEventListener('click', function (event) {
  event.preventDefault();
  validateForm();
});
