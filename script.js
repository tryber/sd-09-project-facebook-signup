// Selectors
const buttonLogin = document.querySelector('#button-login');
const buttonRegister = document.querySelector('#facebook-register');
const emailInput = document.querySelector('#user-email-phone');
const registerForm = document.querySelector('#register-form');
const rightContent = document.querySelector('.right-content');
const title = document.querySelector('.title');
const quickEasy = document.querySelector('.quick-easy');

// Selectors gender
const genderCustomRadio = document.querySelector('#custom');
const femaleRadio = document.querySelector('#female');
const maleRadio = document.querySelector('#male');
const genderCustomInput = document.querySelector('#gender-custom');

// Functions

function createParagraphs(message) {
  const newParagraph = document.createElement('p');
  newParagraph.innerText = message;
  rightContent.appendChild(newParagraph);
}

function alertEmailInput() {
  const valueEmailInput = emailInput.value;
  alert(valueEmailInput);
}

function showValues() {

  const hello = document.createElement('h1');
  hello.innerText = `Olá, ${document.querySelector('#firstname-input').value} ${document.querySelector('#lastname-input').value}`;
  rightContent.appendChild(hello);

  createParagraphs(`${document.querySelector('#phone_email').value}`);
  createParagraphs(`${document.querySelector('#birthdate').value}`);
  createParagraphs(`${document.querySelector('input[type="radio"]:checked').value}`);

  rightContent.removeChild(registerForm);
  rightContent.removeChild(title);
  rightContent.removeChild(quickEasy);

}

function validateRegister(event) {
  event.preventDefault();
  const errorText = document.querySelector('#error-message');
  const inputs = registerForm.querySelectorAll('[required]');
  for (let index = 0; index < inputs.length; index += 1) {
    if (!inputs[index].checkValidity() || !document.querySelector('input[type="radio"]:checked')) {
      errorText.innerText = 'Campos inválidos';
      return;
    } else {
      errorText.innerText = '';
    }
  }
  showValues();
}

function genderCustom() {
  if (genderCustomRadio.checked) {
    genderCustomInput.classList.remove('gender-custom-input');
  }
}

function genderFemale() {
  if (femaleRadio.checked) {
    genderCustomInput.classList.add('gender-custom-input');
  }
}

function genderMale() {
  if (maleRadio.checked) {
    genderCustomInput.classList.add('gender-custom-input');
  }
}


// Events listener
femaleRadio.addEventListener('click', genderFemale);
maleRadio.addEventListener('click', genderMale);
genderCustomRadio.addEventListener('click', genderCustom);
buttonLogin.addEventListener('click', alertEmailInput);
buttonRegister.addEventListener('click', validateRegister);
