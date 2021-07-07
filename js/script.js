// PRODUCT
document.querySelector("#select-option").addEventListener("change", versionGame);

function addEventsImages() {
    let imageVersions = document
        .querySelector("#editions").children;

    for (let image of imageVersions) {
        image.addEventListener('click', changeContentImagesLeftPrice);
    }
}
addEventsImages();


function changeContentImagesLeftPrice(e) {
    let version = e.target.getAttribute('game-version');
    let imageVersions = document.querySelector("#editions").children;
    let thumbnailsImages = document.querySelector('.thumbnails-images-product').children;

    //reset version games images
    for (let image of imageVersions) {
        image.classList.remove('active');
    }

    //Reset thumbsnails Images
    for (let image of thumbnailsImages) {
        image.classList.remove('active');
    }

    //add class active first child of .thumbnails-images-product
    thumbnailsImages[0].classList.add('active');

    switch (version) {
        case 'normal':
            document.querySelector('#price').textContent = '39.95€';
            break;
        case 'deluxe':
            document.querySelector('#price').textContent = '49.95€';
            break;
        case 'gold':
            document.querySelector('#price').textContent = '59.95€';
            break;
        case 'ultimate':
            document.querySelector('#price').textContent = '69.95€';
            break;
        default:
            break;
    }
    e.target.classList.toggle('active');
    let opt = document.querySelector('#select-option').value;
    document.querySelector('.image-game').setAttribute('src', `./images/${opt}_${version}_caratula.jpg`);
    document.querySelector('.image-thumbnails').setAttribute('src', `./images/${opt}_${version}_caratula.jpg`);

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

function changeContentImagesVersion(version = '') {
    let editions = document.querySelector("#editions");
    editions.innerHTML = "";

    if (version !== '') {
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        img1.setAttribute("src", `./images/${version}_normal_caratula.jpg`);
        img2.setAttribute("src", `./images/${version}_deluxe_caratula.jpg`);
        img3.setAttribute("src", `./images/${version}_gold_caratula.jpg`);
        img4.setAttribute("src", `./images/${version}_ultimate_caratula.jpg`);
        img1.setAttribute('class', 'image-version-game active');
        img2.setAttribute('class', 'image-version-game');
        img3.setAttribute('class', 'image-version-game');
        img4.setAttribute('class', 'image-version-game');
        img1.setAttribute('game-version', 'normal');
        img2.setAttribute('game-version', 'deluxe');
        img3.setAttribute('game-version', 'gold');
        img4.setAttribute('game-version', 'ultimate');
        editions.append(img1);
        editions.append(img2);
        editions.append(img3);
        editions.append(img4);
        addEventsImages();
    }
}

var thumbnails = document.querySelector('.thumbnails-images-product').children;

for (let image of thumbnails) {
    image.addEventListener('click', showBigImage);
}

function showBigImage(e) {
    for (let image of thumbnails) {
        image.classList.remove('active');
    }

    if (e.target.getAttribute('id-img') === "0") {
        let platform = document.querySelector('#select-option').value;
        let version = document.querySelector('.image-version-game.active').getAttribute('game-version');
        document.querySelector('.image-game').setAttribute('src', `./images/${platform}_${version}_caratula.jpg`);
    } else {
        document.querySelector('.image-game').setAttribute('src', `./images/screen${e.target.getAttribute('id-img')}.jpg`);
    }

    e.target.classList.toggle('active');
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
    if (!correctForm) {

    }

}
//FIN SHIPPING