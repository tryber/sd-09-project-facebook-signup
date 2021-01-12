const loginEmail = document.querySelector('#user-email-phone');
const buttonLogin = document.querySelector('#button-login');
const buttonSubmit = document.querySelector('#facebook-register');

function getLogin() {
  buttonLogin.addEventListener('click', function () {
    window.alert(loginEmail.value);
  });
}

getLogin();

function allRadioMade() {
  const inputRadio = document.querySelectorAll('.inputRadio');
  const isValide = false;
  for (let index = 0; index < inputRadio; index += 1) {
    if (inputRadio[index].checked) {
      return true;
    }
  }
  return isValide;
}

function allTextMade() {
  const inputText = document.querySelectorAll('.inputText');
  const isValide = true;
  for (let index = 0; index < inputText; index += 1) {
    if (inputText[index].value === '') {
      return false;
    }
  }
  return isValide;
}

function isValidate(event) {
  if (!allTextMade() || !allRadioMade()) {
    event.preventDefault();
    const p = document.querySelector('#validate');
    p.innerText = 'Campos inválidos';
  }
}

buttonSubmit.addEventListener('click', isValidate);

function genderFluid() {
  const radioPerson = document.querySelector('#perso');
  radioPerson.addEventListener('change', function () {
    const genderDiv = document.querySelector('#genero');
    if (radioPerson.checked) {
      const input = document.createElement('input');
      input.name = 'gender-custom';
      input.placeholder = 'Gênero (opcional)';
      genderDiv.appendChild(input);
    }
  });
}

genderFluid();
