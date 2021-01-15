const btnEntrar = document.querySelector('#button-login');

function addAlert() {
  btnEntrar.addEventListener('click', function () {
    const valueEmail = document.querySelector('#user-email-phone');
    alert(valueEmail.value);
  });
}

addAlert();

const optCustom = document.querySelector('#Personalizado');
const listRegister = document.querySelector('.register');

function addTextBoxCustom() {
  optCustom.addEventListener('click', function () {
    if (listRegister.lastElementChild.previousElementSibling.type !== 'text') {
      const textBoxCustom = document.createElement('input');
      textBoxCustom.type = 'text';
      textBoxCustom.name = 'gender-custom';
      textBoxCustom.placeholder = 'Gênero (opcional)';
      listRegister.insertBefore(textBoxCustom, listRegister.lastElementChild);
    }
  });
}

addTextBoxCustom();

const optFemale = document.querySelector('#Feminino');
const optMale = document.querySelector ('#Masculino');

function removeTextBoxCustom() {
  optFemale.addEventListener('click', function () {
    if (listRegister.lastElementChild.previousElementSibling.type === 'text') {
      listRegister.lastElementChild.previousElementSibling.remove();
    }
  });
  optMale.addEventListener('click', function () {
    if (listRegister.lastElementChild.previousElementSibling.type === 'text') {
      listRegister.lastElementChild.previousElementSibling.remove();
    }
  });
}

removeTextBoxCustom();
