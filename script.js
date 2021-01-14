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
  for (let index = 0; index < validateCamps.length; index += 1) {
    if (validateCamps[index].value === '') {
      const div = document.createElement('div');
      div.innerHTML = 'Campos inválidos';
      document.querySelector('form.cadastro').appendChild(div);
    }
  }
}

function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', stopDefault);
  registerButton.addEventListener('click', registerValidate);
}

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

window.onload = function () {
  alertLogin();
  listeners();
};
