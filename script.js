const buttonEntrar = document.getElementById('button-login');

buttonEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  alert("tester")
});


function alertEmailOrPhone() {
  const emailOrPhone = document.getElementById('user-email-phone').value;
  alert(emailOrPhone);
}