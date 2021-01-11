const getButton = document.querySelector('#button-login');

getButton.addEventListener('click', function () {
  const input = document.querySelector('#user-email-phone').value;
  alert(input);
});
