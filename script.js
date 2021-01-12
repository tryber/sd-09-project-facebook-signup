function checkAndChangeClassName(customGenderInput, gendersInput) {
  if (gendersInput.checked) {
    if (gendersInput.value === 'custom') {
      customGenderInput[0].className = 'showed';
    } else {
      customGenderInput[0].className = 'hidden';
    }
  }
}

function verifySelectedGender() {
  const gendersInput = document.getElementsByName('gender');
  const customGenderInput = document.getElementsByName('gender-custom');
  for (let index = 0; index < gendersInput.length; index += 1) {
    checkAndChangeClassName(customGenderInput, gendersInput[index]);
  }
}

function verifyUserEmailPhone() {
  const inputValue = document.querySelector('#user-email-phone');
  alert(inputValue.value);
}

function createEvents() {
  const enter = document.querySelector('#button-login');
  enter.addEventListener('click', verifyUserEmailPhone);
  const gendersInput = document.getElementsByName('gender');
  for (let index = 0; index < gendersInput.length; index += 1) {
    gendersInput[index].addEventListener('click', verifySelectedGender);
  }
}

window.onload = function () {
  createEvents();
};
