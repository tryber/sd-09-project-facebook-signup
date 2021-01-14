function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function () {
    const msg = document.querySelector('#user-email-phone').value;
    alert(msg);
  });
}

function validation() {
  /* const emailPhone = document.querySelector('#user-email-phone'); */
  /* const passWord = document.querySelector('#user-password-label'); */
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const phoneEmail = document.querySelector('#phone-email');
  const newPassword = document.querySelector('#pass-word');
  const birthDate = document.querySelector('#birthdate');
  const gender = document.querySelector('input[name="gender"]:checked');
  /* document.getElementsByName('gender'); */
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function () {
    /* if (emailPhone.value === "") {
      alert("Campos inválidos");
    } else if (passWord.value === "") {
      alert("Campos inválidos");
    } else */ 
    if (firstName.value === '') {
      alert('Campos inválidos');
    } else if (lastName.value === '') {
      alert('Campos inválidos');
    } else if (phoneEmail.value === '') {
      alert('Campos inválidos');
    } else if (newPassword.value === '') {
      alert('Campos inválidos');
    } else if (birthDate.value === '') {
      alert('Campos inválidos');
    } else if (gender.value === '') {
      alert('Campos inválidos');
    }
    /* console.log(gender.value); */
    /* alert(emailPhone.value); */
  });
}

window.onload = function () {
  login();
  validation();
};
