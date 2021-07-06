// SHIPPING

document.querySelector(".check-gift").addEventListener("click", checkGift);
let priceShippingInputs = document.querySelectorAll('input[name="shipping"]');
document.querySelector("#clear-form-shipping").addEventListener('click', clearFormShipping);
document.querySelector("#next-shipping").addEventListener('click', nextShipping);

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
    document.querySelector('#shipping-form').reset();
    document.querySelector('.gift-message').classList.add('gift-message-hidden');
    document.querySelector('.date-delivery').style.display = 'none';
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
    document.querySelector('.shipping').style.display = 'none';

}
//FIN SHIPPING