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
  paragraph.innerText = 'Campos inválidos';
  paragraph.id = 'validation-error';
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

registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  const registerInput = document.getElementsByClassName('register-input');
  const container = document.querySelector('.form-container');
  for (let index = 0; index < registerInput.length; index += 1) {
    if (registerInput[index].type === 'radio') {
      const checked = checkRadioButtons();
      if (checked === false) {
        createParagraph(container);
        return;
      } 
    } else if (registerInput[index].value === '') {
      createParagraph(container);
      return;
    }
  }
  deleteParagraph(container);
});
