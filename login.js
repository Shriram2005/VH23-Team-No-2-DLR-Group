const usernameArea = document.querySelector('#username');
const passwordArea = document.querySelector('#password');

function submitForm() {
    let username = usernameArea.value;
    let password = passwordArea.value;
    let notice = document.querySelector(".notice");
    // check username length 
    if ((username != "") & (username.length < 6)) {
        console.log("This is if statement");
        alert("Username must be at least 6 characters");
    }
    // check password length 
    else if ((password != "") & (password.length < 4)) {
        console.log("This is second if");
        alert("Password must be at least 4 characters");
    }
    else {
        // display a notice of successful and redirect
        document.getElementById("login-form").addEventListener("submit", function (event) {
            event.preventDefault();
            document.querySelector(".notice").style.display = "block";
            document.querySelector(".notice").innerHTML = "Logged in successfully.";
            usernameArea.value = '';
            passwordArea.value = '';
                window.location.href = "admin.html";
        });
    }
}


