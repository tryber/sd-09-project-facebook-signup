function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function () {
    const msg = document.querySelector('#user-email-phone').value;
    alert(msg);
  });
}

function invalidFields() {
  const span = document.getElementById('invalid-fields');
  span.innerText = 'Campos inválidos';
}

function validationRadio() {
  const gender = document.getElementsByName('gender');
  let aux = 0;
  for (let index = 0; index < gender.length; index += 1) {
    if (gender[index].checked !== true) {
      aux += 1;
    }
  }
  if (aux === 3) {
    invalidFields();
  }
}

function validation() {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const phoneEmail = document.querySelector('#phone-email');
  const newPassword = document.querySelector('#pass-word');
  const birthDate = document.querySelector('#birthdate');
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function () {
    if (firstName.value === '') {
      invalidFields();
    } else if (lastName.value === '') {
      invalidFields();
    } else if (phoneEmail.value === '') {
      invalidFields();
    } else if (newPassword.value === '') {
      invalidFields();
    } else if (birthDate.value === '') {
      invalidFields();
    } else {
      validationRadio();
    }
  });
}

window.onload = function () {
  login();
  validation();
};
