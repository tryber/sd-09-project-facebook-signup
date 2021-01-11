function alerta() {
  const email = document.querySelector('#user-email-phone');
  alert(email.value);
}

function validacao (event) {
  if(document.getElementById('name').value === '' || document.getElementById('lastname').value === '' || document.getElementById('phonemail').value === '' || document.getElementById('senha').value === '' || document.getElementById('nascimento').value === '' ) {
    alert('Campos inválidos');
    event.preventDefault();
  }
  let status = false;
  if (document.getElementById('fem').checked) {
    status = true;
  }

  if (document.getElementById('masc').checked) {
    status = true;
  }

  if (document.getElementById('perso').checked) {
    status = true;
  }

  if (status === false) {
    alert('Campos inválidos');
    event.preventDefault();
  }
}

window.onload = function () {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', alerta);
  const btnCadastro = document.querySelector('#facebook-register');
  btnCadastro.addEventListener('click' , validacao);
};
