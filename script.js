function loginAlert() {
  const loginBtn = document.getElementById('button-login');
  loginBtn.addEventListener ('click', function() {
    alert(document.getElementById('user-email-phone').value);
  });
}

loginAlert();
