const btnEntrar = document.querySelector('#button-login');
const choosedGenre = document.getElementById('personalizado');
const btnCadastrar = document.getElementById('facebook-register');


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
  choosedGenre.addEventListener('click', checkGenre);
  // btnCadastrar.addEventListener('click', divDataGenerator);
};

// const divDataGenerator = (event) => {
//   event.preventDefault();
//   const form = document.getElementById('dataform');
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const firstName = urlParams.get('firstname');
//   const lastName = urlParams.get('lastname');
//   const fullName = `${firstName} ${lastName}`;
//   const emailOrPhone = urlParams.get('phone_email');
//   const birthDate = urlParams.get('birthdate');
//   const gender = urlParams.get('gender');
//   const h1Welcome = document.getElementById('welcome');
//   const pData = document.getElementById('phrasedata');
//   h1Welcome.innerText = `Olá, ${fullName}`;
//   // pData.innerText = `
//   // Telefone-email: ${emailOrPhone}.
//   // Data de nascimento: ${birthDate}.
//   // Gênero: ${gender}.`;
//   form.style.display = 'none';
// }

window.onload = () => {
  eventslistener();
};
