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

function mudarTexto() {
  const newText = document.querySelector('.main-content');
  const textName = document.querySelector('.firstname');
  const textLastName = document.querySelector('.lastname');
  const textEmailT = document.querySelector('.emailT');
  const textBirth = document.querySelector('.birth');
  const textRadio = document.querySelector('.container-radios');
  let genero;
  if (textRadio.value == 'Feminino'){
    genero = 'Feminino';
  } else {
     genero = 'Masculino';
  }
  newText.innerHTML = `Olá, ${textName.value} ${textLastName.value}
  Email/Telefone: ${textEmailT.value}
  Data de Aniversário: ${textBirth.value}
  Genero: ${genero}`;
  newText.className = 'right-content';
  newText.style.width = '200px';
}
function validate(event) {
  const infoForm = document.querySelectorAll('.form-sign-in input');
  event.preventDefault();
  const notValid = [];
  for (let i = 0; i < infoForm.length; i += 1) {
    if (infoForm[i].value === '') {
      notValid.push([i]);
    }
  }
  if (notValid.length !== 0) {
    document.getElementById('answerVal').innerText = 'Campos inválidos';
    document.getElementById('answerVal').style.color = 'red';
  } else {
    mudarTexto();
  }
}

const validation = document.getElementById('facebook-register');
validation.addEventListener('click', validate);
