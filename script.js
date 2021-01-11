function alertInput() {
	alert('Email ou telefone');
}

const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', alertInput);
