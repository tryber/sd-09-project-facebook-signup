const btnEntrar = document.querySelector('#button-login');

const alertMsg = (event) => {
  const textEmailTel = document.querySelector('#user-email-phone');
  alert(textEmailTel.value);
  event.preventDefault();
};

// const customGenre = () => {
//   const customChoose = document.querySelector('#personalizado');
//   if ()
// }

const eventslistener = () => {
  btnEntrar.addEventListener('click', alertMsg);
  // btnEntrar.addEventListener('click', customGenre);
};

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.getElementsByTagName('input');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].oninvalid = function (e) {
      e.target.setCustomValidity('');
      if (!e.target.validity.valid) {
        document.getElementById('campos_invalidos').innerText = 'Campos inválidos';
      }
    };
    elements[i].oninput = function (e) {
      document.getElementById('campos_invalidos').innerText = '';

    };
  }
});

window.onload = () => {
  eventslistener();
};
