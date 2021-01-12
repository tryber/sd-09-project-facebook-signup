function alertInput() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alertInput);

// Requisito 18
let valid = false;

function createInvalid() {
  const mensagemInvalida = document.querySelector('.mensagem-invalida');
  const alerta = document.createElement('p');
  alerta.innerText = 'Campos inválidos!';
  alerta.id = 'alerta-valid';
  mensagemInvalida.appendChild(alerta);
}

function fieldsInput() {
  const camposDeInput = document.querySelectorAll('.validacao');
  for (let index = 0; index < camposDeInput.length; index += 1) {
    if (camposDeInput[index].value === '') {
      createInvalid();
      valid = false;
      return;
    }
    valid = true;
    return;
  }
}

function validacaoDeCadastro() {
  const alertaValid = document.querySelector('#alerta-valid');
  if (alertaValid) {
    alertaValid.remove();
    validacaoDeCadastro();
  } else {
    fieldsInput();
  }
}

const btn = document.getElementById('facebook-register');
btn.addEventListener('click', validacaoDeCadastro);

//

function genderCustom() {
  const father = document.querySelector('.radio-div');
  const inputGender = document.querySelector('#gender-custom');
  if (inputGender == null) {
    const input = document.createElement('input');
    input.placeholder = 'Gênero (opcional)';
    input.name = 'gender-custom';
    input.id = 'gender-custom';
    father.appendChild(input);
  }
}

function loopGender() {
  const inputGender = document.querySelector('#gender-custom');
  if (inputGender != null) {
    inputGender.remove();
  }
}

const buttonFeminino = document.querySelector('#feminino');
buttonFeminino.addEventListener('click', loopGender);
const buttonMasculino = document.querySelector('#masculino');
buttonMasculino.addEventListener('click', loopGender);
const buttonPersonalizado = document.querySelector('#personalizado');
buttonPersonalizado.addEventListener('click', genderCustom);

function genderChecked() {
  const genderValid = document.querySelectorAll('.validacao');
  let gender = '';
  for (let index = 5; index < genderValid.length; index += 1) {
    if (genderValid[index].checked) {
      gender = genderValid[index].value;
    }
  }
  return gender;
}

function showInfo(event) {
  event.preventDefault();
  const inputValid = document.querySelectorAll('.validacao');
  const firstName = inputValid[0].value;
  const lastName = inputValid[1].value;
  const emailAndPhone = inputValid[2].value;
  const date = inputValid[4].value;
  const gender = genderChecked();

  if (valid === true) {
    const rightInfo = document.querySelector('.right-content');
    rightInfo.innerHTML = '';
    const firstLastName = document.createElement('p');
    firstLastName.innerHTML = `Olá, ${firstName} ${lastName}`;
    rightInfo.appendChild(firstLastName);
    const emailValid = document.createElement('p');
    emailValid.innerHTML = emailAndPhone;
    rightInfo.appendChild(emailValid);
    const dateValid = document.createElement('p');
    dateValid.innerHTML = date;
    rightInfo.appendChild(dateValid);
    const genderValid = document.createElement('p');
    genderValid.innerHTML = gender;
    rightInfo.appendChild(genderValid);
  }
}

btn.addEventListener('click', showInfo);
