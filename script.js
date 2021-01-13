function buttonAlertLogin() {
  const buttonLogin = document.querySelector('#button-login');
  const valueEmail = document.querySelector('#user-email-phone');
  buttonLogin.addEventListener('click', function () {
    alert(valueEmail.value);
  });
}
buttonAlertLogin();

function checkPersonalizado() {
  const outers = document.querySelector('#personalizado');
  const gender = document.querySelector('.radio-buttons');
  outers.addEventListener('click', function () {
    gender.innerHTML = '<input placeholder="Gênero (opcional)" name="gender-custom">';
  });
}
checkPersonalizado();

const validation = document.getElementById("facebook-register");
validation.addEventListener("click",validate);

function validate(evento){
  const infoForm = document.querySelector(".form-sign-in input");
  let isValid = false;
  for(let i = 0;i <= infoForm.length; i+=1){
    if (infoForm[i] !== " "){
       isValid = true;
    }else{
      isValid = false;
    }
  }
  evento.preventDefault();
  if (isValid ===false){
    document.getElementById("answerVal").innerText ="Campos Inválidos";
  }
}
