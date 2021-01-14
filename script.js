// function to alert when dont fill mail camp
function alertLogin() {
  const buttonLogin = document.getElementById('button-login');
  const inputLogin = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', function () {
    const loginValue = inputLogin.value;
    alert(loginValue);
  });
}

const sectionRight = document.querySelector('.right-content');
const validateCamps = document.querySelectorAll('.cadastro input');
const getGender = document.querySelectorAll('.radioButtons input');

// function to validate all registred inputs
function registerValidate() {
  for (let index = 0; index < 5; index += 1) {
    if (validateCamps[index].value === '') {
      const div = document.createElement('div');
      div.innerHTML = `${validateCamps[index].name}: Campos inválidos`;
      document.getElementById('cadastro').appendChild(div);
    }
  }
}
//  function to get right gender on register
function createGenderRegister() {
  let gender1 = '';
  let gender2 = '';
  for (let index = 0; index < 3; index += 1) {
    if (getGender[index].checked === true) {
      gender1 = `genero: ${getGender[index].value}`;
    }
  }
  if (getGender[2].checked === true) {
    const customGender = document.getElementById('genderText');
    gender2 = ` > ${customGender.value}`;
  }
  return gender1 + gender2;
}

// function to print all choosed values after validate register
function setValueOnSectionRight() {
  sectionRight.innerText = `Olá, ${validateCamps[0].value} ${validateCamps[1].value},
  contato: ${validateCamps[2].value},
  nascido em: ${validateCamps[4].value}
  e de ${createGenderRegister()};
  Seus dados foram cadastrados com sucesso!`;
}

// function to verify if all registred inputs already validate before print info
function checkValidRegister() {
  const checkDivLenght = document.querySelectorAll('form div');
  if (checkDivLenght.length === 0) {
    setValueOnSectionRight();
  }
}

// function to delete divs from screen
function cleanDivs() {
  const formDiv = document.querySelectorAll('.cadastro div');
  for (let index = 0; index < formDiv.length; index += 1) {
    if (formDiv[index].value !== '') {
      document.querySelector('form div').remove();
    }
  }
}

// function to encapsulate all listeners
function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    cleanDivs();
    registerValidate();
    checkValidRegister();
  });
}

<<<<<<< HEAD
// COMECEI AQUI
function createSection() {
  const appendSection = document.getElementById('scriptSection')
  const cvSection = document.createElement('section');
  cvSection.id = 'checkCV';
  appendSection.appendChild(cvSection)
}

function confirmAllPersonalProfile() {
  const cvSection = document.getElementById('.checkCV'); 
  let getInput = document.querySelectorAll('.right-content input');
  for(let index = 0; index < getInput.length; index += 1) {
    let div = document.createElement('div');
    div.innerHTML = `${getInput[index].name}: ${getInput[index].value}`
    cvSection.appendChild(div)
  }
}
// Ate AQUI

=======
// function to call another functions when the page opens
>>>>>>> aeadbeceacc1c745a189c17c57af6b308ac58f40
window.onload = function () {
  alertLogin();
  listeners();
};
