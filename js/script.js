document.querySelector('#button-login').addEventListener('click', function (event) {
  event.preventDefault();
  const userEmailPhone = document.getElementById('user-email-phone').value;
  alert(userEmailPhone);
});
