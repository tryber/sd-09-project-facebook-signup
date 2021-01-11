const btnEntrar = document.querySelector('#button-login');
const alertMsg = (event) => {
  const textEmailTel = document.querySelector('#user-email-phone');
  alert(textEmailTel.value);
  event.preventDefault();
};

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
};

eventslistener();
