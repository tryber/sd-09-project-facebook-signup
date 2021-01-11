function alertInput() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alertInput);

function genderCustom() {
  const father = document.querySelector('.radio-div');
  const inputGender = document.querySelector('#gender-custom');
  if (inputGender == null) {
    const input = document.createElement('input');
    input.placeholder = 'Gênero (opcional)';
    input.name = 'gender-custom';
    input.id = 'gender-custom'
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
