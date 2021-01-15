document.querySelector('#button-login').addEventListener('click', function () {
  const userEmailPhoneValue = document.querySelector('#user-email-phone').value;
  alert(userEmailPhoneValue);
});


function Validate_form() {
  var inputs = document.getElementsByClassName('required');
  var lengths = inputs.length;
  var valid = true;
  for(var i=0; i < lengths; i++){
    if (!inputs[i].value){ valid = false; }
  }
  if (!valid){
  alert('Campos Inválidos');
  return false;
  } else { return true; }
  }