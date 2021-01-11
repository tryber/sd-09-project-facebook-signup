function alertButton() {
  const buttonLogin = document.querySelector('#button-login');
  buttonLogin.addEventListener('click', function () {
    const emailField = document.querySelector('#user-email-phone');

    alert(emailField.value);
  });
}

function validadeField() {
  const buttonSubmit = document.querySelector('#facebook-register');
  buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    const fields = document.querySelectorAll('.register-form input');
    console.log(fields[0]);
    for(let index = 0; index < fields.length; index += 1) {
      let fieldValue = fields[index].value;
      if(fieldValue === '') {
        const form = document.querySelector('.register-form');
        const formWarning = document.createElement('p');
        formWarning.innerText = 'Campos inválidos';
        form.appendChild(formWarning);
      }
    }
  })
}

validadeField();
alertButton();
