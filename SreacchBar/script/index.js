import { navbar } from "../components/navbar.js";
let nav= document.getElementById("nav");
nav.innerHTML=navbar();

const API ="qCtNBswsyxYYd__VlDLov0BTpF7pd90n16akzQY1ws0";



//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=YOUR_ACCESS_KEY

import {searchImages, append} from "./add.js";


let search = (e) => {
    if(e.key==="Enter"){
        let  value =document.getElementById("query").value;
        searchImages(API, value).then((data) => {
            console.log(data);
            let container =document.getElementById("container")
            container.innerHTML=null;
            append(data.results, container)
        });
    }
};
document.getElementById("query").addEventListener("keydown", search);

// let searchImages= async() => {
//     let  value =document.getElementById("query").value;
//     try{
//         let res =await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);
//         let data = await res.json();
//         console.log(data);
//         append(data)
//     }catch(err){
//         console.log(err);
//     }
// }

