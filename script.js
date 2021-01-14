const nameEmail = document.getElementById("user-email-phone-label");
const passWord = document.getElementById("user-password");
const buttonLogin = document.getElementById("button-login");


function buttonLoginClick(event) {
  buttonLogin.addEventListener("click", (event) => {
    const evento = event.target.type;
    console.log(evento);
  })

  console.alert(event)
};
buttonLoginClick()