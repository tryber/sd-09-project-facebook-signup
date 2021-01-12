// Alert com email
function showAlert() {
  const buttonLogin = document.querySelector('#button-login');
  buttonLogin.addEventListener('click', function () {
    const caixaEmailTelefone = document.querySelector('#user-email-phone');
    alert(caixaEmailTelefone.value);
  });
}

showAlert();

// Verificação de campos vazios
function isTextInputEmpty() {
  const textInputs = document.querySelectorAll('.right-content input[type=text]');
  let isEmpty = false;
  for (let index = 0; index < textInputs.length; index += 1) {
    if (textInputs[index].value.trim() === '') {
      isEmpty = true;
      break;
    }
  }
  return isEmpty;
}

function isPasswordInputEmpty() {
  const passwordInput = document.querySelector('.right-content input[type=password]');
  let isEmpty = false;
  if (passwordInput.value.trim() === '') {
    isEmpty = true;
  }
  return isEmpty;
}

function isGenderInputChecked() {
  const genderInputs = document.querySelectorAll('.right-content input[type=radio]');
  let isChecked = false;
  for (let index = 0; index < genderInputs.length; index += 1) {
    if (genderInputs[index].checked) {
      isChecked = true;
      break;
    }
  }
  return isChecked;
}

function checkFields() {
  const signUpButton = document.querySelector('#facebook-register');
  signUpButton.addEventListener('click', function (event) {
    if (isTextInputEmpty() || isPasswordInputEmpty() || !isGenderInputChecked()) {
      event.preventDefault();
      if (!document.querySelector('.form-alert')) {
        const signUpForm = document.querySelector('.signup-form');
        const alertText = document.createElement('p');
        alertText.innerText = 'Campos inválidos';
        alertText.className = 'form-alert';
        signUpForm.prepend(alertText);
      }
    }
  });
}

checkFields();
