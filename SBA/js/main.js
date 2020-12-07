var sgnBtn = document.getElementById("sgnBtn");
sgnBtn.disabled = true;
var loginForm = document.getElementById("loginForm");
loginForm.addEventListener('input', () => {
    if (document.getElementById("InputEmail").length > 0 &&
    document.getElementById("InputPassword").length > 0) {
        sgnBtn.disabled = false;
    } else {
        sgnBtn.disabled = true;
    }
});