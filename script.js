function alertLogin() {
    const textInput = document.getElementById('user-email-phone');
    alert(textInput.value);
}

const btLogin = document.getElementById('button-login');
btLogin.addEventListener('click', alertLogin);