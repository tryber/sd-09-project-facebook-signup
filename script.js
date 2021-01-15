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
    email: 'Campo Inválido',
    name: 'Campo Inválido',
    password: 'Campo Inválido',
    radio: 'Campo Inválido',
    text: 'Campo Inválido',
    data: 'Campo Inválido',
  },
});


const otherGender = document.getElementById('other');
function personalizedGender() {
  const father = document.getElementById('inputParent');
  if (father.childNodes[0]) {
    console.log('Já existe um input');
  } else {
    const child = document.createElement('input');
    father.appendChild(child);
    child.setAttribute('name', 'gender-custom');
    child.setAttribute('placeholder', 'Gênero(opcional)');
    child.setAttribute('id', 'perGender');
  }
}
otherGender.addEventListener('click', personalizedGender);
