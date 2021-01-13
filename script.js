function alertLogin() {
  const buttonLogin = document.getElementById('button-login');
  const inputLogin = document.getElementById('user-email-phone');
  buttonLogin.addEventListener('click', function () {
    const loginValue = inputLogin.value;
    alert(loginValue);
  });
}

function stopDefault(event) {
  event.preventDefault();
}

const validateCamps = document.querySelectorAll('.cadastro input');
function registerValidate() {
  for (let index = 0; index < 5; index += 1) {
    if (validateCamps[index].value === '') {
      const div = document.createElement('div');
      div.innerHTML = `${validateCamps[index].name}: Campos inválidos`;
      document.querySelector('form.cadastro').appendChild(div);
    }
  }
}

// function createValidRegister() {
//   for (let index = 0; index < 5; index += 1) {
//     if (validateCamps[index] !== '') {
//     const createDiv = document.createElement('div');
//     createDiv.innerHTML = `${validateCamps[index].name}: ${validateCamps[index].value}`;
//     document.getElementById('right-content').appendChild(createDiv);
//     }
//   }
//   const removeForm = document.getElementById('cadastro').remove();
// }

// function createGenderRegister() {
//   const getGender = document.querySelectorAll('.radioButtons input');
//   for (let index = 0; index < 3; index += 1) {
//     if (getGender[index].checked === true) {
//       const createDiv = document.createElement('div');
//       createDiv.innerHTML = `${getGender[index].name}: ${getGender[index].value}`;
//       document.getElementById('right-content').appendChild(createDiv);
//     }
//   }
//   if (getGender[2].checked === true) {
//     const customGender = document.getElementById('genderText')
//     const createDiv = document.createElement('div');
//     createDiv.innerHTML = `${customGender.name}: ${customGender.value}`;
//     document.getElementById('right-content').appendChild(createDiv);
//   }
// }

function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', stopDefault);
  registerButton.addEventListener('click', registerValidate);
}
// registerButton.addEventListener('click', createValidRegister);
// registerButton.addEventListener('click', createGenderRegister);

// function checkEmail() {
//   const email = document.querySelector('.input-login');
//   let insertedEmail = email.value;
//   const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
//   if (!emailFormat && insertedEmail.length) {
//     email.value = '';
//     alert('email inválido');
//     return false;
//   }
//   return emailFormat
// }

window.onload = function () {
  alertLogin();
  listeners();
};
