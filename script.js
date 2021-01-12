const loginEmail = document.querySelector('#user-email-phone');
const buttonLogin = document.querySelector('#button-login');
const buttonSubmit = document.querySelector('#facebook-register');

function getLogin() {
  buttonLogin.addEventListener('click', function () {
    window.alert(loginEmail.value);
  });
}


function allRadioMade() {
  const inputRadio = document.querySelectorAll('.inputRadio');
  const isValide = false;
  for (let index = 0; index < inputRadio.length; index += 1) {
    if (inputRadio[index].checked) {
      return true;
    }
  }
  return isValide;
}

function allTextMade() {
  const inputText = document.querySelectorAll('.inputText');
  const isValide = true;
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index].value === '') {
      return false;
    }
  }
  return isValide;
}

function isValidate(event) {
  event.preventDefault();
  if (!allTextMade() || !allRadioMade()) {
    const p = document.querySelector('#validate');
    p.innerText = 'Campos inválidos';
  }
  if (allTextMade() && allRadioMade()) {
    setInfos();
  }
}

buttonSubmit.addEventListener('click', isValidate);

function genderFluid() {
  const radioPerson = document.querySelector('#perso');
  radioPerson.addEventListener('change', function () {
    const genderDiv = document.querySelector('#genero');
    if (radioPerson.checked) {
      const input = document.createElement('input');
      input.id = 'person';
      input.name = 'gender-custom';
      input.placeholder = 'Gênero (opcional)';
      genderDiv.appendChild(input);
    }
  });
}

function setInfos() {
  const content = document.querySelector('.right-content');
  const text = document.querySelectorAll('.text');
  const radio = document.querySelector('.inputRadio[type="radio"]:checked').value;
  content.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerText = `Olá, ${text[0].value} ${text[1].value}`;
  content.appendChild(h2);
  for (let index = 2; index < text.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = text[index].value;
    content.appendChild(p);
  }
  const p = document.createElement('p');
  p.innerText = radio;
  content.appendChild(p);
}

getLogin();
genderFluid();
