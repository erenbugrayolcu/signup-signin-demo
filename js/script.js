function signUp(e){

    sUp = document.getElementById('sign-up-box');
    sIn = document.getElementById('sign-in-box');

    sUp.style.visibility = "visible";
    sIn.style.visibility = "hidden";

}

function signIn(){
    sUp = document.getElementById('sign-up-box');
    sIn = document.getElementById('sign-in-box');

    sUp.style.visibility = "hidden";
    sIn.style.visibility = "visible";
}