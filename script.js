const buttonEntrar = document.getElementById('button-login');
const registerButton = document.getElementById('facebook-register');

buttonEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  const emailOrPhone = document.getElementById('user-email-phone').value;
  alert(emailOrPhone);
});

registerButton.addEventListener('click', (event) => {
  const formContainer = document.getElementsByClassName('form-wrapper');
  for (let index = 0; index < formContainer.length; index += 1) {
    for (let index_2 = 0; index < formContainer[index].childNodes.length; index += 1) {
      if (formContainer[index].childNodes[index].value !== undefined) {
        if (formContainer[index].childNodes[index].value === ''){
          alert('Campos inválidos');
          event.preventDefault();
        }
      }
    }
  }
});