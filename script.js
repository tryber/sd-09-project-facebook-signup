function showFacebookLoginFormValues() {
  const userEmailPhoneInput = document.querySelector('#user-email-phone');

  window.alert(`E-mail ou Telefone: ${userEmailPhoneInput.value}`);
}

function listenToButtonLoginButton() {
  const buttonLoginButton = document.querySelector('#button-login');

  buttonLoginButton.addEventListener('click', showFacebookLoginFormValues);
}

listenToButtonLoginButton();
