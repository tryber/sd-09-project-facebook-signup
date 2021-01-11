// Button Alert
const buttonSubmit = document.querySelector('#button-login');
buttonSubmit.addEventListener('click', () => {
  const userEmailPhone = document.querySelector('#user-email-phone');
  alert(userEmailPhone.value);
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