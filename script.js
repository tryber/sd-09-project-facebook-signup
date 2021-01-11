const submitBtn = document.getElementById('button-login');
const userData = document.getElementById('user-email-phone');

function loginAlert() {
  alert(userData.value);
}

submitBtn.addEventListener('click', loginAlert);
