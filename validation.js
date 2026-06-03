const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    document.querySelectorAll(".error").forEach(span => span.textContent = "");
    document.querySelectorAll("input").forEach(input => input.classList.remove("invalid"));

    if (username.value.trim() === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        username.classList.add("invalid");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        email.classList.add("invalid");
        valid = false;
    }

    if (password.value.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters";
        password.classList.add("invalid");
        valid = false;
    }

    if (!terms.checked) {
        document.getElementById("termsError").textContent =
            "You must accept the terms";
        valid = false;
    }

    if (valid) {
        alert("Signup Successful!");
    }
});

const resendBtn = document.getElementById("resendBtn");

let seconds = 10;

const timer = setInterval(() => {
    seconds--;

    resendBtn.textContent =
        `Resend Verification (${seconds})`;

    if (seconds === 0) {
        clearInterval(timer);
        resendBtn.disabled = false;
        resendBtn.textContent = "Resend Verification";
    }
}, 1000);
