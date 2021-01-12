const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', function () {
  const userMailPhone = document.querySelector('#user-email-phone').value;
  alert(userMailPhone);
});

const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', function (event) {
  const fields = document.querySelectorAll('.open-account input');

  let campos = false;
  for (let field = 0; field < fields.length; field += 1) {
    if (fields[field].type === 'text') {
      if (fields[field].value === '') {
        break;
      }
    }

    if (fields[field].type === 'radio') {
      if (fields[field].checked) {
        campos = true;
      }
    }
  }

  if (campos === false) {
    event.preventDefault();
    const camposInvalidos = document.createElement('p');
    camposInvalidos.innerText = 'Campos inválidos';
    document.querySelector('.open-account').appendChild(camposInvalidos);
  }
});

const genderCustom = document.querySelector('#personalizado');
genderCustom.addEventListener('click', function () {
  const fieldCustom = document.createElement('input');
  fieldCustom.type = 'text';
  fieldCustom.name = 'gender-custom';
  fieldCustom.placeholder = 'Gênero (opcional)';
  document.querySelector('.gender').append(fieldCustom);
});
