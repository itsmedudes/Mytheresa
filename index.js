import navbar from "../components/navbar.js";

let nav = document.getElementById("navbar2");
nav.innerHTML = navbar()

import footer from "../components/footer.js";

let last = document.getElementById("foot");
last.innerHTML = footer()


document.getElementById("search").addEventListener("click", function () {
    // let container = document.getElementById('cont');
    // container.style.display="block"
    let api = "qCtNBswsyxYYd__VlDLov0BTpF7pd90n16akzQY1ws0";

    let value = document.getElementById('query').value || "";


let getData = async () => {
    let url = (`https://api.unsplash.com/search/photos/?query=${value}&per_page=30&client_id=${api}`)
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.results)
    append(data.results)
}

    getData()
    
    function append(data) {
        console.log(data);
        let container = document.getElementById('cont') || null;
        data.forEach(function (el) {
            let div = document.createElement('div');
            let name = document.createElement('p');
            name.innerText = el.alt_description;
            console.log(name);
            container.append(name)
        })
         
}    


})
