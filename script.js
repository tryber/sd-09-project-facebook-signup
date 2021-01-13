// let clickEnter = document.getElementById('button-login')

// function loginAlert() {
//   let inputLogin = document.getElementById('user-email-phone').innerText;
//   alert(inputLogin)
// }

// clickEnter.addEventListener('click', loginAlert);

let loginButton = document.getElementById("button-login")
function alertEmail() {
    let email = document.getElementById("user-email-phone").value
    alert(email)
}
loginButton.addEventListener('click', alertEmail)
