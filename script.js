let buttonLogin = document.getElementById('button-login');
let buttonRegister = document.getElementById('facebook-register');


buttonLogin.addEventListener('click', function (){
    let userEmail = document.getElementById('user-email-phone');
    window.alert(userEmail.value);
});