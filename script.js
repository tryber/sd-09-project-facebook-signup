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

function finalText() {
  const modifContain = document.querySelector('.main-content');
  modifContain.innerHTML = 'TESTE';
}
function validate(evento) {
  const infoForm = document.querySelectorAll('.form-sign-in input');
  let isValid = false;
  for (let i = 0; i <= infoForm.length; i += 1) {
    if (infoForm[i] !== ' ') {
      isValid = true;
    } else {
      isValid = false;
    }
  }
  evento.preventDefault();
  if (isValid === false) {
    document.getElementById('answerVal').innerText = 'Campos inválidos';
  }
    finalText();
}

const validation = document.getElementById('facebook-register');
validation.addEventListener('click', validate);
