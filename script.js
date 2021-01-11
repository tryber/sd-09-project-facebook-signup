const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
buttonLogin.addEventListener('click', function () {
  alert(userEmailPhone.value);
});

new JustValidate('.js-form', {
  rules: {
    firstName: {
      required: true,
    },
    lastName: {
      required: true,
    },
    phoneEmail: {
      required: true,
    },
    password: {
      required: true,
    },
    birthdate: {
      required: true,
    },
  },
  messages: {
    firstName: 'Campos inválidos',
    lastName: 'Campos inválidos',
    phoneEmail: 'Campos inválidos',
    password: 'Campos inválidos',
    birthdate: 'Campos inválidos',
  },
});
