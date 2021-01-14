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
  let newText = document.querySelector('.main-content');
  let textName = document.querySelector('.firstname');
  let textLastName = document.querySelector('.lastname');
  let textEmailT = document.querySelector('.emailT');
  let textBirth = document.querySelector('.birth');
  newText.innerHTML = `Olá, ${textName.value} ${textLastName.value}
  Email/Telefone: ${textEmailT.value}
  Data de Aniversário: ${textBirth.value}`;
  newText.className = 'right-content';
  newText.style.width = '200px';
}  


function validate (event){
  let infoForm = document.querySelectorAll('.form-sign-in input');
  event.preventDefault();
  let notValid = [];
  for (let i = 0; i < infoForm.length; i += 1) {
    if (infoForm[i].value ==="") {
      notValid.push([i]);      
    }
  }
  if (notValid.length !== 0) {
    document.getElementById('answerVal').innerText = 'Campos inválidos';
    document.getElementById('answerVal').style.color = 'red'
  } else {
    mudarTexto();
  }
}

const validation = document.getElementById('facebook-register');
validation.addEventListener('click', validate);
