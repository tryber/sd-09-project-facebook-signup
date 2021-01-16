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
  let result;
  let aux = 0;
  for (let index = 0; index < gender.length; index += 1) {
    if (gender[index].checked !== true) {
      aux += 1;
    }
  }
  if (aux === 3) {
    invalidFields();
    result = false;
  } else {
    result = true;
  }
  return result;
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

function clearForm() {
  const form = document.querySelector('.right-content');
  form.style.display = 'none';
}

function validation() {
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const phoneEmail = document.querySelector('#phone-email').value;
    const newPassword = document.querySelector('#pass-word').value;
    const birthDate = document.querySelector('#birthdate').value;
    if (firstName === '') {
      invalidFields();
    } else if (lastName === '') {
      invalidFields();
    } else if (phoneEmail === '') {
      invalidFields();
    } else if (newPassword === '') {
      invalidFields();
    } else if (birthDate === '') {
      invalidFields();
    } else {
      validationRadio();
    }
    confirmValidation();
  });
}

function confirmRegistration() {
  const mainContent = document.querySelector('main');
  const rightContent = document.createElement('div');
  rightContent.className = 'right-content resume';
  const resume = document.createElement('div');
  const fName = document.querySelector('#first-name').value;
  const lName = document.querySelector('#last-name').value;
  const birthday = document.querySelector('#birthdate').value;
  const phoneOrEmail = document.querySelector('#phone-email').value;
  const genderOption = document.querySelector('input[name="gender"]:checked').value;
  resume.innerHTML = `<p>✌😎 Olá, <strong>${fName} ${lName}</strong>! Beleza?!</p>
  <p>‣ Telefone / e-mail: <strong>${phoneOrEmail}</strong></p>
  <p>‣ Data de Nasc.: <strong>${birthday}</strong></p>
  <p>‣ Gênero: <strong>${genderOption}</strong></p>
  <br><p>Projeto realizado por:</p>
  <p>👉 <em>Frederico Canoeira</em></p>
  <p>👉 <em>Cleber Teixeira</em></p>
  <p><strong>#GoTrybe!</strong> 🚀</p>`;
  rightContent.appendChild(resume);
  mainContent.appendChild(rightContent);
}

function confirmValidation() {
  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const phoneEmail = document.querySelector('#phone-email').value;
  const newPassword = document.querySelector('#pass-word').value;
  const birthDate = document.querySelector('#birthdate').value;
  if (firstName !== '') {
    if (lastName !== '') {
      if (phoneEmail !== '') {
        if (newPassword !== '') {
          if (birthDate !== '') {
            if (validationRadio() === true) {
              clearForm();
              confirmRegistration();
            }
          }
        }
      }
    }
  }
}

window.onload = function () {
  login();
  clickRadio();
  validation();
};
