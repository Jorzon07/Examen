document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const cancelButton = document.getElementById("cancel-button");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log("Usuario: " + username);
        console.log("Contraseña: " + password);
    });

    signupButton.addEventListener("click", function () {
        window.location.href = "registro.html";
    });

    cancelButton.addEventListener("click", function () {
        window.location.href = "noticias.html";
    });
});
