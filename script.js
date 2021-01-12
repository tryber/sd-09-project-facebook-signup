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
  for(let index = 0; index < validateCamps.length; index += 1) {
    if(validateCamps[index].value === "") {
      validateCamps[index].placeholder = 'Campos inválidos';
    }
  }
}

function listeners() {
  const registerButton = document.getElementById('facebook-register');
  registerButton.addEventListener('click', stopDefault);
  registerButton.addEventListener('click', registerValidate);

}
// utlizar function abaixo como base para checkar todos campos
// function confirmAllPersonalData() {  
//   const cvSection = document.getElementById('checkCV'); 
//   let getInput = document.querySelectorAll('.one input, select');

//   for(let index = 0; index < getInput.length; index += 1) {   
//     let div = document.createElement('div');
//     div.innerHTML = `${getInput[index].name}: ${getInput[index].value}`
//     cvSection.appendChild(div)
//   }
//   if(getInput[4].checked === true) {
//     cvSection.removeChild(cvSection.children[5])
//   }
//   if(getInput[5].checked === true) {
//     cvSection.removeChild(cvSection.children[4])
//   }
// }
// function confirmAllPersonalProfile() {
//   const cvSection = document.getElementById('checkCV'); 
//   let getInput = document.querySelectorAll('.two input, textarea');
//   for(let index = 0; index < getInput.length; index += 1) {
//     let div = document.createElement('div');
//     div.innerHTML = `${getInput[index].name}: ${getInput[index].value}`
//     cvSection.appendChild(div)
//   }
// }
// 
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
