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
  const box = document.getElementById('form');
  const boxRadio = document.getElementById('radios');
  const inputName = document.getElementById('name');
  const inputLastname = document.getElementById('lastname');
  const inputPhone = document.getElementById('phoneemail');
  const inputNewpw = document.getElementById('newpassword');
  const labelBirth = document.getElementById('label-birthdate');
  const inputBirth = document.getElementById('birthdate');
  const labelRadio = document.getElementById('label-gender');
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
  } else {
    box.removeChild(inputName);
    box.removeChild(inputLastname);
    box.removeChild(inputPhone);
    box.removeChild(inputNewpw);
    box.removeChild(inputBirth);
    box.removeChild(boxRadio);
    box.removeChild(labelBirth);
    box.removeChild(labelRadio);
    let checked = '';
    if (inputFemininoValue === true) {
      checked = 'Feminino';
    } else if (inputMasculinoValue === true) {
      checked = 'Masculino';
    } else if (inputPersonalizadoValue === true) {
      checked = 'Personalizado';
    }
    box.innerText = (`Olá, ${inputNameValue} ${inputLastnameValue} ${inputPhoneValue} ${inputBirthValue} ${checked}`);
  }
}
btnCadastre.addEventListener('click', validInput);

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

const btnCadastre2 = document.getElementById('facebook-register');
function deleteWrite(event) {
  event.preventDefault();
  const box2 = document.getElementById('form');
  const boxRadio2 = document.getElementById('radios');
  const inputName2 = document.getElementById('name');
  const inputLastname2 = document.getElementById('lastname');
  const inputPhone2 = document.getElementById('phoneemail');
  const inputNewpw2 = document.getElementById('newpassword');
  const labelBirth2 = document.getElementById('label-birthdate');
  const inputBirth2 = document.getElementById('birthdate');
  const labelRadio2 = document.getElementById('label-gender');
  const inputFeminino2 = document.getElementById('feminino');
  const inputMasculino2 = document.getElementById('masculino');
  const inputPersonalizado2 = document.getElementById('personalizado');
  const inputNameValue2 = inputName2.value;
  const inputLastnameValue2 = inputLastname2.value;
  const inputPhoneValue2 = inputPhone2.value;
  const inputNewpwValue2 = inputNewpw2.value;
  const inputBirthValue2 = inputBirth2.value;
  const inputFemininoValue2 = inputFeminino2.checked;
  const inputMasculinoValue2 = inputMasculino2.checked;
  const inputPersonalizadoValue2 = inputPersonalizado2.checked;
  box.removeChild(inputName2);
  box.removeChild(inputLastname2);
  box.removeChild(inputPhone2);
  box.removeChild(inputNewpw2);
  box.removeChild(inputBirth2);
  box.removeChild(boxRadio2);
  box.removeChild(labelBirth2);
  box.removeChild(labelRadio2);
  let checked2 = '';
  if (inputFemininoValue2 === true) {
    checked2 = 'Feminino';
  } else if (inputMasculinoValue2 === true) {
    checked2 = 'Masculino';
  } else if (inputPersonalizadoValue2 === true) {
    checked2 = 'Personalizado';
  }
  box.innerText2 = (`Olá, ${inputNameValue2} ${inputLastnameValue2} ${inputPhoneValue2} ${inputBirthValue2} ${checked2}`);  
}
btnCadastre2.addEventListener('click', deleteWrite);
