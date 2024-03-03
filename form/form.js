function resetPassword(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var messageElement = document.getElementById('message');

    if (newPassword !== confirmPassword) {
        showMessage("error", "Passwords do not match");
        return;
    }

    // Simulate resetting password (here you would typically send a request to a server)
    // For the sake of example, just log the details to the console
    console.log("Resetting password for email:", email);
    console.log("New Password:", newPassword);

    showMessage("success", "Password reset successfully!");
}

function showMessage(type, message) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.className = "message " + type;
}
