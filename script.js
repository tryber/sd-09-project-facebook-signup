const buttonLogin = document.querySelector('#button-login');

function handleClickButtonLogin() {
  const inputEmailTelefone = document.querySelector('#user-email-phone');
  alert(inputEmailTelefone.value);
}

buttonLogin.addEventListener('click', handleClickButtonLogin);

const formSubmit = document.querySelector('.facebook-register');

function handleValidateFields(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.facebook-register input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      const alertMessage = document.getElementById('alert');
      alertMessage.style.display = 'block';
    }
  }
  formSubmit.submit();
}

formSubmit.addEventListener('submit', handleValidateFields);

const inputsRadioGender = document.querySelectorAll('.radio-group input[type="radio"]');

console.log(inputsRadioGender);

function handleGenderCustom(event) {
  const customField = document.querySelector('.gender-custom');

  if ((event.target.checked === true) && (event.target.value === 'Personalizado')) {
    customField.style.display = 'block';
  } else {
    customField.style.display = 'none';
  }
}

for (let index = 0; index < inputsRadioGender.length; index += 1) {
  inputsRadioGender[index].addEventListener('change', handleGenderCustom)
}
