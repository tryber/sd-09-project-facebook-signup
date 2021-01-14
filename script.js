const btnEntrar = document.querySelector('#button-login');
const choosedGenre = document.getElementById('personalizado');
// const btnCadastrar = document.getElementById('facebook-register');


const alertMsg = (event) => {
  const textEmailTel = document.querySelector('#user-email-phone');
  alert(textEmailTel.value);
  event.preventDefault();
};

const genre = () => {
  const female = document.getElementById('feminino');
  const male = document.getElementById('masculino');
  let textGenre = '';
  if (female.checked) {
    textGenre = 'Feminino';
  } else if (male.checked) {
    textGenre = 'Masculino';
  } else {
    textGenre = 'Personalizado';
  }
  return textGenre;
};

const checkGenre = () => {
  const divCustonGenre = document.getElementById('custonGenre');
  while (divCustonGenre.firstChild) {
    divCustonGenre.removeChild(divCustonGenre.lastChild);
  }
  if (choosedGenre.id === 'personalizado') {
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

const clearSection = () => {
  const sectionToReset = document.querySelector('.dataform');
  sectionToReset.innerHTML = '';
};

const validForm = () => {
  const allInputs = document.querySelector('.dataform').querySelectorAll('input');
  for (let index = 0; index < allInputs.length - 3; index += 1) {
    if (allInputs[index].value === '') {
      document.getElementById('campos_invalidos').innerText = 'Campos inválidos';
      document.getElementById('campos_invalidos').style.color = 'red';
      return true;
    }
  }
  return false;
};

const onClick = (event) => {
  validForm();
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const fullName = `${firstName} ${lastName}`;
  const telEmail = document.getElementById('telEmail').value;
  const birthDate = document.getElementById('input_birthdate').value;
  const textGenre = genre();
  const validF = validForm();
  if (!validF) {
    clearSection();
  }
  const h1 = document.querySelector('#welcome');
  h1.innerText = `Olá, ${fullName}`;
  const p = document.querySelector('.quick-easy');
  p.innerText = `
    ${telEmail}
    ${birthDate}
    ${textGenre}`;
  event.preventDefault();
};

const btnCadastrar = document.getElementById('facebook-register');

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
  choosedGenre.addEventListener('click', checkGenre);
<<<<<<< HEAD
  // btnCadastrar.addEventListener('click', divDataGenerator);
=======
  btnCadastrar.addEventListener('click', onClick);
>>>>>>> b41c3d34e4e18e4a015a9b6974991c85223f2da6
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
