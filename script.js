const getButton = document.querySelector('#button-login');

getButton.addEventListener('click', function () {
  const input = document.querySelector('#user-email-phone').value;
  alert(input);
});

function createMessageCamposInvalidos() {
  const formCadastro = document.querySelector('#form-cadastro');
  const p = document.createElement('p');
  p.innerText = 'Campos inválidos';
  p.style.border = '1px solid black';
  p.id = 'invalid-msg';
  formCadastro.appendChild(p);
}


function validatorRadio(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].type === 'radio' && !inputs[i].checked) {
      createMessageCamposInvalidos();
    }
  }
}

function validatorInputs(inputs) {
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      createMessageCamposInvalidos();
    }
  }
}

function verificaCamposCadastro() {
  const inputs = document.querySelectorAll('#form-cadastro input');
  const btnCadastro = document.querySelector('#facebook-register');

  btnCadastro.addEventListener('click', function (e) {
    e.preventDefault();
    validatorRadio(inputs);
    validatorInputs(inputs);
  });
}
verificaCamposCadastro();
