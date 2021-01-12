const buttonEntrar = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');

buttonEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  const emailOrPhone = document.getElementById('user-email-phone').value;
  alert(emailOrPhone);
});

registerButton.addEventListener('click', (event) => {
  const registerInput = document.getElementsByClassName('register-input');
  let cont = 0;
  for (let index = 0; index < registerInput.length; index += 1) {
    if (registerInput[index].type === 'radio') {
      if (registerInput[index].checked === false) {
        cont += 1;
      }
    } else if (registerInput[index].value === '') {
      alert('Campos inválidos');
      event.preventDefault();
      return;
    }
  }
  if (cont >= 3) {
    alert('Campos inválidos');
    event.preventDefault();
  }
});
