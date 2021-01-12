function showLogin(){
  const buttonSubmit = document.querySelector('#button-login');
  const emailPhone = document.querySelector('#user-email-phone');
  buttonSubmit.addEventListener('click', function () {
    alert(emailPhone.value);
  });
}

showLogin();
