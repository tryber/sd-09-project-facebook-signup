const buttonEntrar = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');
const genderCheck = document.querySelector('.form-check-container');

buttonEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  const emailOrPhone = document.getElementById('user-email-phone').value;
  alert(emailOrPhone);
});

function deleteInputGenderCustom(container) {
  const inputGenderCustom = document.querySelector('#inputGenderCustom');
  if (inputGenderCustom !== null) {
    container.removeChild(inputGenderCustom);
  }
}

genderCheck.addEventListener('click', (event) => {
  if (event.target.type === 'radio') {
    const container = document.querySelector('#div-gender-custom');
    const inputGenderCustom = document.createElement('input');
    if (event.target.id === 'gender-custom') {
      deleteInputGenderCustom(container);
      inputGenderCustom.placeholder = 'Gênero (opcional)';
      inputGenderCustom.name = 'gender-custom';
      container.appendChild(inputGenderCustom);
      inputGenderCustom.id = 'inputGenderCustom';
    } else {
      deleteInputGenderCustom(container);
    }
  }
});

function deleteParagraph(container) {
  const paragraph = document.querySelector('#validation-error');
  if (paragraph !== null) {
    container.removeChild(paragraph);
  }
}

function createParagraph(container) {
  const paragraph = document.createElement('p');
  deleteParagraph(container);
  container.appendChild(paragraph);
  return paragraph;
}

function checkRadioButtons() {
  const genderMan = document.getElementById('gender-man');
  const genderWoman = document.getElementById('gender-woman');
  const genderCustom = document.getElementById('gender-custom');
  let radioChecked = false;
  if (genderCustom.checked === true) {
    radioChecked = true;
  } else if (genderMan.checked === true) {
    radioChecked = true;
  } else if (genderWoman.checked === true) {
    radioChecked = true;
  }
  return radioChecked;
}

function deleteDiv(div) {
  while (div.firstChild) {
    div.removeChild(div.lastChild);
  }
}

function validadeRadioInputChecked(input, registerData) {
  if (input.checked) {
    registerData.push(`${input.value}`);
  }
}

function saveDataInput(registerInput) {
  const registerData = [];
  for (let index = 0; index < registerInput.length; index += 1) {
    switch (true) {
      case (registerInput[index].type === 'radio'):
        validadeRadioInputChecked(registerInput[index], registerData);
        break;
      case (registerInput[index].name === 'firstname'):
        registerData.push(`Olá, ${registerInput[index].value} ${registerInput[index + 1].value}`);
        index += 1;
        break;
      case (registerInput[index].name === 'password'):
        break;
      default:
        registerData.push(`${registerInput[index].value}`);
        break;
    }
  }
  return registerData;
}

function addRegistrationDataInput() {
  const div = document.querySelector('.right-content');
  const registerInput = document.getElementsByClassName('register-input');
  const registerData = saveDataInput(registerInput);
  deleteDiv(div);
  for (let index = 0; index < registerData.length; index += 1) {
    const paragraph = createParagraph(div);
    paragraph.innerText = registerData[index];
  }
}

registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  const registerInput = document.getElementsByClassName('register-input');
  const container = document.querySelector('.form-container');
  for (let index = 0; index < registerInput.length; index += 1) {
    if (registerInput[index].type === 'radio') {
      const checked = checkRadioButtons();
      if (checked === false) {
        const paragraph = createParagraph(container);
        paragraph.innerText = 'Campos inválidos';
        paragraph.id = 'validation-error';
        return;
      }
    } else if (registerInput[index].value === '') {
      const paragraph = createParagraph(container);
      paragraph.innerText = 'Campos inválidos';
      paragraph.id = 'validation-error';
      return;
    }
  }
  addRegistrationDataInput();
});
