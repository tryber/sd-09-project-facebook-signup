const buttonLogin = document.querySelector('#button-login');

function handleClickButtonLogin() {
  const inputEmailTelefone = document.querySelector('#user-email-phone');
  alert(inputEmailTelefone.value);
}

buttonLogin.addEventListener('click', handleClickButtonLogin);

const formSubmit = document.querySelector('.facebook-register');

function customFieldIsShow() {
  const customFieldElement = document.querySelector('.gender-custom');
  const customFieldDisplay = customFieldElement.style.display;
  if (customFieldDisplay === 'block') {
    if (customFieldElement.value === '') {
      return false;
    }
  }
  return true;
}

function handleValidateFields(event) {
  event.preventDefault();
  let filledFields = true;

  const customField = customFieldIsShow();

  const inputs = document.querySelectorAll('.facebook-register input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '' && customField === false) {
      const alertMessage = document.getElementById('alert');
      alertMessage.style.display = 'block';
      filledFields = false;
      return;
    }
  }

  if (filledFields) {
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].name === 'firstname') {
        const greeting = document.querySelector('.greeting');
        greeting.innerText = `Olá, ${inputs[index].value} ${inputs[index + 1].value}`;
      } else if (inputs[index].name === 'phone_email') {
        const phoneMail = document.querySelector('.email-phone');
        phoneMail.innerText = inputs[index].value;
      } else if (inputs[index].name === 'birthdate') {
        const datOfBirth = document.querySelector('.date-of-birth');
        datOfBirth.innerText = inputs[index].value;
      } else if (inputs[index].name === 'gender' && inputs[index].checked === true) {
        const genderResult = document.querySelector('.gender-result');
        genderResult.innerText = inputs[index].value;
      }
    }

    const register = document.querySelector('.register');
    register.style.display = 'none';

    const result = document.querySelector('.result');
    result.style.display = 'block';
  }
  // formSubmit.submit();
}

formSubmit.addEventListener('submit', handleValidateFields);

const inputsRadioGender = document.querySelectorAll('.radio-group input[type="radio"]');

function handleGenderCustom(event) {
  const customField = document.querySelector('.gender-custom');
  if ((event.target.checked === true) && (event.target.value === 'Personalizado')) {
    customField.style.display = 'block';
  } else {
    customField.style.display = 'none';
  }
}

for (let index = 0; index < inputsRadioGender.length; index += 1) {
  inputsRadioGender[index].addEventListener('change', handleGenderCustom);
}
