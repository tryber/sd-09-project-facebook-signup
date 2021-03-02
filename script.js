const buttonLogin = document.getElementById('button-login');
//  const buttonRegister = document.getElementById('facebook-register');
const genderCustom = document.getElementById('other');
const formGroup = document.querySelector('.right-content .form-group');

buttonLogin.addEventListener('click', function () {
  const userEmail = document.getElementById('user-email-phone');
  window.alert(userEmail.value);
});

//  Validar form de cadastro

function showErrorMessage() {
  const form = document.querySelector('#register-form');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Campos inválidos';
  errorMessage.className = 'form-message';
  form.appendChild(errorMessage);
}

function selectedGenderClass() {
  const genderInput = document.getElementsByName('gender');
  let selectedGender = '';
  for (let index = 0; index < genderInput.length; index += 1) {
    if (genderInput[index].checked) {
      selectedGender = genderInput[index].value;
    }
  }
  return selectedGender;
}

function showValidatedInfo() {
  const formCompleted = document.querySelector('.right-content');
  const inputName = document.querySelector('.first-name').value;
  const inputLastName = document.querySelector('.last-name').value;
  const inputBirthDate = document.querySelector('.birthdate').value;
  const phoneMail = document.querySelector('.phone_email').value;
  const inputGender = selectedGenderClass();
  const message = `Olá, ${inputName} ${inputLastName}
  \n${phoneMail} \n${inputBirthDate} \n${inputGender}`;
  formCompleted.innerHTML = '';
  const element = document.createElement('p');
  element.innerHTML = message;
  formCompleted.appendChild(element);
}

function validateForm() {
  const formInputs = document.querySelectorAll('#register-form input');

  let hasInputEmpty = false;

  for (let index = 0; index < formInputs.length; index += 1) {
    const inputs = formInputs[index].value;
    if (inputs === '') {
      hasInputEmpty = true;
    }
  }

  //  Verifica se tem input vazio e exibe mensagem de erro
  if (hasInputEmpty) {
    showErrorMessage();
  } else {
    //  Aqui eu vou subtituir o html pelo valor do input
    showValidatedInfo();
  }
}

function btn() {
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', validateForm);
}

btn();

function createInputText() {
  const createInput = document.createElement('input');
  createInput.className = 'gender-custom';
  createInput.name = 'gender-custom';
  createInput.placeholder = 'Gênero (opcional)';
  return createInput;
}
genderCustom.addEventListener('click', function () {
  const register = document.querySelector('.form-group .gender-custom');
  if (register === null) {
    formGroup.appendChild(createInputText());
  }
});
