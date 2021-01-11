const buttonLogin = document.querySelector('#button-login');

buttonLogin.addEventListener('click', handleClickButtonLogin);

function handleClickButtonLogin(event) {
  const inputEmailTelefone = document.querySelector('#user-email-phone');
  alert(inputEmailTelefone.value);
}
