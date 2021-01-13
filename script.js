const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function () {
  const typedEmail = document.getElementById('user-email-phone').value;
  alert(typedEmail);
});

const registerButton = document.getElementById('facebook-register');

function validateInputBoxes() {
  const myForm = document.getElementsByTagName("input");
  let fieldsAreInvalid = false;
  for(let index = 2; index <= 6; index +=1) {
    fieldsAreInvalid = (myForm[index].value === "");
    if (fieldsAreInvalid) {
      return true;
    };
  }
}

function validateRadioButtons() {
  const myForm = document.getElementsByTagName("input");
  let fieldsAreInvalid = Boolean(myForm[7].checked || myForm[8].checked || myForm[9].checked);
  return !fieldsAreInvalid;
}

function validateForm() {
  let areFieldsInvalid = validateInputBoxes();
  let areRadioButtonsInvalid = validateRadioButtons();
  if (areFieldsInvalid || areRadioButtonsInvalid) {
    let registerForm = document.querySelector('.facebook-register-form');
    let warning = document.createElement('p');
    warning.innerText = 'Campos inválidos';
    warning.className = 'Empty-Field-Warning'
    registerForm.appendChild(warning);
  }
}

registerButton.addEventListener('click', validateForm);

const customGender = document.getElementById('custom');

customGender.addEventListener('click', (event) => {
  const customGenderExists = document.querySelector('.Custom-Gender');
  if (customGenderExists === null) {
    let newGenderField = document.createElement('input');
    newGenderField.setAttribute('name', 'Gender-Custom');
    newGenderField.setAttribute('placeholder', 'Gênero (opcional)');
    newGenderField.className = 'Custom-Gender';
    registerButton.before(newGenderField);
  }
})
