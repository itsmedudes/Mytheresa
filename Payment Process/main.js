// login  and without login



document.querySelector(".first").setAttribute("id","z")
document.querySelector(".second").setAttribute("id","y")
document.querySelector(".third").setAttribute("id","n")
document.querySelector(".fourth").setAttribute("id","n")
document.querySelector(".fifth").setAttribute("id","n")

let email = document.getElementById('email')
let password = document.getElementById("password")


document.getElementById("log").addEventListener("click",logins)
document.getElementById("without-login").addEventListener("click",withoutLogin)




function logins(){

   if(email.value==="masai@gmail.com"){
   
      if(password.value==="1234"){
         fundelivery()
      }
   }
   else{
      alert('invalid Credential')
   }
}

function withoutLogin(){
   fundelivery()
}

// import liabariries
// import login from "./login.js"
import {delivery} from "./delivery.js"
import payment from "./payment.js"
import confirm from "./confirm.js"




function fundelivery(){
      document.getElementById("extraappend").innerHTML = delivery()
   
    document.getElementById("shipping-checkout").addEventListener("click", shippingCheckout)
document.querySelector(".first").setAttribute("id","z")
document.querySelector(".second").setAttribute("id","z")
document.querySelector(".third").setAttribute("id","y")
document.querySelector(".fourth").setAttribute("id","n")
document.querySelector(".fifth").setAttribute("id","n")



}

function shippingCheckout(){
   
   document.getElementById("extraappend").innerHTML = payment()
   document.querySelector(".first").setAttribute("id","z")
document.querySelector(".second").setAttribute("id","z")
document.querySelector(".third").setAttribute("id","z")
document.querySelector(".fourth").setAttribute("id","y")
document.querySelector(".fifth").setAttribute("id","n")

document.getElementById("fifth").addEventListener("click", confirms)
document.querySelector(".backtodelivery").addEventListener("click", backtodeliver)
}


function confirms(){
   document.getElementById("extraappend").innerHTML = confirm()
   document.querySelector(".first").setAttribute("id","z")
document.querySelector(".second").setAttribute("id","z")
document.querySelector(".third").setAttribute("id","z")
document.querySelector(".fourth").setAttribute("id","z")
document.querySelector(".fifth").setAttribute("id","y")
  alert("Order Sucessfully Placed")
}



function backtodeliver(){
   document.getElementById("extraappend").innerHTML = delivery()
   document.querySelector(".first").setAttribute("id","z")
document.querySelector(".second").setAttribute("id","z")
document.querySelector(".third").setAttribute("id","y")
document.querySelector(".fourth").setAttribute("id","n")
document.querySelector(".fifth").setAttribute("id","n")
}






