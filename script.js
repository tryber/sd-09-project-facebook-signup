function alertButton() {
  const buttonLogin = document.querySelector('#button-login');

  buttonLogin.addEventListener('click', function() {
    const emailField = document.querySelector('#user-email-phone');

    alert(emailField.value);
  })

}

alertButton();
