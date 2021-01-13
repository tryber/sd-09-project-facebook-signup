const button = document.querySelector('#button-login');
const inputName = document.querySelector('#user-email-phone');
button.addEventListener('click', () => alert(inputName.value));

function validateTextInputs() {
  const inputText = document.querySelectorAll('.right-content input[type=text], input[type=password]');
  let isTextValid = true;
  for (let index = 0; index < inputText.length; index += 1) {
    if (!inputText[index].value) {
      isTextValid = false;
    }
  }
  return isTextValid;
}

function validateRadioInput() {
  const radioInput = document.querySelectorAll('input[type=radio]');
  let isRadioValid = false;
  for (let index = 0; index < radioInput.length; index += 1) {
    if (radioInput[index].checked) {
      isRadioValid = true;
    }
  }
  return isRadioValid;
}

function submitButton(event) {
  event.preventDefault();
  const invalidField = document.querySelector('#invalid-fields');
  const isValidText = validateTextInputs();
  const isValidRadio = validateRadioInput();
  if (!isValidText || !isValidRadio) {
    invalidField.innerText = 'Campos inválidos';
  } else {
    invalidField.innerText = '';
  }
}

const submitForm = document.querySelector('#facebook-register');
submitForm.addEventListener('click', submitButton);


const custom = document.querySelector('#custom-gender');
const customGender = document.querySelector('#unique');

function openCustomGenderInput() {
  if (customGender.classList.contains('checked')) {
    return;
  }
  const newGender = document.createElement('input');
  newGender.type = 'text';
  newGender.name = 'gender-custom';
  newGender.placeholder = 'Gênero (opcional)';
  newGender.required = true;
  custom.appendChild(newGender);
  customGender.classList = 'checked';
  newGender.required = true;
}

customGender.addEventListener('click', openCustomGenderInput);

// const genderInput = document.querySelector('#gender-input');
// const notCustom = document.querySelectorAll('.not-custom-gender');
// notCustom.addEventListener('click', function () {
//   document.getElementById('custom-gender').remove();
// });
