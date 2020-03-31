function validate(){
    var username = document.getElementById("mail");
    var password = document.getElementById("psw");
    var password2 = document.getElementById("psw1");
    var emailformat = /\S+@\S+\.\S+/;

    if (!username.value.match(emailformat)){
        alert("You have entered an invalid email address!");    //The pop up alert for a valid email address
        username.textContent = "Invalid email"
        username.style.border="1px solid red";
        username.focus();
    return false;
    }
    else if (password.value.trim() == ""){
        alert("Empty Passwords are not allowed");
        password.textContent = "Password is required"
        password.style.border="1px solid red";
        password.focus();
        return false;
        }
    else if (password.value.trim().length < 4){
        alert("Password is too short");
        password.textContent = "Password should be longer than 4 characters"
        password.style.border="1px solid red";
        password.focus();
        return false;
        }
    
    else if (password.value.trim() != password2.value.trim()){
        alert("Passwords don't match");
        password.style.border="1px solid red";
        password2.style.border="1px solid red";
        password2.innerHTML = "The two passwords did not match"
        return false;
        }
    else {
        return true;
    }
}