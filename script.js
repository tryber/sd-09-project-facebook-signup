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
  } else if (inputFemininoValue === false &&
      inputMasculinoValue === false &&
      inputPersonalizadoValue === false) {
    createP();
  }
}
btnCadastre.addEventListener('click', validInput);
