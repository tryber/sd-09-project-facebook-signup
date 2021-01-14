<<<<<<< HEAD
const buttonLogin = document.getElementById("button-login");
const nameLogin = document.getElementById('user-email-phone-label');
const passWordlogin = document.getElementById('user-password');

// function click

function buttonLoginClick(event) {
  buttonLogin.addEventListener("click", (event) => {
    const evento = event.target.type;
    console.log(evento);
  })
};
buttonLoginClick()
=======
const buttonLogin = document.getElementById('button-login');

function buttonLoginClick() {
  buttonLogin.addEventListener('click', () => {
  });
}
buttonLoginClick();
>>>>>>> 4e431ec9b7eb7dc107cc4fc9ac94ad987b2fdca3
