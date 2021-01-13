<<<<<<< HEAD
const form = document.querySelector('.personal-infos');
let emptyInputs = 0;
let infoValue = '';

=======
>>>>>>> 4e4c5ded18e8e362f6b45ad09b731f587b0c19a1
function alertEmailOrPhone() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const button = document.querySelector('#button-login');
button.addEventListener('click', alertEmailOrPhone);

function customizedGender(event) {
  const genderInput = document.querySelector('.customized-gender');
  while (genderInput.firstChild) {
    genderInput.removeChild(genderInput.lastChild);
  }
  if (event.target.value === 'Personalizado') {
    const creatInput = document.createElement('input');
    creatInput.setAttribute('name', 'gender-custom');
    creatInput.setAttribute('placeholder', 'Gênero (opcional)');
    creatInput.setAttribute('class', 'info');
    genderInput.appendChild(creatInput);
  }
}

const genderOption = document.querySelector('.gender-options');
genderOption.addEventListener('click', customizedGender);


const firstname = document.querySelector('input[name="firstname"]');
const lastname = document.querySelector('input[name="lastname"]');
const emaiLrOrPhone = document.querySelector('input[name="phone_email"]');
const birthDate = document.querySelector('input[name="birthdate"]');

function genferCustom() {
  const customGender = document.querySelector('input[name="gender-custom"]')
  if (customGender !== null) {
    return `Gênero personalizado: ${customGender}`;
  }
}

function getInputValues(inpuType) {
  return inpuType.value;
}

function getGenderValue(event) {
  if (event.target.name === 'gender') {
    alert(event.target.value)
  }
}
const gender = document.querySelector('.gender-options');
gender.addEventListener('click', getGenderValue);


function addPersonalInfos() {
  const rightContent = document.querySelector('.right-content');
  if (rightContent.hasChildNodes) {
    while (rightContent.firstChild) {
      rightContent.removeChild(rightContent.lastChild);
    }
    const form = document.createElement('p');
      form.innerText = `Olá, ${getInputValues(firstname)} ${getInputValues(lastname)}
      Email ou Telefone: ${getInputValues(emaiLrOrPhone)}
      Data de nascimento: ${getInputValues(birthDate)}
      Gênero: ${getGenderValue(event)}`;
      rightContent.appendChild(form);
  }
}

function buttonSignUp(event) {
  event.preventDefault();
<<<<<<< HEAD
=======
  let emptyInputs = 0;
  let checked = document.querySelector('input[name="gender"]:checked');
  const form = document.querySelector('.message');
>>>>>>> 4e4c5ded18e8e362f6b45ad09b731f587b0c19a1
  const infoClass = document.querySelectorAll('.info');
  const message = document.createElement('p');
  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }
  for (let index = 0; index < infoClass.length; index += 1) {
    if (infoClass[index].value === '') {
      emptyInputs += 1;
    }
  }
  if (checked === null || emptyInputs > 0) {
    form.appendChild(message);
    message.innerText = 'Campos inválidos';
  } else {
    addPersonalInfos();
  }
}

const btnSignUp = document.querySelector('#facebook-register');
btnSignUp.addEventListener('click', buttonSignUp);

function removeMessage(event) {
  const form = document.querySelector('.message');
  if (event.target) {
    if (form.hasChildNodes()) {
      form.removeChild(form.lastChild);
    } else {
    }
  }
}

const personalInfos = document.querySelector('.remove-child');
personalInfos.addEventListener('click', removeMessage);
