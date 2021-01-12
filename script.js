let btnAlert = document.getElementById('button-login');
function showAlert(e) {

    alert(document.getElementById('email-phone').value);
}
btnAlert.addEventListener('click', showAlert);