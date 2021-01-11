const entrarButton = document.getElementById('button-login')

function clickButton() {
    entrarButton.addEventListener('click', function () {
        let loginName = document.getElementById('user-email-phone').value;
  alert(`user ${loginName}`);
});
}
clickButton();