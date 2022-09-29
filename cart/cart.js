

let data = JSON.parse(localStorage.getItem("cart"));

data.forEach(el => {
    let img = document.getElementById('cart-image');
    img.src = el.image_url;
    let img1 = document.getElementById('cart-image1');
    img1.src = el.image_url;
    let img2 = document.getElementById('cart-image2');
    img2.src = el.image_url;
    let img3 = document.getElementById('cart-image3');
    img3.src = el.image_url;
    let name = document.getElementById('Pname');
    name.innerText = el.name;
    let brnd = document.getElementById('brand');
    brnd.innerText = el.brand;
    let price = document.getElementById('price');
    price.innerText =  "₹"  + " " + el.price
});