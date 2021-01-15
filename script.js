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
