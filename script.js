// Button Alert
const buttonLogin = document.querySelector('#button-login');
buttonLogin.addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
});

const buttonSubmit = document.querySelector('#facebook-register');
const inputs = document.querySelectorAll('.validation');
const radio = document.getElementsByName('gender');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      const message = document.querySelector('.message');
      message.style.display = 'block';
      return;
    }
  });
});

// Optional gender
const gender = document.querySelectorAll('.gender');
const input = document.querySelector('.optional-input');

for (let i = 0; i < gender.length; i += 1) {
  gender[i].addEventListener('click', () => {
    if (gender[2].checked) {
      input.style.display = 'block';
    } else {
      input.style.display = 'none';
    }
  });
}
