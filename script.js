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

const btnCadastre = document.getElementById('facebook-register');
function validInput(event) {
  event.preventDefault();
  const inputName = document.getElementById('name');
  const inputLastname = document.getElementById('lastname');
  const inputPhone = document.getElementById('phoneemail');
  const inputNewpw = document.getElementById('newpassword');
  const inputBirth = document.getElementById('birthdate');
  const inputFeminino = document.getElementById('feminino');
  const inputMasculino = document.getElementById('masculino');
  const inputPersonalizado = document.getElementById('personalizado');
  const inputNameValue = inputName.value;
  const inputLastnameValue = inputLastname.value;
  const inputPhoneValue = inputPhone.value;
  const inputNewpwValue = inputNewpw.value;
  const inputBirthValue = inputBirth.value;
  const inputFemininoValue = inputFeminino.checked;
  const inputMasculinoValue = inputMasculino.checked;
  const inputPersonalizadoValue = inputPersonalizado.checked;
  if (inputNameValue === '' || inputLastnameValue === '' || inputPhoneValue === '' || inputNewpwValue === '' || inputBirthValue === '') {
    createP();
  } else if (inputFemininoValue === false && inputMasculinoValue === false && inputPersonalizadoValue === false) {
    createP();
  } else {
    write();
  }
}
btnCadastre.addEventListener('click', validInput);

function write() {
  const box = document.getElementById('right-content');
  const inputName2 = document.getElementById('name');
  const inputLastname2 = document.getElementById('lastname');
  const inputPhone2 = document.getElementById('phoneemail');
  const inputBirth2 = document.getElementById('birthdate');
  const inputFeminino2 = document.getElementById('feminino');
  const inputMasculino2 = document.getElementById('masculino');
  const inputPersonalizado2 = document.getElementById('personalizado');
  const inputNameValue2 = inputName2.value;
  const inputLastnameValue2 = inputLastname2.value;
  const inputPhoneValue2 = inputPhone2.value;
  const inputBirthValue2 = inputBirth2.value;
  const inputFemininoValue2 = inputFeminino2.checked;
  const inputMasculinoValue2 = inputMasculino2.checked;
  const inputPersonalizadoValue2 = inputPersonalizado2.checked;
  let checked2 = '';
  if (inputFeminino2.checked === true) {
    checked2 = 'Feminino';
  } else if (inputMasculino2.checked === true) {
    checked2 = 'Masculino';
  } else if (inputPersonalizado2.checked === true) {
    checked2 = 'Personalizado';
  }

  box.innerText = (`Olá, ${array[0]} ${array[1]} ${array[2]} ${array[4]} ${checked2}`);
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
