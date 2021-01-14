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

const sectionRight = document.querySelector('#right-content');
const validateCamps = document.querySelectorAll('.cadastro input');
const getGender = document.querySelectorAll('.radioButtons input');

function registerValidate() {
  for (let index = 0; index < 5; index += 1) {
    if (validateCamps[index].value === '') {
      const div = document.createElement('div');
      div.innerHTML = `${validateCamps[index].name}: Campos inválidos`;
      document.getElementById('cadastro').appendChild(div);
    }
  }
}

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

function setValueOnSectionRight() {
  sectionRight.innerText = `Olá, ${validateCamps[0].value} ${validateCamps[1].value},
  contato: ${validateCamps[2].value},
  nascido em: ${validateCamps[4].value}
  e de ${createGenderRegister()};
  Seus dados foram cadastrados com sucesso!`;
}

function checkValidRegister() {
  const checkDivLenght = document.querySelectorAll('form div');
  if (checkDivLenght.length === 0) {
    setValueOnSectionRight();
  }
}

function cleanDivs() {
  const formDiv = document.querySelectorAll('.cadastro div');
  for (let index = 0; index < formDiv.length; index += 1) {
    if (formDiv[index].value !== '') {
      document.querySelector('form div').remove();
    }
  }
}

function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', stopDefault);
  registerButton.addEventListener('click', cleanDivs);
  registerButton.addEventListener('click', registerValidate);
  registerButton.addEventListener('click', checkValidRegister);
  registerButton.addEventListener('click', () => { document.querySelector('form.cadastro').reset();});
}

window.onload = function () {
  alertLogin();
  listeners();
};
