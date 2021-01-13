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

function registerUser() {
  const buttonRegister = document.querySelector('#facebook-register');

  buttonRegister.addEventListener('click', function () {
    const dataFields = document.querySelectorAll('.input');
    let checkContent = 0;

    for (let index = 0; index < dataFields.length; index += 1) {
      if (dataFields[index].value === '') {
        checkContent += 1
      }
    }

    if (checkContent !== 0) {
      document.querySelector('#invalidFields').innerText = 'Campos inválidos';
    }
  });
}

genderInput();
logIn();
registerUser();
