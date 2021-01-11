let getGender = document.getElementById('genderText');
const getChecked = document.querySelectorAll('.radioButtons input')

function displayGender() {
  if(getChecked[2].checked === true) {
    let getGender = document.getElementById('genderText');
    getGender.style.display = 'block'
  }
}

function listeners() {
  getChecked[2].addEventListener('click', displayGender)
}

window.onload = function () {
  listeners();
};
