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