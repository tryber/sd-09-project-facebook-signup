const btnEnter = document.querySelector('#button-login');

function addAlert() {
  btnEnter.addEventListener('click', function () {
    const valueEmail = document.querySelector('#user-email-phone');
    alert(valueEmail.value);
  });
}

addAlert();

const listRegister = document.querySelector('.register');
const btnRegister = document.querySelector('#facebook-register');
const requiredCamps = document.getElementsByClassName('confirmation');

function checkCamps() {
  btnRegister.addEventListener('click', function () {
    for (let i = 0; i < requiredCamps.length; i += 1) {
      if (requiredCamps[i].innerText === '') {
        document.getElementById('invalidCamps').innerText = 'Campos inválidos';
      }
    }
  });
}

checkCamps();

const optCustom = document.querySelector('#Personalizado');
const secToLast = listRegister.lastElementChild.previousElementSibling;

function addTextBoxCustom() {
  optCustom.addEventListener('click', function () {
    if (secToLast.previousElementSibling.type !== 'text') {
      const textBoxCustom = document.createElement('input');
      textBoxCustom.type = 'text';
      textBoxCustom.name = 'gender-custom';
      textBoxCustom.required = true;
      textBoxCustom.className = 'confirmation';
      textBoxCustom.placeholder = 'Gênero (opcional)';
      listRegister.insertBefore(textBoxCustom, secToLast);
    }
  });
}

addTextBoxCustom();

const optFemale = document.querySelector('#Feminino');
const optMale = document.querySelector('#Masculino');

function removeTextBoxCustom() {
  optFemale.addEventListener('click', function () {
    if (secToLast.previousElementSibling.type === 'text') {
      secToLast.previousElementSibling.remove();
    }
  });
  optMale.addEventListener('click', function () {
    if (secToLast.previousElementSibling.type === 'text') {
      secToLast.previousElementSibling.remove();
    }
  });
}

removeTextBoxCustom();
