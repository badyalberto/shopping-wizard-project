// PRODUCT
document
    .querySelector("#select-option")
    .addEventListener("change", versionGame);

function addEventsImages() {
    let imageVersions = document.querySelector("#editions").children;

    for (let image of imageVersions) {
        image.addEventListener("click", changeContentImagesLeftPrice);
    }
}
addEventsImages();

function changeContentImagesLeftPrice(e) {
    let version = e.target.getAttribute("game-version");
    let imageVersions = document.querySelector("#editions").children;
    let thumbnailsImages = document.querySelector(
        ".thumbnails-images-product"
    ).children;

    //reset version games images
    for (let image of imageVersions) {
        image.classList.remove("active");
    }

    //Reset thumbsnails Images
    for (let image of thumbnailsImages) {
        image.classList.remove("active");
    }

    //add class active first child of .thumbnails-images-product
    thumbnailsImages[0].classList.add("active");

    switch (version) {
        case "normal":
            document.querySelector("#price").textContent = "39.95€";
            break;
        case "deluxe":
            document.querySelector("#price").textContent = "49.95€";
            break;
        case "gold":
            document.querySelector("#price").textContent = "59.95€";
            break;
        case "ultimate":
            document.querySelector("#price").textContent = "69.95€";
            break;
        default:
            break;
    }
    e.target.classList.toggle("active");
    let opt = document.querySelector("#select-option").value;
    document
        .querySelector(".image-game")
        .setAttribute("src", `./images/${opt}_${version}_caratula.jpg`);
    document
        .querySelector(".image-thumbnails")
        .setAttribute("src", `./images/${opt}_${version}_caratula.jpg`);
}

function versionGame(e) {
    console.log(e.target.value);
    switch (e.target.value) {
        case "pc":
            changeContentImagesVersion(e.target.value);
            break;
        case "xbox":
            changeContentImagesVersion(e.target.value);
            break;
        case "play":
            changeContentImagesVersion(e.target.value);
            break;
        default:
            break;
    }
}

function changeContentImagesVersion(version = "") {
    let editions = document.querySelector("#editions");
    editions.innerHTML = "";

    if (version !== "") {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        img1.setAttribute("src", `./images/${version}_normal_caratula.jpg`);
        img2.setAttribute("src", `./images/${version}_deluxe_caratula.jpg`);
        img3.setAttribute("src", `./images/${version}_gold_caratula.jpg`);
        img4.setAttribute("src", `./images/${version}_ultimate_caratula.jpg`);
        img1.setAttribute("class", "image-version-game active");
        img2.setAttribute("class", "image-version-game");
        img3.setAttribute("class", "image-version-game");
        img4.setAttribute("class", "image-version-game");
        img1.setAttribute("game-version", "normal");
        img2.setAttribute("game-version", "deluxe");
        img3.setAttribute("game-version", "gold");
        img4.setAttribute("game-version", "ultimate");
        editions.append(img1);
        editions.append(img2);
        editions.append(img3);
        editions.append(img4);
        addEventsImages();
    }
}

var thumbnails = document.querySelector(".thumbnails-images-product").children;

for (let image of thumbnails) {
    image.addEventListener("click", showBigImage);
}

function showBigImage(e) {
    for (let image of thumbnails) {
        image.classList.remove("active");
    }

    if (e.target.getAttribute("id-img") === "0") {
        let platform = document.querySelector("#select-option").value;
        let version = document
            .querySelector(".image-version-game.active")
            .getAttribute("game-version");
        document
            .querySelector(".image-game")
            .setAttribute("src", `./images/${platform}_${version}_caratula.jpg`);
    } else {
        document
            .querySelector(".image-game")
            .setAttribute(
                "src",
                `./images/screen${e.target.getAttribute("id-img")}.jpg`
            );
    }

    e.target.classList.toggle("active");
}
//FIN PRODUCT

// SHIPPING
document.querySelector(".check-gift").addEventListener("click", checkGift);
let priceShippingInputs = document.querySelectorAll('input[name="shipping"]');
document
    .querySelector("#clear-form-shipping")
    .addEventListener("click", clearFormShipping);
document
    .querySelector("#next-shipping")
    .addEventListener("click", nextShipping);

priceShippingInputs.forEach((element) => {
    element.addEventListener("click", priceShipping);
});

function addDays(date, days) {
    return date.setDate(date.getDate() + days);
}

function checkGift(e) {
    document
        .querySelector(".gift-message")
        .classList.toggle("gift-message-hidden");
}

function clearFormShipping(e) {
    e.preventDefault();
    document.querySelector("#shipping-form").reset();
    document.querySelector(".gift-message").classList.add("gift-message-hidden");
    document.querySelector(".date-delivery").style.display = "none";
}

function priceShipping(e) {
    let date = new Date();
    document.querySelector(".date-delivery").style.display = "block";
    let between = document.querySelector(".between");
    let until = document.querySelector(".until");
    let lastDate = "";
    switch (e.target.value) {
        case "free":
            between.textContent = `${date.toDateString()} ${date.getHours()}:00h`;
            lastDate = new Date(addDays(date, 3));
            until.textContent = `${lastDate.toDateString()} ${date.getHours()}:00h`;
            break;
        case "extra":
            between.textContent = `${date.toDateString()} ${date.getHours()}:00h`;
            lastDate = new Date(addDays(date, 2));
            until.textContent = `${lastDate.toDateString()} ${date.getHours()}:00h`;
            break;
        case "premium":
            between.textContent = `${date.toDateString()} ${date.getHours()}:00h`;
            lastDate = new Date(addDays(date, 1));
            until.textContent = `${lastDate.toDateString()} ${date.getHours()}:00h`;
            break;
        default:
            break;
    }
}

function nextShipping(e) {
    e.preventDefault();
    let shipping = document.querySelectorAll('input[name="shipping"]');
    let correctForm = false;
    for (let i = 0; i < shipping.length; i++) {
        if (shipping[i].checked) {
            document.querySelector(".shipping").style.display = "none";
            correctForm = true;
        }
    }
    if (!correctForm) {}
}
//FIN SHIPPING
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
    if ($profile.querySelectorAll(".error").length == 0) {
        if (userInput.value == "" || userInput.value.length < 5) {
            let popUp = document.createElement("div");
            popUp.setAttribute("id", "popupUser");
            popUp.className = "error";
            popUp.innerHTML = "Please enter a username";
            userInput.style.border = "2px solid red";
            userName.style.color = "red";

            $profile.insertBefore(popUp, Email);
        }
        if (emailInput.value == "" || !emailInput.value.includes("@")) {
            let popUpEmail = document.createElement("div");
            popUpEmail.setAttribute("id", "popupEmail");
            popUpEmail.className = "error";
            popUpEmail.innerHTML = "Please enter a Valid Email";
            emailInput.style.border = "2px solid red";
            Email.style.color = "red";

            $profile.insertBefore(popUpEmail, password);
        }
        if (passwordInput.value == "" || passwordInput.value.length < 8) {
            let popUpPass = document.createElement("div");
            popUpPass.setAttribute("id", "popupPass");
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
            popUpCp.setAttribute("id", "popupCp");
            popUpCp.className = "error";
            popUpCp.innerHTML = "Passwords don't match";
            confirmPassInput.style.border = "2px solid red";
            confirmPassword.style.color = "red";

            $profile.insertBefore(popUpCp, clearFormButton);
        }

        if ($profile.querySelectorAll(".error").length == 0) {
            $profile.style.display = "none";
            document.querySelector(".address").style.display = "block";
        }
    }
}

// Keydown Validate Function

//Keydown Event to Validate
$profile.addEventListener("keydown", validateInput);

function validateInput() {
    if (userInput.value !== "" && userInput.value.length > 5) {
        if (document.getElementById("popupUser") !== null) {
            document.getElementById("popupUser").remove();
        }
        userInput.style.border = "2px solid black";
        userName.style.color = "black";
    }
    if (emailInput.value !== "" && emailInput.value.includes("@")) {
        if (document.getElementById("popupEmail") !== null) {
            document.getElementById("popupEmail").remove();
        }
        emailInput.style.border = "2px solid black";
        Email.style.color = "black";
    }
    if (passwordInput.value !== "" && passwordInput.value.length > 6) {
        if (document.getElementById("popupPass") !== null) {
            document.getElementById("popupPass").remove();
        }
        passwordInput.style.border = "2px solid black";
        password.style.color = "black";
    }

    if (confirmPassInput.value !== "" && confirmPassInput.value.length > 6) {
        if (document.getElementById("popupCp") !== null) {
            document.getElementById("popupCp").remove();
        }
        confirmPassInput.style.border = "2px solid black";
        confirmPassword.style.color = "black";
    }
}
// Clear Form Function

clearFormButton.addEventListener("click", clearAll);

function clearAll() {
    let textArea = $profile.getElementsByTagName("input");

    for (i = 0; i < textArea.length; i++) {
        textArea[i].value = "";
    }

    let redAreas = $profile.querySelectorAll(".error");
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