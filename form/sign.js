function submitSuccessful(event) {
    event.preventDefault();

    var f_name = document.getElementById('f_name').value;
    var l_name = document.getElementById('l_name').value;
    var email = document.getElementById('email').value;
    var Password = document.getElementById('Password').value;
    var C_Password = document.getElementById('C_Password').value;
    var messageElement = document.getElementById('message');

    if (f_name == '' || l_name == '' || email == '' || Password == '' || C_Password == ''){
        showMessage("error", "Please complete the signup");
        return;
    }
    
    else{
        showMessage("success", "Account has been created successfully!");
    }

    // Simulate resetting password (here you would typically send a request to a server)
    // For the sake of example, just log the details to the console
    // console.log("email is correct:", email);
    // console.log("Password:", password);

    // showMessage("success", "Login successfully!");
}

function showMessage(type, message) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.className = "message " + type;
}
