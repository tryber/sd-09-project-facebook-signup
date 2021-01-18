const buttonLogin = document.querySelector('#button-login');

function handleClickButtonLogin() {
  const inputEmailTelefone = document.querySelector('#user-email-phone');
  alert(inputEmailTelefone.value);
}

buttonLogin.addEventListener('click', handleClickButtonLogin);

const formSubmit = document.querySelector('.facebook-register');

const validateInputsText = () => {
  const inputsText = document.querySelectorAll('.facebook-register input[type="text"');
  const customIsChecked = document.querySelector('.custom-radio').checked;
  let inputsLength;
  if (!customIsChecked) {
    inputsLength = inputsText.length - 1;
  } else {
    inputsLength = inputsText.length;
  }
  for (let index = 0; index < inputsLength; index += 1) {
    if (inputsText[index].value.length === 0) {
      return false;
    }
  }
  return true;
};

const validateInputsPassword = () => {
  const inputPassword = document.querySelector('.facebook-register input[type="password"');
  if (inputPassword.value.length === 0) {
    return false;
  }
  return true;
};

const validateFields = () => {
  const inputsTextOk = validateInputsText();
  const inputsPasswordOk = validateInputsPassword();
  const alertMessage = document.getElementById('alert');
  if (!inputsTextOk || !inputsPasswordOk) {
    alertMessage.style.display = 'block';
    return false;
  } else {
    alertMessage.style.display = 'none';
    return true;
  }
};

const getRegisterResult = () => {
  const inputs = document.querySelectorAll('.facebook-register input');
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
};

const displayRegisterResult = (isCompleted) => {
  if (isCompleted) {
    getRegisterResult();
    const register = document.querySelector('.register');
    register.style.display = 'none';
    const result = document.querySelector('.result');
    result.style.display = 'block';
  }
};

function handleValidateFields(event) {
  event.preventDefault();
  const filledFields = validateFields();
  displayRegisterResult(filledFields);
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
