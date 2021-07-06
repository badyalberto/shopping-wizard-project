// Filling Finished Gaps
let firstBuy = document.getElementById("first-buy");
firstBuy.addEventListener("click", filling);

function filling() {
  document.getElementById("finish-name").textContent =
    document.getElementById("video-name").textContent;
  document.getElementById("finish-platform").textContent +=
    " " +
    document.getElementById("video-select")[
      document.getElementById("video-select").selectedIndex
    ].textContent;
  document.getElementById("finish-price").textContent +=
    " " + document.getElementById("video-price").textContent;
}

let shipBtn = document.getElementById("next-shipping");
shipBtn.addEventListener("click", fillingShip);
function fillingShip (){
    if (document.querySelector(".select-option-shipping") == "")
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
  }
}

finalButton.addEventListener("click", lastButton);
