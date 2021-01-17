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
  rightContent.className = 'right-content resume';
  rightContent.appendChild(fullName());
  rightContent.appendChild(addPhoneOrEmail());
  rightContent.appendChild(addBirthDate());
  rightContent.appendChild(addGender());
  rightContent.appendChild(addMensage());
  mainContent.appendChild(rightContent);
}

// Limpa o "right-content"
function clearForm() {
  const form = document.querySelector('.right-content');
  form.style.display = 'none';
  confirmRegistration();
}

// Realiza a validação dos botões de radio e chama a função limpar o formulário
function validationRadio(count) {
  const radios = document.querySelector('input[name="gender"]:checked');
  let result;
  if (radios === null) {
    result = false;
    invalidFields();
  } else {
    result = true;
  }
  if (count === 5 && result === true) {
    clearForm();
  }
}

/* Realiza a validação de cada campo e verifica se foi preenchido
caso contrário chama a função que exibe a mensagem "Campos inválidos" */
function validation() {
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    let count = 0;
    const inputs = document.querySelectorAll('.aux');
    for (let index = 0; index < inputs.length; index += 1) {
      if (inputs[index].value === '') {
        count = 0;
        invalidFields();
      } else {
        count += 1;
      }
    }
    validationRadio(count);
  });
}

// Chama as funções após o carregamento da página HTML
window.onload = function () {
  login();
  clickRadio();
  validation();
};
