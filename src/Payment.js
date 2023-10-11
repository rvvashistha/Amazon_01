import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout(<Link to={"/checkout"}>{basket?.length} items</Link>)</h1>
        {/* payment section- delivery address */}
        <div className="Payment_sections">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>React Lane</p>
            <p>Los Angeles,CA</p>
          </div>
        </div>
        {/* payment section- Review Item and delivery */}
        <div className="Payment_sections">
          <div className="payment_title"> 
            <h3>Review Item And Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item,idx) => (
              <CheckoutProduct key={idx}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section- Payment Method*/}
        <div className="Payment_sections">
        <div className="payment_title"> 
            <h3>Payment Details</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
