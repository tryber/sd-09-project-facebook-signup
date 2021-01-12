function loginAlert() {
  const loginBtn = document.getElementById('button-login');
  loginBtn.addEventListener('click', function () {
    alert(document.getElementById('user-email-phone').value);
  });
}

loginAlert();

function personalizeGender() {
  const customGender = document.getElementById('customGender');
  customGender.addEventListener('click', function() {
    let textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.name = 'gender-custom';
    textInput.placeholder = 'Gênero (opcional)'

    const genderInput = document.getElementById('genderInputDiv');

    genderInput.appendChild(textInput);
  });
}

personalizeGender();

// function personalizeGender() {
//   const customGender = document.getElementById('customGender');

//   customGender.addEventListener('click', fuction() { 
//     let newElement = document.createElement('input');
//   });
// }