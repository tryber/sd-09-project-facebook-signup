const btnAlert = document.getElementById('button-login');

function showAlert() {
  alert(document.getElementById('user-email-phone-label').value);
}
btnAlert.addEventListener('click', showAlert);
