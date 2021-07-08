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
    $address.insertBefore(popUpAddress, address2);
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
    $address.style.display = "none";
    document.querySelector(".shipping").style.display = "block";
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
