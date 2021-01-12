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

window.onload = function () {
  const submitButton = document.querySelector('#facebook-register');
  let errorMessage = document.querySelector('#errorMessage');
  submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    errorMessage.innerText = '';
    if (checkInputValue()) {
      errorMessage.innerText = 'Campos inválidos';
      errorMessage.style.color = 'red';
    }
  });
};
