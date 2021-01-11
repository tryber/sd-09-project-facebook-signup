function showFacebookLoginFormValue() {
  const userEmailPhoneInput = document.querySelector('#user-email-phone');

  window.alert(userEmailPhoneInput.value);
}

function listenToButtonLoginButton() {
  const buttonLoginButton = document.querySelector('#button-login');

  buttonLoginButton.addEventListener('click', showFacebookLoginFormValue);
}

listenToButtonLoginButton();
