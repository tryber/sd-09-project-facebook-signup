function showLoginData(evt) {
  evt.preventDefault();
  const loginEmailPhone = document.getElementById('user-email-phone').value;
  alert(loginEmailPhone);
}

function createInputField(evt) {
  const radioColumn = document.getElementById('radios-father');
  const otherGenderInput = document.getElementById('otherGender');
  if (evt.target.id === 'other' && otherGenderInput === null) {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.id = 'otherGender';
    newInput.placeholder = 'Gênero (opcional)';
    newInput.name = 'gender-custom';
    newInput.required = true;
    radioColumn.appendChild(newInput);
  }

  if (evt.target.id !== 'other' && otherGenderInput !== null) {
    radioColumn.removeChild(otherGenderInput);
  }
}

const btnEntrar = document.getElementById('button-login');
btnEntrar.addEventListener('click', showLoginData);
const GenderRadio = document.getElementById('radios');
GenderRadio.addEventListener('click', createInputField);
