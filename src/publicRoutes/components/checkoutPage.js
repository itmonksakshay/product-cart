import React,{useEffect}from 'react';
import DiscountCode from '../../snippets/discountCoupon';
import CartWidget,{CartItemsWidget} from '../../snippets/cartWidget';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory } from "react-router-dom";


const CheckoutPage =(props)=>{ 

    const productCart = useSelector((state)=>state.productCart);
    const history = useHistory();
    const dispatch = useDispatch();
    const {cartItems} = productCart;



    useEffect(()=>{

      if(!cartItems.length){
        history.push('/cart');
      }

    },[cartItems]);


    return(<div>
        <h2>Checkout form</h2>
        <div>
         {/* <div>
            <div>
              <form>
                <div>
                  <div>
                    <div class="md-form ">
                      <input type="text" id="firstName" class="form-control"/>
                      <label for="firstName" class="">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="md-form">
                      <input type="text" id="lastName" class="form-control"/>
                      <label for="lastName" class="">Last name</label>
                    </div>
                  </div>
                </div>
                <div class="md-form input-group pl-0 mb-5">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="md-form mb-5">
                  <input type="text" id="email" class="form-control" placeholder="youremail@example.com">
                  <label for="email" class="">Email (optional)</label>
                </div>
                <div class="md-form mb-5">
                  <input type="text" id="address" class="form-control" placeholder="1234 Main St">
                  <label for="address" class="">Address</label>
                </div>
                <div class="md-form mb-5">
                  <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite">
                  <label for="address-2" class="">Address 2 (optional)</label>
                </div>

              <div class="row">

                <div class="col-lg-4 col-md-12 mb-4">
                  <label for="country">Country</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">Please select a valid country.</div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                  <label for="state">State</label>
                  <select class="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="zip">Zip</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required>
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
              </div>

              <hr>

              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info">
                <label class="custom-control-label" for="save-info">Save this information for next time</label>
              </div>

              <hr>

              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                  <label class="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required>
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required>
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4">
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>*/}

        <div>
          <CartWidget/>
          <CartItemsWidget/>
          <DiscountCode/>
        </div>
      </div>
    </div>);

}

export default CheckoutPage;