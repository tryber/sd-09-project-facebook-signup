const loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function () {
  const typedEmail = document.getElementById('user-email-phone').value;
  alert(typedEmail);
});

const registerButton = document.getElementById('facebook-register');

function validateInputBoxes() {
  const myForm = document.getElementsByTagName("input");
  let fieldsAreInvalid = false;
  for(let index = 2; index <= 6; index +=1) {
    fieldsAreInvalid = (myForm[index].value === "");
    if (fieldsAreInvalid) {
      return true;
    };
  }
}

function validateRadioButtons() {
  const myForm = document.getElementsByTagName("input");
  let fieldsAreInvalid = Boolean(myForm[7].checked || myForm[8].checked || myForm[9].checked);
  return !fieldsAreInvalid;
}

function validateForm() {
  let areFieldsInvalid = validateInputBoxes();
  let areRadioBttnsInvalid = validateRadioButtons();
  if (areFieldsInvalid || areRadioBttnsInvalid) {
    alert('Campos inválidos');
  }
}

registerButton.addEventListener('click', validateForm);
