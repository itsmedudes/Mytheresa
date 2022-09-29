function delivery(){
   return `<div id="shipping-billing">
   <div id="shipping">
   <h3>SHIPPING ADDRESS</h3>
   <p>please enter your shipping address in the form below</p>
   
   <div id="radio-div">
   <input type="radio" value="Mr"  name="b">
   <label for="Mr">Mr *</label><br>
   <input type="radio" value="Mrs" name="b">
   <label for="Mrs">Mrs *</label><br>
   <input type="radio" value="Ms" name="b">
   <label for="Ms">Ms *</label><br>
   </div>
   
   <form id="form">
      <input class="input-style" type="text" placeholder="first name *" >
      <input class="input-style" type="text" placeholder="last name *" id="">
      <input class="input-style" type="text" placeholder="company" id="">
      <input class="input-style" type="text" placeholder="Email address *" id="">
      <input class="input-style" type="text" placeholder="street *" id="">
      <input class="input-style" type="text" placeholder="address line 2" id="">
      <input class="input-style" type="text" placeholder="postcode *" id="">
      <input class="input-style" type="text" placeholder="city *" id="">
      <input class="input-style" type="text" placeholder="Country" id="">
      <input class="input-style" type="text" placeholder="mobile phone *" id="">
      <label for="">* required fields</label>
   </form>
   
   <h3>BILLING ADDRESS</h3>
   
   <P>If your billing address differs from your shipping address, please click "add billing address".</P>
   <button class="billing-btn">ADD BILLING ADDRESS</button>
   <button class="billing-btn shop-bag">BACK TO SHOPPING BAG</button>
   
   </div>
   
   <div class="line"></div>
   
   <!-- Shipping Method -->
   <div id="billing">
      <h3>SHIPPING METHOD</h3>
      <div class="shipping-method">
      
         <div class="shipping-box">
            <p>Due to a high volume of orders, delays of up to 2 days may occur. We apologize for any inconvenience this may cause. Please note that this delay applies to orders placed with both standard and express shipping.</p>
         </div>
      
      </div>
      <hr class="line-shipping">
      <div class="radio-express">
         <div>
            <input type="radio" >
            <label for="radio" class="express">Express</label>
         </div>
      
      <p class="price">€ 20.00</p>
      </div>
      <hr class="line-shipping">
      
      <!-- packing options -->
      <h3>CLIMATE NETURAL OPTION</h3>
      
      <div class="packing-container">
      <div class="packing-option">
      <input type="radio" id="a" name="a">
      <label for="">Mytheresa packaging</label>
      <p>Free</p>
      <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_mytheresa_2x.jpg" alt="" srcset="">
      </div>
      
      <div class="packing-option">
      <input type="radio" id="a" name="a">
      <label for="">eco packaging</label>
      <p>Free</p>
      <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/package/package_brown_2x.jpg" alt="">
      </div>
      </div>
      
      <hr class="line-shipping">
      
      
      <div class="radio-express">
         <div>
            <input type="checkbox">
      <label for="checkbox" class="label-bold">Help offset the carbon emissions of your order </label>
      
         </div>
      
      <p class="price">€ 04.00</p>
      </div>
      <hr class="line-shipping">
      
      <button id="shipping-checkout" class="login">PROCEED TO CHECKOUT</button>
   </div>
   </div>`
}
export {delivery}