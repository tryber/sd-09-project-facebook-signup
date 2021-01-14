let clickEntrar = document.getElementById('button-login')
clickEntrar.addEventListener('click', loginPass)

function loginPass() {
    let user = document.getElementById('user-email-phone').value;
    let pass = document.getElementById('user-password').value;
    alert(`usuario ${user} senha ${pass}`);
}