let $profile = document.querySelector(".profile");
let profileBlanks = document.querySelectorAll(".inputText");
let userName = document.querySelector(".userName");
let userInput = document.getElementById("usernameInput");
let Email = document.querySelector(".Email");
let emailInput = document.getElementById("EmailInput");

let clearFormButton = document.getElementById("clearProfile");
let nextButton = document.getElementById("nextProfile");
let password = document.querySelector(".password");
let passwordInput = document.getElementById("passInput");
let confirmPassword = document.querySelector(".confirmPassword");
let confirmPassInput = document.getElementById("confirmPassInput");
// Validation Funtion
nextButton.addEventListener("click", empty);

function empty() {
    if (
        userInput.value == "" ||
        (userInput.value.length < 5 && !$profile.children.includes(redText))
    ) {
        let popUp = document.createElement("div");
        popUp.setAttribute("id", "popup");
        popUp.className = "error";
        popUp.innerHTML = "Please enter a username";
        userInput.style.border = "2px solid red";
        userName.style.color = "red";

        $profile.insertBefore(popUp, Email);
    }
    if (emailInput.value == "" || !emailInput.value.includes("@")) {
        let popUpEmail = document.createElement("div");
        popUpEmail.setAttribute("id", "popup");
        popUpEmail.className = "error";
        popUpEmail.innerHTML = "Please enter a Valid Email";
        emailInput.style.border = "2px solid red";
        Email.style.color = "red";

        $profile.insertBefore(popUpEmail, password);
    }
    if (passwordInput.value == "" || passwordInput.value.length < 8) {
        let popUpPass = document.createElement("div");
        popUpPass.setAttribute("id", "popup");
        popUpPass.className = "error";
        popUpPass.innerHTML = "Please enter a valid password";
        passwordInput.style.border = "2px solid red";
        password.style.color = "red";

        $profile.insertBefore(popUpPass, confirmPassword);
    }
    if (
        confirmPassInput.value == "" ||
        confirmPassInput.value !== passwordInput.value
    ) {
        let popUpCp = document.createElement("div");
        popUpCp.setAttribute("id", "popup");
        popUpCp.className = "error";
        popUpCp.innerHTML = "Passwords don't match";
        confirmPassInput.style.border = "2px solid red";
        confirmPassword.style.color = "red";

        $profile.insertBefore(popUpCp, clearFormButton);
    }

    if (
        confirmPassInput.value !== "" &&
        confirmPassInput.value == passwordInput.value
    ) {
        $profile.style.display = "none";
        document.querySelector(".address").style.display = "block";
    }
}

// Clear Form Function

clearFormButton.addEventListener("click", clearAll);

function clearAll() {
    let textArea = $profile.getElementsByTagName("input");

    for (i = 0; i < textArea.length; i++) {
        if ((textArea[i].type = "text")) {
            textArea[i].value = "";
        }
    }
    let redAreas = $profile.querySelectorAll("#popup");
    for (i = 0; i < redAreas.length; i++) {
        redAreas[i].remove();
    }

    userInput.style.border = "2px solid black";
    userName.style.color = "black";
    Email.style.color = "black";
    emailInput.style.border = "2px solid black";
    password.style.color = "black";
    passwordInput.style.border = "2px solid black";
    confirmPassword.style.color = "black";
    confirmPassInput.style.border = "2px solid black";
}