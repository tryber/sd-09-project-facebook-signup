function verifyUserEmailPhone() {
  const inputValue = document.querySelector('#user-email-phone');
  alert(inputValue.value);
}

function createEvents() {
  const enter = document.querySelector('#button-login');
  enter.addEventListener('click', verifyUserEmailPhone);
}

window.onload = function () {
  createEvents();
};
