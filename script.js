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

function showValidatedInfo(inputs) {
  const formCompleted = document.querySelector('.right-content');
  formCompleted.innerHTML = '';
  for (let index = 0; index < inputs.length; index += 1) {
    const element = document.createElement('p');
    const formContent = inputs[index].value;
    element.innerHTML = formContent;
    formCompleted.appendChild(element);
  }
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
    showValidatedInfo(formInputs);
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
