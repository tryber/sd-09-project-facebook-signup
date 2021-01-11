function alertInput() {
	const inputEmail = document.querySelector('#user-email-phone');
	alert(inputEmail.value);
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alertInput);