function showLoginData(evt) {
  evt.preventDefault();
  const loginEmailPhone = document.getElementById('user-email-phone').value;
  alert(loginEmailPhone);
}

function createInputField(evt) {
  let radioColumn = document.getElementById('radios-father');
  let otherGenderInput = document.getElementById('otherGender');
  if(evt.target.id === 'other' && otherGenderInput === null) {
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'otherGender';
    newInput.placeholder = 'Gênero (opcional)';
    newInput.name = 'gender-custom';
    radioColumn.appendChild(newInput);
  }
  
  if(evt.target.id != 'other' && otherGenderInput != null) {
    radioColumn.removeChild(otherGenderInput);
  }
}

function validateInputs() {
  let inputs = document.getElementsByTagName('input');
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);
const GenderRadio = document.getElementById('radios');
GenderRadio.addEventListener('click', createInputField);
const btnApply = document.getElementById('facebook-register');
btnApply.addEventListener('click', validateInputs);