function alertLogin() {
  const buttonLogin = document.getElementById('button-login');
  const inputLogin = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', function () {
    const loginValue = inputLogin.value;
    alert(loginValue);
  });
}

function stopDefault(event) {
  event.preventDefault();
}

const validateCamps = document.querySelectorAll('.cadastro input');
function registerValidate() {
  for (let index = 0; index < 5; index += 1) {
    if (validateCamps[index].value === '') {
      const div = document.createElement('div');
      div.innerHTML = `${validateCamps[index].name}: Campos inválidos`;
      document.getElementById('cadastro').appendChild(div);
    }
  }
}

function createValidRegister() {
  for (let index = 0; index < 5; index += 1) {
    if (validateCamps[index].value !== '') {
      const createDiv = document.createElement('div');
      document.getElementById('appendRegister').appendChild(createDiv);
    }
  }
}

function setValueOnDiv() {
  const divIndex = document.querySelectorAll('#appendRegister div');
  divIndex[0].innerHTML = `Olá ${validateCamps[0].value} ${validateCamps[1].value}`;
  divIndex[1].innerHTML = `${validateCamps[2].name} ${validateCamps[2].value}`;
  divIndex[2].innerHTML = `${validateCamps[4].name} ${validateCamps[4].value}`;
}

function createGenderRegister() {
  const getGender = document.querySelectorAll('.radioButtons input');
  for (let index = 0; index < 3; index += 1) {
    if (getGender[index].checked === true) {
      const createDiv = document.createElement('div');
      createDiv.innerHTML = `${getGender[index].name}: ${getGender[index].value}`;
      document.getElementById('appendRegister').appendChild(createDiv);
    }
  }
  if (getGender[2].checked === true) {
    const customGender = document.getElementById('genderText');
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `${customGender.name}: ${customGender.value}`;
    document.getElementById('appendRegister').appendChild(createDiv);
  }
}

function createSection() {
  const createSectionValidate = document.createElement('section');
  createSectionValidate.id = 'appendRegister';
  createSectionValidate.className = 'appendRegister';
  document.getElementById('right-content').appendChild(createSection);
}

function checkValidRegister() {
  const checkDivLenght = document.querySelectorAll('form div');
  if (checkDivLenght.length === 0) {
    createSection();
    createValidRegister();
    setValueOnDiv();
    createGenderRegister();
    document.getElementById('cadastro').remove();
  }
}

function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', stopDefault);
  registerButton.addEventListener('click', registerValidate);
  registerButton.addEventListener('click', checkValidRegister);
}

// function checkEmail() {
//   const email = document.querySelector('.input-login');
//   let insertedEmail = email.value;
//   const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
//   if (!emailFormat && insertedEmail.length) {
//     email.value = '';
//     alert('email inválido');
//     return false;
//   }
//   return emailFormat
// }

window.onload = function () {
  alertLogin();
  listeners();
};
