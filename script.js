const buttonLogin = document.querySelector('#button-login');
const roudePersonl = document.querySelector('.radios');
const inputGenero = document.querySelector('.genero');

buttonLogin.addEventListener('click', function () {
	const inputEmailPhone = document.querySelector('#user-email-phone').value;
	alert(inputEmailPhone);
});

function botaoAbreGenero(event) {
	if (event.target.value !== 'Personalizado') {
		inputGenero.style = 'display:none';
	} else {
		inputGenero.style = 'display:block';
	}
}
roudePersonl.addEventListener('click', botaoAbreGenero);
