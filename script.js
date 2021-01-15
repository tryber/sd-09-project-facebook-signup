const button = document.getElementById('button-login');
function falert(event) {
  event.preventDefault();
  const input = document.getElementById('user-email-phone');
  const inputValue = input.value;
  alert(inputValue);
}
button.addEventListener('click', falert);

function createP() {
  const newP = document.querySelector('.form');
  const newP2 = document.createElement('p');
  const newP2Text = 'Campos inválidos';
  newP2.innerText = newP2Text;
  newP.appendChild(newP2);
}

function write() {
  const box = document.getElementById('right-content');
  const inputFeminino2 = document.getElementById('feminino');
  const inputMasculino2 = document.getElementById('masculino');
  const inputPersonalizado2 = document.getElementById('personalizado');
  const inputs = document.querySelectorAll('.input');

  const array = [];
  for (let index = 0; index < inputs.length; index += 1) {
    array.push(inputs[index].value);
  }

  let checked2 = '';
  if (inputFeminino2.checked === true) {
    checked2 = 'Feminino';
  } else if (inputMasculino2.checked === true) {
    checked2 = 'Masculino';
  } else if (inputPersonalizado2.checked === true) {
    checked2 = 'Personalizado';
  }

  box.innerText = (`Olá, ${array[0]} ${array[1]} ${array[2]} ${array[3]} ${checked2}`);
}

function validInputText() {
  const inputs = document.querySelectorAll('.input');
  let vaziosText = 0;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      vaziosText += 1;
    }
  }
  return vaziosText;
}

function validInputRadio() {
  const inputsRadio = document.querySelectorAll('.inputradio');
  let vaziosRadio = 0;
  for (let index = 0; index < inputsRadio.length; index += 1) {
    if (inputsRadio[index].checked === true) {
      vaziosRadio = 1;
    }
  }
  return vaziosRadio;
}

const btnCadastre = document.getElementById('facebook-register');
function validAll(event) {
  event.preventDefault();
  if (validInputText() !== 0 || validInputRadio() === 0) {
    createP();
  } else {
    write();
  }
}
btnCadastre.addEventListener('click', validAll);

const rdoPerso = document.getElementById('personalizado');
function inputTxtPerso() {
  const rdoPerso2 = document.querySelector('.radios');
  const rdoPersoNew = document.createElement('input');
  const rdoPersoNewName = 'gender-custom';
  const rdoPersoNewPh = 'Gênero (opcional)';
  rdoPersoNew.name = rdoPersoNewName;
  rdoPersoNew.placeholder = rdoPersoNewPh;
  rdoPerso2.appendChild(rdoPersoNew);
}
rdoPerso.addEventListener('click', inputTxtPerso);
