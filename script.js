function buttonAlert() {
  const buttonLocal = document.querySelector('#button-login');
  const inputLocal = document.querySelector('#user-email-phone');
  buttonLocal.addEventListener('click', function (e) {
    e.preventDefault();
    alert(inputLocal.value);
  });
}

buttonAlert();
