const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function () {
  const typedEmail = document.getElementById('user-email-phone').value;
  alert(typedEmail);
});

const registerButton = document.getElementById('facebook-register');

function validateInputBoxes() {
  const myForm = document.getElementsByTagName('input');
  let fieldsAreInvalid = false;
  for (let index = 2; index <= 6; index += 1) {
    fieldsAreInvalid = (myForm[index].value === '');
    if (fieldsAreInvalid) {
      return true;
    }
  }
  return fieldsAreInvalid;
}

function validateRadioButtons() {
  const myForm = document.getElementsByTagName('input');
  const fieldsAreInvalid = Boolean(myForm[7].checked || myForm[8].checked || myForm[9].checked);
  return !fieldsAreInvalid;
}

function validateForm() {
  const areFieldsInvalid = validateInputBoxes();
  const areRadioButtonsInvalid = validateRadioButtons();
  if (areFieldsInvalid || areRadioButtonsInvalid) {
    const registerForm = document.querySelector('.facebook-register-form');
    const warning = document.createElement('p');
    warning.innerText = 'Campos inválidos';
    warning.className = 'Empty-Field-Warning';
    registerForm.appendChild(warning);
    return false;
  }
  return true;
}

const customGender = document.getElementById('custom');

customGender.addEventListener('click', () => {
  const customGenderExists = document.querySelector('.Custom-Gender');
  if (customGenderExists === null) {
    const newGenderField = document.createElement('input');
    newGenderField.setAttribute('type', 'text');
    newGenderField.setAttribute('name', 'gender-custom');
    newGenderField.setAttribute('placeholder', 'Gênero (opcional)');
    newGenderField.className = 'Custom-Gender';
    registerButton.before(newGenderField);
  }
});

function readFormData() {
  const readRadio = document.querySelector('input[type="radio"]:checked');
  const read = document.getElementsByTagName('input');
  const userDataString = `Olá, ${read[2].value} ${read[3].value}
  ${read[4].value}
  ${read[6].value}
  ${readRadio.value}`;
  return userDataString;
}

function showCompletedForm() {
  const formValidated = validateForm();
  if (formValidated) {
    const contentRight = document.querySelector('.right-content');
    const userForm = document.querySelector('.facebook-register-form');
    contentRight.innerText = readFormData();
    userForm.style.display = 'none';
  }
}

registerButton.addEventListener('click', showCompletedForm);
