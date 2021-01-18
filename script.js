document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});
function formCheck() {
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('lastName').value;
  var emailFone = document.getElementById('emailFone').value;
  var newPassword = document.getElementById('newPassword').value;
  var birthdate = document.getElementById('birthdate').value;
  if (name == '' && lastName == '' && emailFone == '' && newPassword == '' && birthdate == '') {
      alert('Campos inválidos');
  } else 
      alert('Cadastro realizado');
}