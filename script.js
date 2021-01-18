const button = document.querySelector('#button-login');
button.addEventListener('click', function () {
  const inputUser = document.querySelector('#user-email-phone').value;
  alert(inputUser);
});
