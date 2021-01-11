const button = document.getElementById('button-login');
function falert(event) {
    event.preventDefault();
    const input = document.getElementById('user-email-phone');
    const inputValue = input.value;
    alert(inputValue);
}
button.addEventListener('click', falert);
