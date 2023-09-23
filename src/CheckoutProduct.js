import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    
    const removeFromBasket=()=>{
            dispatch({
                type:"REMOVE_FORM_BASKET",
                id:id,
            })
    }       
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct_image"
        src={image}
        alt="here is the checkout product img"
      />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => {
              return (
                <span>
                  <p>⭐</p>
                </span>
              );
            })}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
