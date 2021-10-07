function showFormUp(){
    textUp = document.getElementById('sign-up-box');
    textIn = document.getElementById('sign-in-box');

    textUp.style.visibility = "visible";
    textIn.style.visibility = "hidden";
}

function showFormIn(){
    textUp = document.getElementById('sign-up-box');
    textIn = document.getElementById('sign-in-box');

    textUp.style.visibility = "hidden";
    textIn.style.visibility = "visible";
}

var newUser;
var newPass;
var newEmail
var uname;
var pass;

function signUp(){

    newUser = document.getElementById('newUsername');
    newPass = document.getElementById('newPassword');
    newEmail = document.getElementById('newEmail');
    
    window.localStorage.setItem('newUser', newUsername.value);
    window.localStorage.setItem('newEmail', newEmail.value);
    window.localStorage.setItem('newPass', newPassword.value);

    if(newUser.value === ""){
        newUser.style.border = "1px solid red";
        showFormUp();
    }else{
        newUser.style.border = "1px solid green";
    }

    if(newEmail.value === ""){
        newEmail.style.border = "1px solid red";
        showFormUp();
    }else{
        newEmail.style.border = "1px solid green";
    }

    if(newPass.value === ""){
        newPass.style.border = "1px solid red";
        showFormUp();
    }else{
        newPass.style.border = "1px solid green";
    }
}

function signIn(){

    uname = document.getElementById('uname');
    pass = document.getElementById('pass');
    
    window.localStorage.getItem('uname', newUser);
    window.localStorage.getItem('pass', newPass);

    if(uname.value === ""){
        uname.style.border = "1px solid red";
        showFormIn();
    }else{
        uname.style.border = "1px solid green";
    }

    if(pass.value === ""){
        pass.style.border = "1px solid red";
        showFormIn();
    }else{
        pass.style.border = "1px solid green";
    }

    if(uname.value == newUser.value && pass.value == newPass.value){
        location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }else{
        window.alert("Username or password is wrong, please try again.");
    }
}
