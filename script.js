window.onload = function () {
  createEvents();
};

function createEvents() {
  const enter = document.querySelector('#button-login');
  enter.addEventListener('click', verifyUserEmailPhone);
}

function verifyUserEmailPhone() {
  const inputValue = document.querySelector('#user-email-phone');
  alert(inputValue.value);
}