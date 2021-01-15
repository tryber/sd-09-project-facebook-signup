document.querySelector('#button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
});

function displayCustomGender() {
  if (document.querySelector('#select-gender-other').checked === true) {
    let inputGender = document.createElement('input');
    inputGender.name = 'gender-custom';
    inputGender.placeholder = 'Gênero';
    document.querySelector('.form-data').lastChild.previousElementSibling.previousElementSibling.appendChild(inputGender);
  } 
}

displayCustomGender();
