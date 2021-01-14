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

function verificarCamposVazios() {
  const btnforms = document.querySelectorAll('#facebook-register');
  const forms = document.querySelectorAll('#forms');
  btnforms.addEventListener('click', function(event){
    for (let i = 0; i < forms.length; i +=1) {
      if (forms[i].value == ""){
        alert("Campos Inválidos");
      }
    }
  })
}

verificarCamposVazios();
