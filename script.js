function alertInput() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alertInput);

function genderCustom() {
  const father = document.querySelector('.radio-div');
  const inputs = document.querySelectorAll('inputs')
  if ()
    const input = document.createElement('input');
    input.placeholder = 'Gênero (opcional)';
    input.name = 'gender-custom';
    father.appendChild(input);
}

const buttonPersonalizado = document.querySelector('#personalizado');
buttonPersonalizado.addEventListener('click', genderCustom);