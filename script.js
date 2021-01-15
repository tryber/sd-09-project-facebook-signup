function login() {
  const btn = document.querySelector('#button-login');
  btn.addEventListener('click', function () {
    const msg = document.querySelector('#user-email-phone').value;
    alert(msg);
  });
}

function validation() {
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const phoneEmail = document.querySelector('#phone-email');
  const newPassword = document.querySelector('#pass-word');
  const birthDate = document.querySelector('#birthdate');
  // const gender = document.querySelector('input[name="gender"]:checked');
  const gender = document.getElementsByName('gender');
  const button = document.querySelector('#facebook-register');
  button.addEventListener('click', function () {
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
    } else {
      for (let index = 0; index < gender.length; index += 1) {
        if (gender[index].checked !== true) {
          alert('Campos inválidos');
        }
      }
    }
  });
}

window.onload = function () {
  login();
  validation();
};
