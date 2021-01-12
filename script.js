const btnEntrar = document.querySelector('#button-login');
const btnCadastro = document.querySelector('#facebook-register');

const alertMsg = (event) => {
  const textEmailTel = document.querySelector('#user-email-phone');
  alert(textEmailTel.value);
  event.preventDefault();
};

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.getElementsByTagName('input');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].oninvalid = function (e) {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        document.getElementById('campos_invalidos').innerText = 'Campos inválidos';
        document.getElementById('campos_invalidos').style.color = 'red';
      }
    };
    elements[i].oninput = function () {
      document.getElementById('campos_invalidos').innerText = '';
    };
  }
});

const checkGenre = () => {
  const choosedGenre = document.getElementById('personalizado');
  const divCustonGenre = document.getElementById('custonGenre');
  while (divCustonGenre.firstChild) {
    divCustonGenre.removeChild(divCustonGenre.lastChild);
  }
  if (choosedGenre.checked) {
    const inputCustonGenre = document.createElement('input');
    inputCustonGenre.name = 'gender-custom';
    inputCustonGenre.placeholder = 'Gênero (opcional)';
    divCustonGenre.appendChild(inputCustonGenre);
  } else {
    while (divCustonGenre.firstChild) {
      divCustonGenre.removeChild(divCustonGenre.lastChild);
    }
  }
};

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
  btnCadastro.addEventListener('click', checkGenre);
};

window.onload = () => {
  eventslistener();
};
