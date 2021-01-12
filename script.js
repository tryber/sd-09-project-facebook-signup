const btnEntrar = document.querySelector('#button-login');

const alertMsg = (event) => {
  const textEmailTel = document.querySelector('#user-email-phone');
  alert(textEmailTel.value);
  event.preventDefault();
};

const customGenre = () => {
  const customChoose = document.querySelector('#personalizado');
  if ()
}

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
  btnEntrar.addEventListener('click', customGenre);
};

window.onload = () => {
  eventslistener();
}

