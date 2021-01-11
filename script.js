const getButton = document.querySelector('#button-login');
getButton.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

function checkEmptyFields() {

  for (let index = 0; index < getInputs.length; index += 1) {
    if (getInputs[index].value === '') {
      alert('Campos inválidos');
    }
  }
}

const getInputs = document.querySelectorAll('#register-form input');
const getRegisterBnt = document.querySelector('#facebook-register');
getRegisterBnt.addEventListener('click', function (event) {
  event.preventDefault();
  checkEmptyFields();
  checkRadio();
});

function checkRadio() {
  const getRadioBtn = document.querySelectorAll('#radio-gender');
  const genderDiv = document.querySelector('#personalized-gender');
  for (let index = 0; index < getRadioBtn.length; index += 1) {
    if (getRadioBtn[index].checked && getRadioBtn[index].length !== '') {
      const personalizedGender = document.createElement('input');
      personalizedGender.name = 'gender-custom';
      personalizedGender.placeholder = 'Gênero (opcional)';
      genderDiv.appendChild(personalizedGender);
    }
  }
}
