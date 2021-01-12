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

const customGender = document.getElementById('personalizado');

function handleGenderCustom() {
  const customField = document.querySelector('.gender-custom');
  console.log(customGender.checked);
  if (customGender.checked === true) {
    customField.style.display = 'block';
  } else {
    customField.style.display = 'none';
  }
}

customGender.addEventListener('change', handleGenderCustom);