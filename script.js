document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});
function formCheck() {
  const name = document.getElementById('name').value;
  const lastName = document.getElementById('lastName').value;
  const emailFone = document.getElementById('emailFone').value;
  const newPassword = document.getElementById('newPassword').value;
  const birthdate = document.getElementById('birthdate').value;
  if (name === '' && lastName === '' && emailFone === '' && newPassword === '' && birthdate == '') {
    alert('Campos inválidos');
  } else {
      alert('Cadastro realizado');
  }
}
