/* Ao clicar no botão Entrar exibe um "alert"
com o valor do campo "Email ou telefone" */
function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const msg = document.querySelector('#user-email-phone').value;
    if (msg !== '') {
      alert(msg);
    }
  });
}

// Adiciona a mensagem "Campos inválidos"
function invalidFields() {
  const span = document.getElementById('invalid-fields');
  span.className = 'invalid-fields';
  span.innerText = 'Campos inválidos';
}

// Realiza a validação dos botões de radio
function validationRadio() {
  const gender = document.getElementsByName('gender');
  let result;
  let aux = 0;
  for (let index = 0; index < gender.length; index += 1) {
    if (gender[index].checked !== true) {
      aux += 1;
    }
  }
  if (aux === 3) {
    invalidFields();
    result = false;
  } else {
    result = true;
  }
  return result;
}

/* Adiciona o campo "gênero personalizado"
ao clicar no botão de rádio "Personalizado" */
function genderCustom() {
  const option = document.querySelector('input[name="gender"]:checked').value;
  const element = document.querySelector('#gender-custom');
  const newBr = document.createElement('br');
  const newElement = document.createElement('input');
  newElement.type = 'text';
  newElement.name = 'gender-custom';
  newElement.placeholder = 'Gênero (opcional)';
  newElement.className = 'input ajust';
  if (option === 'Personalizado') {
    element.appendChild(newBr);
    element.appendChild(newElement);
  }
}

// Capitura o "click" no botão de radio "Personalizado"
function clickRadio() {
  const optionCustom = document.querySelector('#custom');
  optionCustom.addEventListener('click', genderCustom);
}

// Adiciona os campos "first-name" e "last-name"
function fullName() {
  const fName = document.querySelector('#first-name').value;
  const lName = document.querySelector('#last-name').value;
  const name = document.createElement('p');
  name.innerHTML = `✌😎 Olá, <strong>${fName} ${lName}</strong>! Beleza?!`;
  return name;
}

function addPhoneOrEmail() {
  const phoneOrEmail = document.querySelector('#phone-email').value;
  const emailPhone = document.createElement('p');
  emailPhone.innerHTML = `‣ Telefone / e-mail: <strong>${phoneOrEmail}</strong>`;
  return emailPhone;
}

function addBirthDate() {
  const birthday = document.querySelector('#birthdate').value;
  const date = document.createElement('p');
  date.innerHTML = `‣ Data de Nasc.: <strong>${birthday}</strong>`;
  return date;
}

function addGender() {
  const genderOption = document.querySelector('input[name="gender"]:checked').value;
  const optionGender = document.createElement('p');
  optionGender.innerHTML = `‣ Gênero: <strong>${genderOption}</strong>`;
  return optionGender;
}

function addMensage() {
  const mensage = document.createElement('p');
  mensage.innerHTML = `Projeto realizado por:</br>
    <p>👉 <em>Frederico Canoeira</em></p>
    <p>👉 <em>Cleber Teixeira</em></p>
    <p><strong>#GoTrybe!</strong> 🚀</p>`;
  return mensage;
}

// Cria o container "right-content"
function confirmRegistration() {
  const mainContent = document.querySelector('main');
  const rightContent = document.createElement('div');
  rightContent.className = 'right-content teste resume';
  rightContent.appendChild(fullName());
  rightContent.appendChild(addPhoneOrEmail());
  rightContent.appendChild(addBirthDate());
  rightContent.appendChild(addGender());
  rightContent.appendChild(addMensage());
  mainContent.appendChild(rightContent);
}

// Adiciona dados cadastrados
// function addData() {
//   const rightContainer = document.querySelector('.teste');
//   rightContainer.appendChild(fullName());
//   rightContainer.appendChild(addPhoneOrEmail());
//   rightContainer.appendChild(addBirthDate());
//   rightContainer.appendChild(addGender());
//   rightContainer.appendChild(addMensage());
// }

// function confirmRegistration() {
//   const mainContent = document.querySelector('main');
//   const rightContent = document.createElement('div');
//   const resume = document.createElement('div');
//   const fName = document.querySelector('#first-name').value;
//   const lName = document.querySelector('#last-name').value;
//   const birthday = document.querySelector('#birthdate').value;
//   const phoneOrEmail = document.querySelector('#phone-email').value;
//   const genderOption = document.querySelector('input[name="gender"]:checked').value;
//   rightContent.className = 'right-content resume';
//   resume.innerHTML = `<p>✌😎 Olá, <strong>${fName} ${lName}</strong>! Beleza?!</p>
//   <p>‣ Telefone / e-mail: <strong>${phoneOrEmail}</strong></p>
//   <p>‣ Data de Nasc.: <strong>${birthday}</strong></p>
//   <p>‣ Gênero: <strong>${genderOption}</strong></p>
//   <br><p>Projeto realizado por:</p>
//   <p>👉 <em>Frederico Canoeira</em></p>
//   <p>👉 <em>Cleber Teixeira</em></p>
//   <p><strong>#GoTrybe!</strong> 🚀</p>`;
//   rightContent.appendChild(resume);
//   mainContent.appendChild(rightContent);
// }

// Limpa o "right-content"
function clearForm() {
  const form = document.querySelector('.right-content');
  form.style.display = 'none';
  confirmRegistration();
}

// Realiza a validação dos dados de cadastro antes do envio
function confirmValidation() {
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const phoneEmail = document.querySelector('#phone-email').value;
  const newPassword = document.querySelector('#pass-word').value;
  const birthDate = document.querySelector('#birthdate').value;
  if (firstName === '') {
    false;
  } else if (lastName === '') {
    false;
  } else if (phoneEmail === '') {
    false;
  } else if (newPassword === '') {
    false;
  } else if (birthDate === '') {
    false;
  } else if (validationRadio() !== true) {
    false;
  } else {
    clearForm();
  }
}

/* Realiza a validação de cada campo e verifica se foi preenchido
caso contrário chama a função que exibe a mensagem "Campos inválidos" */
function validation() {
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const phoneEmail = document.querySelector('#phone-email').value;
    const newPassword = document.querySelector('#pass-word').value;
    const birthDate = document.querySelector('#birthdate').value;
    if (firstName === '') {
      invalidFields();
    } else if (lastName === '') {
      invalidFields();
    } else if (phoneEmail === '') {
      invalidFields();
    } else if (newPassword === '') {
      invalidFields();
    } else if (birthDate === '') {
      invalidFields();
    } else {
      validationRadio();
    }
    confirmValidation();
  });
}

window.onload = function () {
  login();
  clickRadio();
  validation();
};
