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
    gender.innerHTML = '<input type="text" id="Personal" placeholder="Gênero (opcional)" name="gender-custom">';
  });
}
checkPersonalizado();

function mudarTexto() {
  const newText = document.querySelector('.right-content');
  const textName = document.querySelector('.firstname');
  const textLastName = document.querySelector('.lastname');
  const textEmailT = document.querySelector('.emailT');
  const textBirth = document.querySelector('.birth');
  const radioChecker = document.querySelector('#feminino');
  const radioChecker1 = document.querySelector('#masculino');
  const textPersonal = document.getElementById('textGender');
  let genero = '';
  if (radioChecker.checked) {
    genero = 'Feminino';
  } else if (radioChecker1.checked) {
    genero = 'Masculino';
  } else {
    genero = textPersonal.innerText;
  }
  newText.innerHTML = `Olá, ${textName.value} ${textLastName.value}
  Email/Telefone: ${textEmailT.value}
  Data de Aniversário: ${textBirth.value}
  Genero: ${genero}`;
  newText.className = 'right-content';
  newText.style.width = '200px';
}

function validateChecked() {
  const mudanca = document.getElementById('answerVal');
  const radioChecker = document.querySelector('#feminino').checked;
  const radioChecker1 = document.querySelector('#masculino').checked;
  const radioChecker2 = document.querySelector('#personalizado').checked;
  if (radioChecker === '' && radioChecker1 === '' && radioChecker2 === '') {
    mudanca.innerText = 'Campos inválidos';
    mudanca.style.color = 'red';
  }
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
validation.addEventListener('click', validateChecked);
