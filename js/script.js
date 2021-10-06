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
var uname;
var pass;

function signUp(){

    newUser = document.getElementById('newUsername').value;
    newPass = document.getElementById('newPassword').value;
    
    window.localStorage.setItem('newUser', newUser);
    window.localStorage.setItem('newPass', newPass);
}

function signIn(){

    uname = document.getElementById('uname').value;
    pass = document.getElementById('pass').value;

    newUser = window.localStorage.getItem('newUser');
    newPass = window.localStorage.getItem('newPass');

    if(uname == newUser && pass == newPass){
        location.assign("https://https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }else{
        window.alert("Username or password is wrong, please try again.");
    }
}