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
  if (inputFemininoValue2 === true) {
    checked2 = 'Feminino';
  } else if (inputMasculinoValue2 === true) {
    checked2 = 'Masculino';
  } else if (inputPersonalizadoValue2 === true) {
    checked2 = 'Personalizado';
  }
  box.innerText = (`Olá, ${inputNameValue2} ${inputLastnameValue2} ${inputPhoneValue2} ${inputBirthValue2} ${checked2}`);
}
