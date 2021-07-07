// Filling Finished Gaps
let firstBuy = document.getElementById("first-buy");
firstBuy.addEventListener("click", filling);

function filling() {
  document.getElementById("finish-name").innerHTML =
    "<b>" + document.getElementById("video-name").innerHTML + "</b>";
  document.getElementById("finish-platform").innerHTML +=
    " " +
    "<b>" +
    document.getElementById("video-select")[
      document.getElementById("video-select").selectedIndex
    ].textContent +
    "</b>";
  document.getElementById("finish-price").innerHTML +=
    " " + "<b>" + document.getElementById("video-price").innerHTML + "</b>";
}

let shipBtn = document.getElementById("next-shipping");
shipBtn.addEventListener("click", filling2);
function filling2(evt) {
  evt.preventDefault();
  let complex = document.querySelector(".shipping-type");
  console.log(complex);
  let inp = complex.querySelectorAll('input[name = "shipping"]');
  console.log(inp);
  let sel = "";
  for (let input of inp) {
    if (input.checked) {
      sel = input.value;
    }
  }
  let finishShipping = document.getElementById("finish-shipping");

  switch (sel) {
    case "free":
      finishShipping.innerHTML += " " + "<b>" + "0€" + "</b>";
      break;
    case "extra":
      finishShipping.innerHTML += " " + "<b>" + "4.99€" + "</b>";
      break;
    case "premium":
      finishShipping.innerHTML += " " + "<b>" + "9.99€" + "</b>";
      break;
    default:
      break;
  }
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
