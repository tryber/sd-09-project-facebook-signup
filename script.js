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

function createParagraph() {
  const container = document.querySelector('.form-container');
  const paragraph = document.createElement('p');
  deleteParagraph(container);
  container.appendChild(paragraph);
  paragraph.innerText = 'Campos inválidos';
  paragraph.id = 'validation-error';
}

registerButton.addEventListener('click', (event) => {
  event.preventDefault();
  const registerInput = document.getElementsByClassName('register-input');
  const genderMan = document.getElementById('gender-man');
  const genderWoman = document.getElementById('gender-woman');
  const genderCustom = document.getElementById('gender-custom');
  let cont = 0;
  if ((genderCustom.checked === false) && (genderMan.checked === false) && (genderWoman.checked === false)) {
    createParagraph();
    return;
  }
  for (let index = 0; index < registerInput.length; index += 1) {
    if (registerInput[index].value === '') {
      createParagraph();
      return;
    }
  }
});
