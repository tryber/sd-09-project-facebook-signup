const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

function checkRadio() {
  const radioInput = document.querySelectorAll('.radio-container input');
  let checkedInput;
  for (let index = 0; index < radioInput.length; index += 1) {
    if (radioInput[index].checked) {
      checkedInput = radioInput[index].value;
    }
  }
  return checkedInput;
}

function checkInputValue() {
  let check = false;
  const formInput = document.querySelectorAll('form>input');
  for (let index = 0; index < formInput.length; index += 1) {
    if (formInput[index].value === '' || checkRadio() === undefined) {
      check = true;
    }
  }
  return check;
}

const genderCustom = document.querySelector('#personalizado');
function showHiddenInput() {
  const hiddenInput = document.querySelector('.hidden-input');
  if (genderCustom.checked) {
    hiddenInput.style.display = 'unset';
  }
}
genderCustom.addEventListener('click', showHiddenInput);

function createWelcomeParagraph() {
  const rightContent = document.querySelector('.right-content');
  rightContent.innerText = `
  Olá, ${document.querySelector('#firstname').value} ${document.querySelector('#lastname').value}
  ${document.querySelector('#phone_email').value}
  ${document.querySelector('#birthdate').value}
  ${checkRadio()}`;
}

window.onload = function () {
  const submitButton = document.querySelector('#facebook-register');
  const errorMessage = document.querySelector('#errorMessage');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    errorMessage.innerText = '';
    if (checkInputValue()) {
      errorMessage.innerText = 'Campos inválidos';
      errorMessage.style.color = 'red';
    } else {
      createWelcomeParagraph();
    }
  });
};
