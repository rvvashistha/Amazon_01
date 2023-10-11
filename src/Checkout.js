import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user}, dispatch ] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://influencermarketinghub.com/wp-content/uploads/2021/11/Amazon-Display-Ad-Amazon-1024x140.jpg"
          alt="this is the add for amazon.com"
          className="checkout_ad"
        />
        <div>
          <h3>hello,{user?.email}</h3>
          <h1 className="checkout_title">Your Shopping Basket</h1>
          {basket.map((item,id) => (
            <CheckoutProduct key={id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
