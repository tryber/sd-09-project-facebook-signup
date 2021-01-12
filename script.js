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

const checkGenre = (event) => {
  const choosedGenre = document.getElementById('personalizado');
  const div_custonGenre = document.getElementById('custonGenre');
  while (div_custonGenre.firstChild) {
    div_custonGenre.removeChild(div_custonGenre.lastChild);
  }
  if (choosedGenre.checked) {
    const input_custonGenre = document.createElement('input');
    input_custonGenre.name = 'gender-custom';
    input_custonGenre.placeholder = 'Gênero (opcional)';
    console.log(div_custonGenre);
    console.log(input_custonGenre);
    div_custonGenre.appendChild(input_custonGenre);
    console.log(div_custonGenre);
    event.preventDefault();
  } else {
    while (div_custonGenre.firstChild) {
      div_custonGenre.removeChild(div_custonGenre.lastChild);
    }
  }

}

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
  btnCadastro.addEventListener('click', checkGenre);
};

window.onload = () => {
  eventslistener();
};
