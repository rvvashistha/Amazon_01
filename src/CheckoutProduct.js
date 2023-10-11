import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket=()=>{
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id 
      })
  }
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="this is the checkoutProduct img"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
        {Array(rating)
            .fill()
            .map((_,id) => (
              <span key={id}>⭐</span>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
