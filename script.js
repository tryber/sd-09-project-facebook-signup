const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const buttonFacebookRegister = document.querySelector('#facebook-register');
const radioCustom = document.querySelector('#custom');
const registerForm = document.querySelector('#register-form');
const completeForm = document.querySelectorAll('#register-form input');

// Remove o texto com a mensagem "Campos inválidos"
function removeLabel() {
  const label = document.querySelector('.invalid-label');
  if (label !== null) {
    label.parentNode.removeChild(label);
  }
}

// Cria o texto com a mensagem "Campos inválidos"
function createLabel() {
  const label = document.createElement('label');
  label.className = 'invalid-label';
  label.innerText = 'Campos inválidos';
  label.style.color = 'rgb(255, 0, 0)';

  registerForm.appendChild(label);
}

// Validação dos campos
function validateField() {
  let isValid = true;
  for (let index = 0; index < completeForm.length; index += 1) {
    if (completeForm[index].value === '') {
      completeForm[index].classList.add('invalid-field');
      isValid = false;
    } else {
      completeForm[index].classList.remove('invalid-field');
    }
  }
  return isValid;
}

// Adiciona um evento quando um campo é focado e outro evento quando digitamos algo no campo selecionado
registerForm.addEventListener('focusin', (event) => {
  event.target.addEventListener('keydown', () => {
    removeLabel();
  if (!validateField()) {
    createLabel();
  }
  });
});

// Adiciona um evento no botão "Cadastre-se"
buttonFacebookRegister.addEventListener('click', () => {
  removeLabel();
  if (!validateField()) {
    createLabel();
  } else {
    personalData();
  }
});

// Adiciona um evento no botão "Entrar"
buttonLogin.addEventListener('click', (event) => {
  event.preventDefault();
  alert(userEmailPhone.value);
});

// Cria o campo de gênero personalizado
function createField() {
  const inputText = document.createElement('input');
  inputText.className = 'gender-custom';
  inputText.name = 'gender-custom';
  inputText.placeholder = 'Gênero (opcional)';
  inputText.style.display = 'block';

  return inputText;
}

// Remove o campo de gênero personalizado
function removeCustomField() {
  const genderCustom = document.querySelector('.gender-custom');
  if (genderCustom !== null) {
    genderCustom.parentNode.removeChild(genderCustom);
  }
}

// Remove o campo de gênero personalizado ao selecionar "Masculino"
male.addEventListener('click', () => removeCustomField());

// Remove o campo de gênero personalizado ao selecionar "Feminino"
female.addEventListener('click', () => removeCustomField());

// Adiciona um campo caso sja selecionado o gênero personalizado
radioCustom.addEventListener('click', () => {
  const registerSon = document.querySelector('#register-form .gender-custom');

  if (registerSon === null) {
    registerForm.appendChild(createField());
  }
});

// Exibe as informções do formulário depois de preenchido
function personalData() {
  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const phoneEmail = document.querySelector('input[name="phone_email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const birthdate = document.querySelector('input[name="birthdate"]').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const rightContent = document.querySelector('.right-content');

  const dataContent = [firstname, lastname, phoneEmail, password, birthdate, gender];

  // if (gender === 'Personalizado') {
  //   dataContent[5] = document.querySelector('.gender-custom').value;
  // }

  dataContent[3] = '*****';

  rightContent.innerHTML = '';

  const p = document.createElement('p');
  p.innerText = `Olá ${firstname} ${lastname}`;
  rightContent.appendChild(p);

  for (let index = 2; index < dataContent.length; index += 1) {
    const p = document.createElement('p');
    p.innerText = dataContent[index];
    rightContent.appendChild(p);
  }
}
