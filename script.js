function genderInput() {
  const gerderListner = document.querySelector('.gender-control');

  gerderListner.addEventListener('click', function () {
    const radioValue = document.querySelector('input[name="gender"]:checked').value;

    if (radioValue === 'Personalizado') {
      document.querySelector('.other-gender').style.display = 'block';
    } else {
      document.querySelector('.other-gender').style.display = 'none';
    }
  });
}

function logIn() {
  const buttonListener = document.getElementById('button-login');

  buttonListener.addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
}

function checkRegister () {
  const inputLocation = document.querySelectorAll('.input');
  let countInvalidFields = 0;
  const errorMessageLocation = document.querySelector('#invalidFields')
  const registerButton = document.querySelector('#facebook-register')

  registerButton.addEventListener('click', function (event) {
    for (let index = 0; index < inputLocation.length; index += 1) {
      if (inputLocation[index].value === "") {
        countInvalidFields += 1;
      }
    }

    if (countInvalidFields > 0) {
      event.preventDefault();
      errorMessageLocation.innerText = 'Campos inválidos';
    }
  })
}



checkRegister ()
genderInput();
logIn();
