function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "password") {
        alert("Login successful!");
        return true;
    } else {
        errorMessage.textContent = "Invalid username or password";
        return false;
    }
}
