const button = document.querySelector('#button-login');
const inputName = document.querySelector('#user-email-phone');

button.addEventListener('click', () => alert(inputName.value));

const custom = document.querySelector('#custom-gender');
const customGender = document.querySelector('#unique');

customGender.addEventListener('click', function () {
  if (customGender.classList.contains('checked')) {
    return;
  }
  const newGender = document.createElement('input');
  newGender.type = 'text';
  newGender.placeholder = 'Gênero (opcional)';
  newGender.required = true;
  custom.appendChild(newGender);
  customGender.classList = 'checked';
  newGender.required = true;
});

// const genderInput = document.querySelector('#gender-input');
// const notCustom = document.querySelectorAll('.not-custom-gender');
// notCustom.addEventListener('click', function () {
//   document.getElementById('custom-gender').remove();
// });
