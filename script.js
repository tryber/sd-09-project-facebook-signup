const btnAlert = document.getElementById('button-login');
function showAlert() {
  alert(document.getElementById('user-email-phone').value);
}
btnAlert.addEventListener('click', showAlert);

const validate = new window.JustValidate('.js-form', {
  rules: {
    data: {
      required: true,
    },
    radio: {
      required: true,
    },
  },
  messages: {
    email: 'Campo Inválidos',
    name: 'Campo Inválidos',
    password: 'Campo Inválidos',
    radio: 'Campo Inválidos',
    text: 'Campo Inválidos',
    data: 'Campo Inválidos',
  },
});
const btnvalidate = document.getElementById('facebook-register');
btnvalidate.addEventListener('click', function () {
  if (validate.isValidationSucess) {
    alert('Os campos são obrigatórios');
  }
});

const otherGender = document.getElementById('other');
function personalizedGender() {
  const father = document.getElementById('inputParent');
  if (!father.childNodes[0]) {
    const child = document.createElement('input');
    father.appendChild(child);
    child.setAttribute('name', 'gender-custom');
    child.setAttribute('placeholder', 'Gênero(opcional)');
    child.setAttribute('id', 'perGender');
  }
}
otherGender.addEventListener('click', personalizedGender);

//retorna os dados do novo usuário cadastrado - requisito 20
function userData() {
  const data = document.getElementsByTagName('input');
  const userGender = document.querySelector('input[type="radio"]:checked');
  const welcome = `Olá, ${data[2].value} ${data[3].value}
  ${data[4].value}
  ${data[6].value}
  ${userGender.value}`;
  return welcome;
}

//retorna os dados do usuário cadastrado na div da direita - requisito 20
const registerButton = document.getElementById('facebook-register');
registerButton.addEventListener('click', function () {
  if (validate) {
    const selectRight = document.querySelector('.right-content');
    const newSignUp = document.querySelector('.facebook-register-form');
    selectRight.innerText = userData();
    //newSignUp.style.display = 'none';
  }
});
