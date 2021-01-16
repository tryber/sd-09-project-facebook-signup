function clicar() {
  const btnclicar = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');
  btnclicar.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}
//  Interpretei errado e a mensagem do alert não era "email ou telefone" mas sim, o valor do//
//  campo e-mail e telefone. Agora deu!//
clicar();

function verificaInputs() {
  const btncadastro = document.getElementById('facebook-register');
  const inputs = document.querySelectorAll('input');
  btncadastro.addEventListener('click', function() {
    for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i].value === '') {
          const errorMsg = document.createElement('p');
          errorMsg.innerText = 'Campos inválidos';
        }
      }
  });
}

verificaInputs();
