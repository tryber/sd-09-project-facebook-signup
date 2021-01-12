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

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.getElementsByTagName('input');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].oninvalid = function (e) {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        e.target.setCustomValidity('Campos inválidos');
      }
    };
    elements[i].oninput = function (e) {
      e.target.setCustomValidity('');
    };
  }
});
