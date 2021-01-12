const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', () => {
  const userMailPhone = document.querySelector('#user-email-phone').value;
  alert(userMailPhone);
});

function replaceContainer(elementos) {
  // limpar o conteudo do container (tentar usar o display:none)
  document.querySelector('h1').style.display = 'none';
  document.querySelector('h2').style.display = 'none';
  document.querySelector('.open-account').style.display = 'none';

  // adcionar um novo elemento texto para visualizar os dados
  const text = document.createElement('span');
  text.innerText = `Olá, ${elementos.firstname} ${elementos.lastname}`;
  document.querySelector('.right-content').append(text);
}

const btnCadastro = document.querySelector('#facebook-register');
btnCadastro.addEventListener('click', (event) => {
  const fields = document.querySelectorAll('.open-account input');

  let campos = false;
  const elementos = {};
  for (let field = 0; field < fields.length; field += 1) {
    if (fields[field].type === 'text') {
      if (fields[field].value === '') {
        break;
      } else {
        event.preventDefault();
        const name = fields[field].name;
        const valor = fields[field].value;
        elementos[`${name}`] = valor;
      }
    }

    if (fields[field].type === 'radio') {
      if (fields[field].checked) {
        campos = true;
        const name = fields[field].name;
        const valor = fields[field].value;
        elementos[`${name}`] = valor;
      }
    }
  }

  if (campos === false) {
    event.preventDefault();
    const camposInvalidos = document.createElement('p');
    camposInvalidos.innerText = 'Campos inválidos';
    document.querySelector('.open-account').appendChild(camposInvalidos);
  } else {
    event.preventDefault();
    replaceContainer(elementos);
  }
});

const genderCustom = document.querySelector('#personalizado');
genderCustom.addEventListener('click', () => {
  const fieldCustom = document.createElement('input');
  fieldCustom.type = 'text';
  fieldCustom.name = 'gender-custom';
  fieldCustom.placeholder = 'Gênero (opcional)';
  document.querySelector('.gender').append(fieldCustom);
});
