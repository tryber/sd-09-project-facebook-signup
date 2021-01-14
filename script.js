function loginPass() {
  const user = document.getElementById('user-email-phone').value;
  const pass = document.getElementById('user-password').value;
  alert(`usuario ${user} senha ${pass}`);
}

const clickEntrar = document.getElementById('button-login');
clickEntrar.addEventListener('click', loginPass);
