const btnEntrar = document.querySelector('#button-login');
const choosedGenre = document.getElementById('personalizado');

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

// const validForm = () => {
//   const allInputs = document.querySelector('.dataform').querySelectorAll('input');
//   for (let index = 0; index < allInputs.length - 3; index += 1) {
//     if (allInputs[index].value === '') {
//       document.getElementById('campos_invalidos').innerText = 'Campos inválidos';
//       document.getElementById('campos_invalidos').style.color = 'red';
//     }
//   }
// };

const onClick = (event) => {
  const allInputs = document.querySelector('.dataform').querySelectorAll('input');
  // validForm();
  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const fullName = `${firstName} ${lastName}`;
  const telEmail = document.getElementById('telEmail').value;
  const birthDate = document.getElementById('input_birthdate').value;
  const textGenre = genre();
  for (let index = 0; index < allInputs.length - 3; index += 1) {
    if (allInputs[index].value === '') {
      document.getElementById('campos_invalidos').innerText = 'Campos inválidos';
      document.getElementById('campos_invalidos').style.color = 'red';
    } else {
      clearSection();
      const h1 = document.querySelector('#welcome');
      h1.innerText = `Olá, ${fullName}`;
      const p = document.querySelector('.quick-easy');
      p.innerText = `
        ${telEmail}
        ${birthDate}
        ${textGenre}`;
      event.preventDefault();
    }
  }
};

const btnCadastrar = document.getElementById('facebook-register');

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
  choosedGenre.addEventListener('click', checkGenre);
  btnCadastrar.addEventListener('click', onClick);
};

window.onload = () => {
  eventslistener();
};
