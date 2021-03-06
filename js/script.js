// Filling Finished Gaps
let firstBuy = document.querySelector(".button-buy");
firstBuy.addEventListener("click", filling);
let versionVar = "";
let totalPrice = document.getElementById("total-sum");
let finishShipping = document.getElementById("finish-shipping");
let totalString = "";

function filling() {
    //document.querySelector('.product').style.display = 'none';
    //document.querySelector('.profile').style.display = 'block';
    document.getElementById("finish-name").innerHTML =
        "<b>" + document.querySelector(".game-title").innerHTML + "</b>";
    document.getElementById("finish-platform").innerHTML +=
        " " +
        "<b>" +
        document.getElementById("select-option")[
            document.getElementById("select-option").selectedIndex
        ].textContent +
        "</b>";
    document.getElementById("finish-price").innerHTML +=
        " " + "<b>" + document.getElementById("price").innerHTML + "</b>";
    let edAttribute = document
        .querySelector(".image-version-game.active")
        .getAttribute("game-version");
    switch (edAttribute) {
        case "normal":
            document.getElementById("finish-version").innerHTML +=
                " " + "<b>" + "Simple" + "</b>";
            break;
        case "deluxe":
            document.getElementById("finish-version").innerHTML +=
                " " + "<b>" + "Deluxe" + "</b>";
            break;
        case "gold":
            document.getElementById("finish-version").innerHTML +=
                " " + "<b>" + "Gold" + "</b>";
            break;
        case "ultimate":
            document.getElementById("finish-version").innerHTML +=
                " " + "<b>" + "Premium" + "</b>";
            break;
        default:
            break;
    }
    document.querySelector(".product").classList.add("is-hidden");
    document.querySelector(".profile").classList.remove("is-hidden");
    console.time("t1");
    timer();
}

// Finished Div Page
let termsCheck = document.getElementById("cbox1");
let finalButton = document.getElementById("buy-now");

function lastButton() {
    if (!termsCheck.checked) {
        alert(
            "Ouch! It seems that you forgot to accept our terms and conditions. Try again!"
        );
    } else {
        document
            .querySelectorAll(".finished-order")
            .forEach((element) => (element.style.display = "block"));
        document.getElementById("cbox-button").style.display = "none";
        document.querySelector(".time-shipping").style.opacity = "0";
        clearInterval(interval);
        document.querySelector(
            "#total-time"
        ).innerHTML = `Your shopping process took: <strong>${minutesShopping} minutes ${secondsShopping} seconds</strong>`;
    }
}

finalButton.addEventListener("click", lastButton);
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
// Section Address

let $address = document.querySelector(".address");
let firsNameLabel = document.getElementById("first_name_label");
let firstName = document.getElementById("first_name");
let lastNameLabel = document.getElementById("last_name_label");
let lastName = document.getElementById("last_name");
let birthday = document.getElementById("birthday");
let birthdayLabel = document.getElementById("birthday_label");
let address1 = document.getElementById("address1");
let addressLabel = document.getElementById("address_label");
let address2 = document.getElementById("address2");
let addressLabel2 = document.getElementById("address_label2");
let postalCode = document.getElementById("postal_code");
let postalCodeLabel = document.getElementById("postal_label");
let countryLabel = document.getElementById("country_label");
let phone = document.getElementById("phone");
let phoneLabel = document.getElementById("phone_label");
let regular = document.getElementById("regular");
let clearAddress = document.getElementById("clear_address");
let nextAddress = document.getElementById("next_address");

clearAddress.addEventListener("click", goclearAll);
nextAddress.addEventListener("click", goNextAddress);

function goNextAddress() {
    let redAreas = $address.querySelectorAll(".error");
    for (i = 0; i < redAreas.length; i++) {
        redAreas[i].remove();
    }
    let clearRed = $address.querySelectorAll(".inputError");
    for (i = 0; i < clearRed.length; i++) {
        clearRed[i].className = "inputText";
    }
    if (firstName.value == "" || firstName.value.length < 2) {
        let popUpFirst = document.createElement("div");
        popUpFirst.setAttribute("id", "popup");
        popUpFirst.className = "error";
        popUpFirst.innerHTML = "Please enter your first name";
        firstName.className = "inputError";
        $address.insertBefore(popUpFirst, lastNameLabel);
    }
    if (lastName.value == "" || lastName.value.length < 2) {
        let popUpLast = document.createElement("div");
        popUpLast.setAttribute("id", "popup");
        popUpLast.className = "error";
        popUpLast.innerHTML = "Please enter your last name";
        lastName.className = "inputError";
        $address.insertBefore(popUpLast, birthdayLabel);
    }
    if (birthday.value == "" || birthday.value.length < 2) {
        let popUpBirthday = document.createElement("div");
        popUpBirthday.setAttribute("id", "popup");
        popUpBirthday.className = "error";
        popUpBirthday.innerHTML = "Please enter your birthday";
        birthday.className = "inputError";
        $address.insertBefore(popUpBirthday, addressLabel);
    }
    if (address1.value == "" || address1.value.length < 2) {
        let popUpAddress = document.createElement("div");
        popUpAddress.setAttribute("id", "popup");
        popUpAddress.className = "error";
        popUpAddress.innerHTML = "Please enter your address";
        address1.className = "inputError";
        $address.insertBefore(popUpAddress, addressLabel2);
    }
    if (postalCode.value == "" || postalCode.value.length < 3) {
        let popUpPostal = document.createElement("div");
        popUpPostal.setAttribute("id", "popup");
        popUpPostal.className = "error";
        popUpPostal.innerHTML = "Please enter your zip code";
        postalCode.className = "inputError";
        $address.insertBefore(popUpPostal, countryLabel);
    }
    if (phone.value == "" || phone.value.length < 5) {
        let popUpPhone = document.createElement("div");
        popUpPhone.setAttribute("id", "popup");
        popUpPhone.className = "error";
        popUpPhone.innerHTML = "Please enter your phone";
        phone.className = "inputError";
        $address.insertBefore(popUpPhone, regular);
    }
    if ($address.querySelectorAll(".error").length == 0) {
        $address.classList.add("is-hidden");
        document.querySelector(".shipping").classList.remove("is-hidden");
        //$address.style.display = "none";
        //document.querySelector(".shipping").style.display = "block";
    }
}

function goclearAll() {
    let textArea = $address.getElementsByTagName("input");
    for (i = 0; i < textArea.length; i++) {
        textArea[i].value = "";
        textArea[i].classList.remove("inputError");
        textArea[i].className = "inputText";
    }
    let redAreas = $address.querySelectorAll("#popup");
    for (i = 0; i < redAreas.length; i++) {
        redAreas[i].remove();
    }
}
// PRODUCT
document
    .querySelector("#select-option")
    .addEventListener("change", versionGame);

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
            document.querySelector("#price").innerHTML = "<strong>39.95???</strong>";
            break;
        case "deluxe":
            document.querySelector("#price").innerHTML = "<strong>49.95???</strong>";
            break;
        case "gold":
            document.querySelector("#price").innerHTML = "<strong>59.95???</strong>";
            break;
        case "ultimate":
            document.querySelector("#price").innerHTML = "<strong>69.95???</strong>";
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
let errorShipping = document.createElement("div");

function clearFormShipping(e) {
    e.preventDefault();
    document.querySelector("#shipping-form").reset();
    document.querySelector(".gift-message").classList.add("gift-message-hidden");
    document.querySelector(".date-delivery").style.display = "none";
    document.querySelector("#error-shipping").remove();
}

function priceShipping(e) {
    let date = new Date();
    document.querySelector(".date-delivery").style.display = "block";
    let between = document.querySelector(".between");
    let until = document.querySelector(".until");
    let lastDate = "";
    let dayWithZeros = "";
    switch (e.target.value) {
        case "free":
            dayWithZeros = addZerosDate(date);
            between.textContent = `${dayWithZeros} ${date.getHours()}:00h`;
            lastDate = addZerosDate(new Date(addDays(date, 3)));
            until.textContent = `${lastDate} ${date.getHours()}:00h`;
            break;
        case "extra":
            dayWithZeros = addZerosDate(date);
            between.textContent = `${dayWithZeros} ${date.getHours()}:00h`;
            lastDate = addZerosDate(new Date(addDays(date, 2)));
            until.textContent = `${lastDate} ${date.getHours()}:00h`;
            break;
        case "premium":
            dayWithZeros = addZerosDate(date);
            between.textContent = `${dayWithZeros} ${date.getHours()}:00h`;
            lastDate = addZerosDate(new Date(addDays(date, 1)));
            until.textContent = `${lastDate} ${date.getHours()}:00h`;
            break;
        default:
            break;
    }
    let $divShipping = document.querySelector("#error-shipping");
    if ($divShipping !== null) {
        $divShipping.remove();
    }
}

function addZerosDate(date) {
    let day, month, year;
    if (date.getDate() < 10) {
        day = "0" + date.getDate();
    } else {
        day = date.getDate();
    }
    if (date.getMonth() + 1 < 10) {
        month = "0" + date.getMonth();
    } else {
        month = date.getMonth();
    }

    return `${day}/${month}/${date.getFullYear()}`;
}

function nextShipping(e) {
    e.preventDefault();
    let shipping = document.querySelectorAll('input[name="shipping"]');
    let correctForm = false;
    for (let i = 0; i < shipping.length; i++) {
        if (shipping[i].checked) {
            document.querySelector(".shipping").style.display = "none";
            correctForm = true;
            let complex = document.querySelector(".shipping-type");
            let inp = complex.querySelectorAll('input[name = "shipping"]');
            console.log(inp);
            let sel = "";
            document.getElementById("finish-between").innerHTML +=
                " " +
                "<strong>" +
                document.querySelector(".between").innerHTML +
                "</strong>";
            document.getElementById("finish-until").innerHTML +=
                " " + "<b>" + document.querySelector(".until").innerHTML + "</b>";

            for (let input of inp) {
                if (input.checked) {
                    sel = input.value;
                }
            }
            console.log(sel);
            switch (sel) {
                case "free":
                    finishShipping.innerHTML += " " + "<b>" + "0???" + "</b>";
                    break;
                case "extra":
                    finishShipping.innerHTML += " " + "<b>" + "4.99???" + "</b>";
                    break;
                case "premium":
                    finishShipping.innerHTML += " " + "<b>" + "9.99???" + "</b>";
                    break;
                default:
                    break;
            }
            let totalString =
                document
                .getElementById("finish-price")
                .textContent.substring(
                    9,
                    document.getElementById("finish-price").textContent.length - 1
                ) +
                "+" +
                finishShipping.textContent.substring(
                    10,
                    finishShipping.textContent.length - 1
                );
            totalPrice.innerHTML +=
                " " + "<b>" + eval(totalString).toFixed(2) + "???" + "</b>";
            document.querySelector(".shipping").classList.add("is-hidden");
            document.querySelector(".finish").classList.remove("is-hidden");
            //document.querySelector(".finish").style.display = "block";
            correctForm = true;
        }
        errorShipping.remove();
    }

    let $divShipping = document.querySelector("#error-shipping");

    if (!correctForm && $divShipping == null) {
        let $buttons = document.querySelector(".buttons-form");
        let $parent = document.querySelector(".shipping-type");
        errorShipping.setAttribute("id", "error-shipping");
        errorShipping.className = "error";
        errorShipping.innerHTML = "Please select a shipment";
        errorShipping.style.border = "2px solid red";
        errorShipping.style.color = "red";
        $parent.insertBefore(errorShipping, $buttons);
        error = true;
    }
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
            $profile.classList.add("is-hidden");
            document.querySelector(".address").classList.remove("is-hidden");
            //$profile.style.display = "none";
            //document.querySelector(".address").style.display = "block";
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

//TIMER

var inteval = "";

let minutesShopping = 0;
let secondsShopping = 0;

function timer() {
    let cont = 0;
    setInterval(function() {
        secondsShopping++;
        if (secondsShopping === 60) {
            minutesShopping++;
            secondsShopping = 0;
        }
    }, 1000);

    interval = setInterval(function() {
        cont++;
        document.querySelector(".time-shipping").style.opacity = "1";
        document.querySelector(".time-shipping").style.top = "30%";
        document.querySelector(".time-shipping").style.right = "5%";
        document.querySelector(
            "#minutes-shopping "
        ).textContent = `${cont} minutes ago.`;
        if (cont === 5) {
            location.reload();
        }
    }, 60000);
}

//FIN TIMER