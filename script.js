const buttonLogin = document.querySelector('#button-login');

function handleClickButtonLogin() {
  const inputEmailTelefone = document.querySelector('#user-email-phone');
  alert(inputEmailTelefone.value);
}

buttonLogin.addEventListener('click', handleClickButtonLogin);

const formSubmit = document.querySelector('.facebook-register');
// console.log(formSubmit);

function handleValidateFields(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('.facebook-register input');
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
    }
  }
}

formSubmit.addEventListener('submit', handleValidateFields);
