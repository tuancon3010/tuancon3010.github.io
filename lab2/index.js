import * as validate from "./validate.js";

const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let flag = true;

    if (validate.emailValidation()) {
        validate.emailValid();
    } else {
        validate.emailInvalid();
        flag = false;
    }

    if (validate.passwordValidation()) {
        validate.passwordValid();
    } else {
        validate.passwordInvalid();
        flag = false;
    }

    if (flag) {
        alert("Gửi form");
    }
});
