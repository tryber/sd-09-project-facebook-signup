function alertEmailOrPhone() {
  const inputEmailPhone = document.querySelector('#button-login');
  const inputUserName = document.querySelector('#user-email-phone');
  inputEmailPhone.addEventListener('click', function () {
    alert(inputUserName.value);
  });
}

alertEmailOrPhone();
