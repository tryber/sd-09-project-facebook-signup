function alertEmailOrPhone() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const button = document.querySelector('#button-login');
button.addEventListener('click', alertEmailOrPhone);

function buttonSignUp() {
  let emptyInputs = 0;
  const inputs = document.getElementsByTagName('input');
  const form = document.querySelector('.personal-infos');
  const message = document.createElement('p');
  form.appendChild(message);

  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].required.value === '') {
        emptyInputs += 1;
    }
  }
  if (emptyInputs > 0) {
      message.innerText = 'Campos inválidos';
  }
}

const btnSignUp = document.querySelector('#facebook-register');
btnSignUp.addEventListener('click', buttonSignUp);
