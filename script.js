const buttonLogin = document.querySelector('#button-login');

function handleClickButtonLogin() {
  const inputEmailTelefone = document.querySelector('#user-email-phone');
  alert(inputEmailTelefone.value);
}

buttonLogin.addEventListener('click', handleClickButtonLogin);
