document.querySelector('#button-login').addEventListener('click', () => {
  alert(document.querySelector('#user-mail-phone').value);
});

function validateText(formInputs) {
  let isValid = true;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (!formInputs[index].value) {
      isValid = false;
    }
  }
  return isValid;
}

function validateRadios(formInputs) {
  let isValid = false;
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].checked) {
      isValid = true;
    }
  }
  return isValid;
}

function validateAndRegister(event) {
  const formInputs = document.querySelectorAll('.right-content input');
  let isTextValid = true;
  let isRadioChecked = false;
  isTextValid = validateText(formInputs);
  isRadioChecked = validateRadios(formInputs);
  if (!isTextValid || !isRadioChecked) {
    event.preventDefault();
    const invalidFieldsParagraph = document.getElementById('invalid-fields');
    invalidFieldsParagraph.innerText = 'Campos inválidos';
  }
}

const rightContent = document.querySelector('.right-content');
  rightContent.innerHTML = `
  <p>Olá, ${nome} ${sobrenome}</p>
  <p>Email: ${email}</p>
  <p>Data de nascimento: ${data}</p>
  <p>Gênero: ${genero}</p>`;
  
const facebookRegister = document.getElementById('facebook-register');
facebookRegister.addEventListener('click', validateAndRegister);
