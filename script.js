const buttonLogin = document.querySelector('#button-login');
const userEmailPhoneInput = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', function () {
  const userEmailPhoneInputValue = userEmailPhoneInput.value;
  alert(userEmailPhoneInputValue);
});

function checkRadio() {
  const radioInput = document.querySelectorAll('.radio-container input');
  for (let index = 0; index < radioInput.length; index += 1) {
    if (radioInput[index].checked) {
      return radioInput[index].value;
    }
  }
}

function checkInputValue () {
  let check = false;
  const formInput = document.querySelectorAll('form>input');
    for (let index = 0; index < formInput.length; index +=1) {
      if (formInput[index].value === '' || checkRadio() === undefined) {
        check = true;
      }
    }
  return check;
}

window.onload = function () {
  const submitButton = document.querySelector('#facebook-register');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (checkInputValue()) {
      alert('Campos inválidos');
    }
  });
}
