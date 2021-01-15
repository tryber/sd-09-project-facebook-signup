function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function () {
    const msg = document.querySelector('#user-email-phone').value;
    alert(msg);
  });
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
    alert('Campos inválidos');
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
      alert('Campos inválidos');
    } else if (lastName.value === '') {
      alert('Campos inválidos');
    } else if (phoneEmail.value === '') {
      alert('Campos inválidos');
    } else if (newPassword.value === '') {
      alert('Campos inválidos');
    } else if (birthDate.value === '') {
      alert('Campos inválidos');
    } else {
      validationRadio();
    }
  });
}

window.onload = function () {
  login();
  validation();
};
