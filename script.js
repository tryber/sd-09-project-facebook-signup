document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

function validateText(formInputs) {
  let isValid = true;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (!formInputs[index].value) {
      isValid = false;
    }
  }
  return isValid;
}

function validateRadios(formInputs) {
  let isValid = false;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].checked) {
      isValid = true;
    }
  }
  return isValid;
}

function genderSelected() {
  let gender = '';
  const genderRadioInputs = document.querySelectorAll('input[name="gender"]');
  for (let index = 0; index < genderRadioInputs.length; index += 1) {
    if (genderRadioInputs[index].checked) {
      gender = genderRadioInputs[index].value;
    }
  }
  return gender;
}

function showFormsValues() {
  const nome = document.getElementById('firstName').value;
  const sobrenome = document.getElementById('lastName').value;
  const phoneEmail = document.getElementById('phoneEmail').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = genderSelected();

  const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = '';
  const h2 = document.createElement('h2');
  let p = document.createElement('p');
  h2.innerText = `Olá, ${nome} ${sobrenome}`;
  rightContent.appendChild(h2);
  p.innerText = phoneEmail;
  rightContent.appendChild(p);
  p = document.createElement('p');
  p.innerText = birthdate;
  rightContent.appendChild(p);
  p = document.createElement('p');
  p.innerText = gender;
  rightContent.appendChild(p);
}

function validateAndRegister(event) {
  event.preventDefault();
  const formInputs = document.querySelectorAll('.right-content input');
  let isTextValid = true;
  let isRadioChecked = false;
  isTextValid = validateText(formInputs);
  isRadioChecked = validateRadios(formInputs);
  if (!isTextValid || !isRadioChecked) {
    const invalidFieldsParagraph = document.getElementById('invalid-fields');
    invalidFieldsParagraph.innerText = 'Campos inválidos';
  } else {
    showFormsValues();
  }
}
const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validateAndRegister);
