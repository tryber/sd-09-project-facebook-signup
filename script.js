const button = document.getElementById('button-login');
function falert(event) {
  event.preventDefault();
  const input = document.getElementById('user-email-phone');
  const inputValue = input.value;
  alert(inputValue);
}
button.addEventListener('click', falert);

const btnCadastre = document.getElementById('facebook-register');
function validInput(event) {
  event.preventDefault();
  const inputName = document.getElementById('name');
  const inputLastname = document.getElementById('lastname');
  const inputPhone = document.getElementById('phoneemail');
  const inputNewpw = document.getElementById('newpassword');
  const inputBirth = document.getElementById('birthdate');
  const inputNameValue = inputName.value;
  const inputLastnameValue = inputLastname.value;
  const inputPhoneValue = inputPhone.value;
  const inputNewpwValue = inputNewpw.value;
  const inputBirthValue = inputBirth.value;
  if (inputNameValue === '' || inputLastnameValue === '' || inputPhoneValue === '' || inputNewpwValue === '' || inputBirthValue === '') {
    const newP = document.querySelector('.right-content');
    const newP2 = document.createElement('p');
    const newP2Text = 'Campos inválidos';
    newP2.innerText = newP2Text;
    newP.appendChild(newP2);
  }
}
btnCadastre.addEventListener('click', validInput);
