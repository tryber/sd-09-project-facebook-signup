const getButton = document.querySelector('#button-login');
getButton.addEventListener('click', function () {
  alert(document.querySelector('#user-email-phone').value);
});

function checkEmptyFields() {
  const getInputs = document.querySelectorAll('#register-form input');
  for (index = 0; index < getInputs.length; index += 1) {
    if ( getInputs[index].value === '' ) {
      alert('Campos inválidos')
    }
    continue;
  }
}

const getRegisterBnt = document.querySelector('#facebook-register');
getRegisterBnt.addEventListener('click', function (event) {
  event.preventDefault();
  checkEmptyFields();
});
