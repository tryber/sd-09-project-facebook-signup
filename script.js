const btnAlert = document.getElementById('button-login');

function showAlert() {
  alert(document.getElementById('email-phone').value);
}
btnAlert.addEventListener('click', showAlert);
