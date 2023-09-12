document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const registerButton = document.getElementById("register-button");
    const cancelButton = document.getElementById("cancel-button");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            alert("El correo electrónico no es válido.");
            return;
        }

        alert("Registro exitoso:\nUsuario: " + username + "\nCorreo Electrónico: " + email);

        signupForm.reset();
    });

    cancelButton.addEventListener("click", function () {
        window.location.href = "admin.html";
    });
});
