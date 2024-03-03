function submitSuccessful(event) {
    event.preventDefault();

    // var f_name = document.getElementById('f_name').value;
    // var l_name = document.getElementById('l_name').value;
    var email = document.getElementById('email').value;
    var Password = document.getElementById('Password').value;
    // var c_Password = document.getElementById('c_password').value;
    var messageElement = document.getElementById('message');

    if (email == '' || Password == ''){
        showMessage("error", "Please fill the form");
        return;
    }
    
    else{
        showMessage("success", "Login successfully!");
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
