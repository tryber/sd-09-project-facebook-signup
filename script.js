const getInputs = document.querySelectorAll('#register-form input');
const getRegisterBnt = document.querySelector('#facebook-register');
const getButton = document.querySelector('#button-login');

const personalizedInput = document.querySelector('#personalized');
const genderDiv = document.querySelector('#personalized-gender');

const rightContent = document.querySelector('.right-content');

function validateGenderDiv() {
  if (genderDiv.innerHTML === '');
  return true;
}

function insertWelcome() {
  const firstName = document.querySelector('input[name="firstname"]');
  const lastName = document.getElementsByName('lastname')[0];
  const phoneEmail = document.getElementsByName('phone_email')[0];
  const birthDate = document.getElementsByName('birthdate')[0];
  const gender = document.querySelector('input[type="radio"]:checked');

  const phrases = document.createElement('p');
  phrases.innerHTML += `Ola, ${firstName.value} ${lastName.value} !`;
  phrases.innerHTML += `<br> ${phoneEmail.value}`;
  phrases.innerHTML += `<br> ${birthDate.value}`;
  phrases.innerHTML += `<br> ${gender.value}`;
  rightContent.innerHTML = '';
  rightContent.appendChild(phrases);
}

function checkEmptyFields() {
  for (let index = 0; index < getInputs.length; index += 1) {
    if (getInputs[index].value === '') {
      getInputs[index].innerText = 'Campos inválidos';
    } else {
      insertWelcome();
    }
  }
}

getButton.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

personalizedInput.addEventListener('click', function () {
  if (validateGenderDiv) {
    const personalizedGender = document.createElement('input');
    personalizedGender.type = 'text';
    personalizedGender.name = 'gender-custom';
    personalizedGender.placeholder = 'Gênero (opcional)';
    genderDiv.appendChild(personalizedGender);
  }
});

getRegisterBnt.addEventListener('click', function (event) {
  event.preventDefault();
  checkEmptyFields();
});
