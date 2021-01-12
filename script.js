document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-email-phone').value);
});

function validateText(formInputs) {
  let isValid = true;
  for (let index = 0; index < formInputs.length - 1; index += 1) {
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

function showCustomGender(event) {
  const customGenderInput = document.querySelector('.input-genero');
  if (event.target.id === 'gender-custom') {
    customGenderInput.style.display = 'block';
  } else {
    customGenderInput.style.display = 'none';
  }
}

function validateAndRegister(event) {
  const formInputs = document.querySelectorAll('.right-content input');
  let isTextValid = true;
  let isRadioChecked = false;
  isTextValid = validateText(formInputs);
  isRadioChecked = validateRadios(formInputs);
  if (!isTextValid || !isRadioChecked) {
    event.preventDefault();
    const invalidFieldsParagraph = document.getElementById('invalid-fields');
    invalidFieldsParagraph.innerText = 'Campos inválidos';
  } else {
    const nome = document.getElementById('firstName').value;
    const sobrenome = document.getElementById('lastName').value;
    const phoneEmail = document.getElementById('phoneEmail').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = genderSelected();

    const rightContent = document.querySelector('.right-content');
    rightContent.innerHTML = `
    <p>Olá, ${nome} ${sobrenome}</p>
    <p>Email ou Telefone: ${phoneEmail}</p>
    <p>Data de nascimento: ${birthdate}</p>
    <p>Gênero: ${gender}</p>`;
  }
}

function addEventListeners() {
  const facebookRegister = document.getElementById('facebook-register');
  facebookRegister.addEventListener('click', validateAndRegister);
  const genderRadioInputs = document.querySelectorAll('input[name="gender"]');
  for (let index = 0; index < genderRadioInputs.length; index += 1) {
    genderRadioInputs[index].addEventListener('input', showCustomGender);
  }
}

addEventListeners();
