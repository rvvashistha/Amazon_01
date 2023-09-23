import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/31/digital/music/merch/India/2020/Weekly/gw/SWM_Jawan_GW_400x39._CB597065755_.jpg"
          alt="here are ads!!!"
        ></img>
        <div className="checkout_title">
          <h1> Your Shopping Basket</h1>
        </div>
        {basket.map(item => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}    
            price={item.price}
            rating={item.rating}
        ></CheckoutProduct>
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
