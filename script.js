const getRegisterBnt = document.querySelector('#facebook-register');
const getButton = document.querySelector('#button-login');
const personalizedInput = document.querySelector('#personalized');
const genderDiv = document.querySelector('#personalized-gender');
const rightContent = document.querySelector('.right-content');

// TEST AREA
let chosenGender = '';
function changeChosenGender() {
  if (personalizedInput.checked) {
    const personalGender = document.querySelector('#personal-gender');
    chosenGender = personalGender.value;
  } else {
    const pickGender = document.querySelector('input[type="radio"]:checked');
    chosenGender = pickGender.value;
  }
}

function insertWelcome() {
  const firstName = document.querySelector('input[name="firstname"]');
  const lastName = document.getElementsByName('lastname')[0];
  const phoneEmail = document.getElementsByName('phone_email')[0];
  const birthDate = document.getElementsByName('birthdate')[0];
  // const gender = document.querySelector('input[type="radio"]:checked');

  const phrases = document.createElement('p');
  phrases.innerHTML += `Olá, ${firstName.value} ${lastName.value}`;
  phrases.innerHTML += `<br> Email ou Telefone: ${phoneEmail.value}`;
  phrases.innerHTML += `<br> Data de nascimento: ${birthDate.value}`;
  phrases.innerHTML += `<br> Gênero: ${chosenGender}`;
  rightContent.innerHTML = '';
  rightContent.appendChild(phrases);
}

function validateEmptyFields(fields) {
  const form = document.querySelector('#register-form');
  if (fields > 0) {
    const text = document.createElement('p');
    text.innerHTML = 'Campos inválidos';
    form.appendChild(text);
  } else {
    changeChosenGender();
    insertWelcome();
  }
}

function checkEmptyFields() {
  let invalidField = 0;
  const checked = document.querySelector('input[type="radio"]:checked');
  const inputsNotRadio = document
    .querySelectorAll('#register-form input:not([type=radio])');
  for (let index = 0; index < inputsNotRadio.length; index += 1) {
    if (inputsNotRadio[index].value === '' || checked === null) {
      invalidField += 1;
    }
  }
  validateEmptyFields(invalidField);
}

getButton.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

personalizedInput.addEventListener('change', function () {
  genderDiv.innerHTML = null;
  const personalizedGender = document.createElement('input');
  personalizedGender.type = 'text';
  personalizedGender.name = 'gender-custom';
  personalizedGender.placeholder = 'Gênero (opcional)';
  personalizedGender.id = 'personal-gender';
  genderDiv.appendChild(personalizedGender);
});

getRegisterBnt.addEventListener('click', function (event) {
  event.preventDefault();
  checkEmptyFields();
});
