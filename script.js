function loginPass() {
  const user = document.getElementById('user-email-phone').value;
  alert(`usuario ${user}`);
}

const clickEntrar = document.getElementById('button-login');
clickEntrar.addEventListener('click', loginPass);
