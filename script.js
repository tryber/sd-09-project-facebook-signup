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
  const gender = document.querySelector('#textGender');
  outers.addEventListener('click', function () {
    gender.innerHTML = '<input placeholder="Gênero (opcional)" name="gender-custom">';
  });
}
checkPersonalizado();

function validate (event){
  let infoForm = document.querySelectorAll('.form-sign-in input');
  event.preventDefault();
  let notValid = [];
  for (let i = 0; i <= infoForm.length; i += 1) {
    if (infoForm[i].value ==="") {
      notValid.push([i]);

      
    }
  }
  if (notValid.length !== "") {
    document.getElementById('answerVal').innerText = 'Campos inválidos';
    document.getElementById('answerVal').style.color = 'red'
  } else {
    
  }
}
const validation = document.getElementById('facebook-register');
validation.addEventListener('click', validate);
