function payment(){
   return`   
   <div id="okfile">
   <h3>PAYMENT METHOD</h3>
   <p>Please select your preferred payment method for this order</p>
  <hr class="line-shipping">

  <div class="payment-container">
    <div class="card-container">
      <input type="radio" checked="checked" name="uio">
      <p>Card</p>
   </div>
  
   <div class="card-details">
      <img src="https://kimaye-masai.netlify.app/card_img.png" alt=""></body><br>
      <label for="">Name on Card *</label><br>
      <input type="text" class="pad"><br>
      <label for="">Credit card Number *</label><br>
      <input type="text" class="pad" placeholder="1111 2222 3333 4444"><br>
      <label for="">Expiration date *</label><br>
      <input type="text" class="pad" placeholder="MM/YY"><br>
      <label for="">CVC / CVV *</label><br>
      <input type="text" class="pad" placeholder="123"><br>
      <a href="">what is this?</a>
      <p>* reqiured fields</p>
   </div>
   </div>
      <hr class="line-shipping">
      <!--  -->
      <div class="card-container">
      <input type="radio" name="uio" >
      <img class="payment-card-logo"src="https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg" class="card" alt="">
      </div>
      <hr class="line-shipping">
     <div class="payment-bottom-back">
      <div>
      <button class="backtodelivery">Back to Delivery</button>
      <p>Please note: By clicking this button, all data listed on this page will be erased for security reasons.</p>
   </div>
      <div>
         <button class="login" id="fifth">PROCEED TO CHECKOUT</button>
      </div> 
      
     </div>
     </div>`
}
export default payment