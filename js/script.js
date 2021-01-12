document.querySelector('#button-login').addEventListener('click', function (event) {
  event.preventDefault();
  const userEmailPhone = document.getElementById('user-email-phone').value;
  alert(userEmailPhone);
});

function removeTextArea() {
  const genderContainer = document.querySelector('.gender').children;
  for (let index = 0; index < genderContainer.length; index += 1) {
    if (genderContainer[index].className === 'textarea-gender') {
      const removedItem = genderContainer[index];
      genderContainer.removeChild(removedItem);
    }
  }
}

const binaryGendersArray = document.getElementsByClassName('binary-genders');
for (let index = 0; index < binaryGendersArray; index += 1) {
  binaryGendersArray[index].addEventListener('click', removeTextArea);
}

function createTextArea() {
  const genderContainer = document.querySelector('.gender');
  if (document.querySelector('.gender').lastElementChild.className === 'textarea-gender') {
    const lastElement = document.querySelector('.gender').lastElementChild;
    genderContainer.removeChild(lastElement);
  }
  const textarea = document.createElement('textarea');
  textarea.name = 'gender-custom';
  textarea.className = 'textarea-gender';
  textarea.placeholder = 'Gênero (opcional)';
  textarea.style.width = '100%';
  genderContainer.appendChild(textarea);
}

const inputOtherGender = document.getElementsByClassName('other-gender')[0];

inputOtherGender.addEventListener('click', createTextArea);
