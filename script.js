const listRegister = document.querySelector('.register');
const secToLast = listRegister.lastElementChild.previousElementSibling;

function addAlert() {
  const btnEnter = document.querySelector('#button-login');
  btnEnter.addEventListener('click', function () {
    const valueEmail = document.querySelector('#user-email-phone');
    alert(valueEmail.value);
  });
}

function checkCamps() {
  const btnRegister = document.querySelector('#facebook-register');
  btnRegister.addEventListener('click', function () {
    let flag = 0;
    const requiredCamps = document.getElementsByClassName('confirmation');
    const campsText = document.getElementById('invalidCamps');
    for (let i = 0; i < requiredCamps.length; i += 1) {
      if (requiredCamps[i].innerText === '') {
        flag = 1;
      }
    }
    if (flag === 0) {
      campsText.innerText = 'Sucesso!';
    } else {
      campsText.innerText = 'Campos inválidos';
    }
  });
}

function addTextBoxCustom() {
  const optCustom = document.querySelector('#Personalizado');
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

function removeTextBoxCustom() {
  const optFemale = document.querySelector('#Feminino');
  optFemale.addEventListener('click', function () {
    if (secToLast.previousElementSibling.type === 'text') {
      secToLast.previousElementSibling.remove();
    }
  });
  const optMale = document.querySelector('#Masculino');
  optMale.addEventListener('click', function () {
    if (secToLast.previousElementSibling.type === 'text') {
      secToLast.previousElementSibling.remove();
    }
  });
}

addAlert();
checkCamps();
addTextBoxCustom();
removeTextBoxCustom();
