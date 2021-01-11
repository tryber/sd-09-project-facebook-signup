const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', function () {
  const userMailPhone = document.querySelector('#user-email-phone').value;
  alert(userMailPhone);
});

const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', function () {
  const fields = document.querySelectorAll('.open-account input');

  let campos = false;
  for (const field of fields) {
    if (field.type === 'text') {
      if (field.value === '') {
        break;
      }
    }

    if (field.type === 'radio') {
      if (field.checked) {
        campos = true;
      }
    }
  }

  if (campos === false) {
    const camposInvalidos = document.createElement('p');
    camposInvalidos.innerText = 'Campos inválidos';
    document.querySelector('.open-account').appendChild(camposInvalidos);
  }
});
