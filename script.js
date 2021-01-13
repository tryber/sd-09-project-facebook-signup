// let clickEnter = document.getElementById('button-login')

// function loginAlert() {
//   let inputLogin = document.getElementById('user-email-phone').innerText;
//   alert(inputLogin)
// }

// clickEnter.addEventListener('click', loginAlert);

const loginButton = document.getElementById('button-login');
function alertEmail() {
  const email = document.getElementById('user-email-phone').value;
  alert(email);
}
loginButton.addEventListener('click', alertEmail);
