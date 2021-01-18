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


function excluir() {
  const excluirH1 = document.querySelector('h1');
  const excluirH2 = document.querySelector('h4');
  const excluirForms = document.querySelector('.form-sign-in');
  excluirH1.remove();
  excluirH2.remove();
  excluirForms.remove();
}

function criap() {
  const newText = document.querySelector('.right-content');
  const paragraph = document.createElement('p');
  paragraph.id = 'paragrafo';
  newText.appendChild(paragraph);
}

function mudarTexto() {
  const dados = [];
  const textName = document.querySelector('.firstname');
  dados.push(textName.value);
  const textLastName = document.querySelector('.lastname');
  dados.push(textLastName.value);
  const textEmailT = document.querySelector('.emailT');
  dados.push(textEmailT.value);
  const textBirth = document.querySelector('.birth');
  dados.push(textBirth.value);
  const radioChecker = document.querySelector('#feminino');
  const radioChecker1 = document.querySelector('#masculino');
  if (radioChecker.checked) {
    dados.push('Feminino');
  } else if (radioChecker1.checked) {
    dados.push('Masculino');
  } else {
    dados.push('Personalizado');
  }
  excluir();
  criap();
  const parag = document.querySelector('#paragrafo');
  parag.innerText = `Olá, ${dados[0]} ${dados[1]} Email/Telefone: ${dados[2]} Data de Aniversário: ${dados[3]} Genero: ${dados[4]}`;
}

function validateChecked() {
  const radioChecker = document.querySelector('#feminino');
  const radioChecker1 = document.querySelector('#masculino');
  const radioChecker2 = document.querySelector('#personalizado');
  if (radioChecker.checked === 'true' || radioChecker1.checked === 'true' || radioChecker2.checked === 'true') {
    return true;
  }
  return false;
}

function validate(event) {
  const infoForm = document.querySelectorAll('.form-sign-in input');
  event.preventDefault();
  const notValid = [];
  validateChecked();
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
