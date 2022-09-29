import navbar from "../components/navbar.js";
let navb = document.getElementById('navx');
navb.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("cart"));

data.forEach(el => {
    console.log(el);
    let image = document.getElementById("img");
    image.src = el.image_url
    let price = document.getElementById('price');
    price.innerText = "₹" + " " + el.price
    let value = document.getElementById('value').value
    let totalprice = document.getElementById('total');
    totalprice.innerText = (el.price * Number(value))
    let sub = document.getElementById('sub');
    sub.innerText = "Sub Total : ₹" + " " + el.price
    let grand = document.getElementById('grand');
    grand.innerText = "Grand Total : ₹" + " " + el.price

    let name = document.getElementById('name');
    name.innerText = el.name;
    let brnd = document.getElementById('brand');
    brnd.innerText = el.brand;
});