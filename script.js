const getInputs = document.querySelectorAll('#register-form input');
const getRegisterBnt = document.querySelector('#facebook-register');
const getButton = document.querySelector('#button-login');

const rightContent = document.querySelector('.right-content');

function checkEmptyFields() {
  for (let index = 0; index < getInputs.length; index += 1) {
    if (getInputs[index].value === '') {
      alert('Campos inválidos');
    }
  }
}

function validateGenderDiv() {
  const genderDiv = document.querySelector('#personalized-gender');
  if (genderDiv.innerHTML === null) {
  }
  return true;
}
function checkRadio() {
  const getRadioBtn = document.querySelectorAll('#radio-gender');
  const genderDiv = document.querySelector('#personalized-gender');
  for (let index = 0; index < getRadioBtn.length; index += 1) {
    if (getRadioBtn[index].checked && validateGenderDiv) {
      const personalizedGender = document.createElement('input');
      personalizedGender.name = 'gender-custom';
      personalizedGender.placeholder = 'Gênero (opcional)';
      genderDiv.appendChild(personalizedGender);
    }
  }
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

getButton.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

getRegisterBnt.addEventListener('click', function (event) {
  event.preventDefault();
  checkEmptyFields();
  insertWelcome();
  checkRadio();
});
