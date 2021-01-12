const loginButton = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');
const loginField = document.getElementById('user-email-phone');
const customGenderInput = document.getElementById('other-gender');
const customGender = document.getElementById('custom');
const registerForm = document.querySelector('.new-account');
const maleGender = document.getElementById('male');
const femaleGender = document.getElementById('female');
const allInputs = document.querySelectorAll('.input');
const invalidMessage = document.createElement('p');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const birthDate = document.getElementById('birthdate');
const emailOrPhone = document.getElementById('phone-email');
const rightSection = document.querySelector('.right-content');

// Utilizei a lógica utilizada por Tiago Yoneda para fazer a
// função showRegisteredData e createFormDataResult

function createFormDataResult(text) {
  const formDataOutput = document.createElement('p');
  formDataOutput.innerText = text;
  rightSection.appendChild(formDataOutput);
}

function showRegisteredData() {
  const helloUser = `Olá, ${firstName.value} ${lastName.value}`;
  createFormDataResult(helloUser);
  createFormDataResult(emailOrPhone.value);
  createFormDataResult(birthDate.value);
  createFormDataResult(document.querySelector('input[type="radio"]:checked').value);
  rightSection.removeChild(registerForm);
  rightSection.removeChild(document.querySelector('h1'));
  rightSection.removeChild(document.querySelector('span'));
}

function checkValidity() {
  for (let index = 0; index < allInputs.length; index += 1) {
    if (!allInputs[index].checkValidity()) {
      invalidMessage.innerText = 'Campos inválidos';
      return registerForm.appendChild(invalidMessage);
    }
  }
  return showRegisteredData();
}

loginButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  alert(loginField.value);
});

registerButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  checkValidity();
});

customGender.addEventListener('click', () => {
  customGenderInput.style.display = 'block';
});

femaleGender.addEventListener('click', () => {
  customGenderInput.style.display = 'none';
});

maleGender.addEventListener('click', () => {
  customGenderInput.style.display = 'none';
});
