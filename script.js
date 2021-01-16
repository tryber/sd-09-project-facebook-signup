function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const msg = document.querySelector('#user-email-phone').value;
    if (msg !== '') {
      alert(msg);
    }
  });
}

function invalidFields() {
  const span = document.getElementById('invalid-fields');
  span.className = 'invalid-fields';
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

function genderCustom() {
  const option = document.querySelector('input[name="gender"]:checked').value;
  const element = document.querySelector('#gender-custom');
  const newBr = document.createElement('br');
  const newElement = document.createElement('input');
  newElement.type = 'text';
  newElement.name = 'gender-custom';
  newElement.placeholder = 'Gênero (opcional)';
  newElement.className = 'input ajust';
  if (option === 'Personalizado') {
    element.appendChild(newBr);
    element.appendChild(newElement);
  }
}

function clickRadio() {
  const optionCustom = document.querySelector('#custom');
  optionCustom.addEventListener('click', genderCustom);
}

function validation() {
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const span = document.getElementById('invalid-fields');
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const phoneEmail = document.querySelector('#phone-email');
    const newPassword = document.querySelector('#pass-word');
    const birthDate = document.querySelector('#birthdate');
    span.className = '';
    span.innerText = '';
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
  clickRadio();
  validation();
};
