function validateRegisterFields() {
  
}

function verifyUserEmailPhone() {
  const inputValue = document.querySelector('#user-email-phone');
  alert(inputValue.value);
}

function createEvents() {
  const enter = document.querySelector('#button-login');
  enter.addEventListener('click', verifyUserEmailPhone);
  const register = document.querySelector('#facebook-register');
  register.addEventListener('click', validateRegisterFields);
}

window.onload = function () {
  createEvents();
};
