document.querySelector('#button-login').addEventListener('click', function () {
  const userEmailPhoneValue = document.querySelector('#user-email-phone').value;
  alert(userEmailPhoneValue);
});

function validateForm() {
  let inputs = document.getElementsByClassName('required');
  let lengths = inputs.length;
  let valid = true;
  for (let i = 0; i < lengths; i += 1){
    if (inputs[i].value) {
      valid = false; }
  }
  if (valid) {
    return true;
  }
    alert('Campos Inválidos');
}

document.querySelector('#facebook-register').addEventListener('click', validateForm);
