const email = document.getElementById("email");
const password = document.getElementById("password");

export function emailValidation() {
    let emailContent = email.value.trim();

    if (emailContent.length > 10) {
        return true;
    }
    return false;
}

export function emailValid() {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
}

export function emailInvalid() {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
}

export function passwordValidation() {
    let passwordContent = password.value.trim();

    if (passwordContent.length > 10) {
        return true;
    }
    return false;
}

export function passwordValid() {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
}

export function passwordInvalid() {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
}
